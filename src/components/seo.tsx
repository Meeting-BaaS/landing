import { graphql, useStaticQuery } from 'gatsby'

import { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import { Helmet } from 'react-helmet'

interface SEOProps {
    title?: string
    description?: string
    twitterUsername?: string
    copyright?: string
    siteUrl?: string
    imagePath?: string
    iconPath?: string
    contact?: string
    pathname?: string
    isHomePage?: boolean
}

interface SiteMetadata {
    defaultTitle: string
    defaultDescription: string
    defaultTwitterUsername: string
    defaultCopyright: string
    defaultSiteUrl: string
    defaultContact: string
}

interface ImageEdge {
    node: {
        relativePath: string
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData
        }
    }
}

interface QueryData {
    site: {
        siteMetadata: SiteMetadata
    }
    allFile: {
        edges: ImageEdge[]
    }
}

// on meetingbaas-prod "all pages are home pages", we want to index all pages
export const SEO: React.FC<SEOProps> = ({ isHomePage = true, ...props }) => {
    const data: QueryData = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    defaultTitle: title
                    defaultDescription: description
                    defaultTwitterUsername: twitterUsername
                    defaultCopyright: copyright
                    defaultSiteUrl: siteUrl
                    defaultContact: contact
                }
            }
            allFile(filter: { extension: { eq: "png" } }) {
                edges {
                    node {
                        relativePath
                        childImageSharp {
                            gatsbyImageData(
                                width: 1200
                                placeholder: BLURRED
                                formats: [AUTO, WEBP]
                            )
                        }
                    }
                }
            }
        }
    `)

    const defaultImagePath = 'preview'
    const defaultIconPath = 'BaasLogo'
    const imagePath = props.imagePath
        ? `${props.imagePath}.png`
        : `${defaultImagePath}.png`
    const iconPath = props.iconPath
        ? `${props.iconPath}.png`
        : `${defaultIconPath}.png`

    const imageEdge = data.allFile.edges.find(
        (edge) =>
            edge.node.relativePath === imagePath && edge.node.childImageSharp,
    )

    const iconEdge = data.allFile.edges.find(
        (edge) =>
            edge.node.relativePath === iconPath && edge.node.childImageSharp,
    )

    const seo = {
        title: props.title || data.site.siteMetadata.defaultTitle,
        description:
            props.description || data.site.siteMetadata.defaultDescription,
        twitterUsername:
            props.twitterUsername ||
            data.site.siteMetadata.defaultTwitterUsername,
        copyright: props.copyright || data.site.siteMetadata.defaultCopyright,
        url: `${data.site.siteMetadata.defaultSiteUrl}${props.pathname || '/'}`,
        image:
            imageEdge &&
            imageEdge.node.childImageSharp &&
            imageEdge.node.childImageSharp.gatsbyImageData &&
            imageEdge.node.childImageSharp.gatsbyImageData.images &&
            imageEdge.node.childImageSharp.gatsbyImageData.images.fallback &&
            imageEdge.node.childImageSharp.gatsbyImageData.images.fallback.src
                ? imageEdge.node.childImageSharp.gatsbyImageData.images.fallback
                      .src
                : `${defaultImagePath}.png`,
        icon:
            iconEdge &&
            iconEdge.node.childImageSharp &&
            iconEdge.node.childImageSharp.gatsbyImageData &&
            iconEdge.node.childImageSharp.gatsbyImageData.images &&
            iconEdge.node.childImageSharp.gatsbyImageData.images.fallback &&
            iconEdge.node.childImageSharp.gatsbyImageData.images.fallback.src
                ? iconEdge.node.childImageSharp.gatsbyImageData.images.fallback
                      .src
                : `${defaultIconPath}.png`,
        contact: props.contact || data.site.siteMetadata.defaultContact,
    }

    return (
        <Helmet>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            {/* Conditional rendering for robots meta tag */}
            {isHomePage ? (
                <meta name="robots" content="index, follow" />
            ) : (
                <meta name="robots" content="noindex, nofollow" />
            )}

            {/* Google analytics */}
            <meta
                name="google-site-verification"
                content="bPYbiWMMrhsUmrP3GYVyWKr1UIe8WQQFN6E3VASwKlQ"
            />

            {/* Favicon */}
            <link rel="icon" href={seo.icon} />

            {/* Open Graph meta-tags */}
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:url" content={seo.url} />

            {/* Twitter Card meta-tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <meta name="twitter:creator" content={seo.twitterUsername} />
        </Helmet>
    )
}
