import type { GatsbyConfig } from 'gatsby'

console.info(`NODE_ENV : ${process.env.NODE_ENV}`)

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

let plugins = [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
        resolve: `gatsby-plugin-sitemap`,
        options: {
            query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
        }
      `,
            resolveSiteUrl: ({ site }) => site.siteMetadata.siteUrl,

            resolvePages: ({ allSitePage: { nodes: allPages } }) => {
                const transcriptSeekerPage = { path: '/transcript-seeker/' }
                const orderedPages = [
                    '/',
                    '/features',
                    '/use-cases',
                    '/pricing',
                    '/docs',
                    '/about',
                ]

                // Filter and sort the pages
                const filteredAndSortedPages = allPages
                    .filter(
                        (page) =>
                            page.path !== '/api-pricing' &&
                            page.path !== '/terms-and-conditions' &&
                            page.path !== '/privacy',
                    )
                    .sort((pageA, pageB) => {
                        const indexA = orderedPages.indexOf(pageA.path)
                        const indexB = orderedPages.indexOf(pageB.path)

                        // If both pages are in the orderedPages array
                        if (indexA !== -1 && indexB !== -1) {
                            return indexA - indexB // Sort based on their position in orderedPages
                        }

                        // If only pageA is in orderedPages, it should come first
                        if (indexA !== -1) {
                            return -1
                        }

                        // If only pageB is in orderedPages, it should come first
                        if (indexB !== -1) {
                            return 1
                        }

                        // If neither page is in orderedPages, their order doesn't matter
                        return 0
                    })

                // Add the ordered pages that exist in filteredAndSortedPages
                const result = orderedPages.filter((path) =>
                    filteredAndSortedPages.some((page) => page.path === path),
                )

                // Add any remaining pages from filteredAndSortedPages
                filteredAndSortedPages.forEach((page) => {
                    if (!result.includes(page.path)) {
                        result.push(page.path)
                    }
                })

                // Add the transcript seeker page at the end
                result.push(transcriptSeekerPage.path)

                // Add the transcript seeker page after /features
                const featuresIndex = result.indexOf('/features')
                result.splice(featuresIndex + 1, 0, transcriptSeekerPage.path)
                result.pop() // Remove the last item (duplicate transcript seeker page)

                // Convert paths back to objects
                return result.map((path) => ({ path }))
            },

            serialize: ({ path }) => {
                // Custom logic to handle the transcript-seeker URL
                if (
                    path === '/transcript-seeker/' ||
                    path === '/transcript-seeker'
                ) {
                    return {
                        url: `https://meetingbaas.com/transcript-seeker/`,
                        changefreq: `daily`,
                        priority: 0.7,
                    }
                }

                // Default serialization for other pages
                return {
                    url: path,
                    changefreq: `daily`,
                    priority: 0.7,
                }
            },
        },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: { name: 'images', path: `${__dirname}/src/images` },
    },
    {
        resolve: 'gatsby-plugin-google-tagmanager',
        options: {
            id: 'AW-580049802',
        },
    },
    'gatsby-plugin-postcss',
]

if (process.env.GATSBY_ACTIVATE_SEO === 'true') {
    console.info('🐮 Adding canonical to landing build 🐮')
    plugins.push({
        resolve: `gatsby-plugin-canonical-urls`,
        options: {
            siteUrl: `https://meetingbaas.com`,
            stripQueryString: true,
        } as any, // INFO : Bypass TypeScript Checker limitation about unexpected objets options.
    })
} else {
    console.info('🐮 No canonical to landing build 🐮. 🐰 adding no-index 🐰 ')
    plugins.push({
        resolve: `gatsby-plugin-no-index`,
        options: {
            // not sure what this is about
            // necessary for compilation => works with blank values
            apiKey: 'your_api_key', // Add your API key here
            apiHost: 'https://your_api_host.com', // Add your API host here
            head: true,
            isEnabledDevMode: false,
        },
    })
}

const config: GatsbyConfig = {
    flags: {
        DEV_SSR: true,
    },
    trailingSlash: 'never',
    siteMetadata: {
        title: `Meeting Baas 🐟 | Run your own meeting bots in 2 minutes`,
        description: `Meeting Bots As A Service, through a simple pay as you go API for video meetings. Bridge the gap between meetings and LLMs by running your own meeting bots to record and AI summarize meetings. At scale.`,
        twitterUsername: `@MeetingBaas`,
        copyright: `copyright 2020-2024 Spoke SAS`,
        siteUrl: `https://meetingbaas.com`,
        contact: `hello@spoke.app`,
    },
    plugins: plugins,
}

export default config
