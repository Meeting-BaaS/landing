import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

export const CenteredImage = (props: {
    picture: any
    alt: string
    width?: number
    height?: number
    className?: string
}) => {
    console.log('picture', props.picture)

    const image = getImage(UseAllPictures(props.picture)) // Assuming `UseAllPictures` is not needed
    return (
        <>
            {image && (
                <div className="flex justify-center">
                    <GatsbyImage
                        image={image}
                        alt={props.alt}
                        className={`rounded-xl max-w-full h-auto ${
                            props.className || ''
                        }`}
                    />
                </div>
            )}
        </>
    )
}

const allPicturesQuery = graphql`
    query {
        allFile(filter: { extension: { eq: "png" } }) {
            nodes {
                name
                childImageSharp {
                    gatsbyImageData(
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
        }
    }
`

export const UseAllPictures = (pictureName: string) => {
    const AllPictures = useStaticQuery(allPicturesQuery)
    return AllPictures.allFile.nodes.find((x: any) => x.name === pictureName)
}
