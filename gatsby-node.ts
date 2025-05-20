import axios from 'axios'
import cheerio from 'cheerio'
import type { GatsbyNode } from 'gatsby'

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
    actions,
}) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.sh$/,
                    type: 'asset/source',
                },
                {
                    test: /\.py$/,
                    type: 'asset/source',
                },
            ],
        },
    })
}

exports.onCreateNode = async ({ node, actions }: any) => {
    const { createNodeField } = actions
    if (node.path === '/our-traction/') {
        console.log('Creating node field for /our-traction/')
        try {
            const embedsData = [{ url: 'https://claap.io' }]

            const fetchedData = await Promise.all(
                embedsData.map(async (embed) => {
                    const response = await axios.get(embed.url)
                    const $ = cheerio.load(response.data)

                    return {
                        url: embed.url,
                        title: $('meta[property="og:title"]').attr('content'),
                        description: $('meta[property="og:description"]').attr(
                            'content',
                        ),
                        imageUrl: $('meta[property="og:image"]').attr(
                            'content',
                        ),
                    }
                }),
            )
            console.log('Fetched data:', fetchedData)

            createNodeField({
                node,
                name: 'embedsData',
                value: fetchedData,
            })
        } catch (error) {
            console.error('Error fetching embed data:', error)
        }
    }
}

exports.createSchemaCustomization = ({ actions }: any) => {
    const { createTypes } = actions
    const typeDefs = `
    type SitePage implements Node {
      fields: SitePageFields
    }
    type SitePageFields {
      embedsData: [EmbedData]
    }
    type EmbedData {
      url: String
      title: String
      description: String
      imageUrl: String
    }
  `
    createTypes(typeDefs)
}
