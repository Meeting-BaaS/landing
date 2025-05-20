import { graphql, useStaticQuery } from 'gatsby'

export const UseAllPictures = (pictureName: string) => {
    const AllPictures = useStaticQuery(graphql`
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
    `)
    return AllPictures.allFile.nodes.find((x: any) => x.name === pictureName)
}
