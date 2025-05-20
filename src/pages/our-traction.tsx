import { graphql, navigate, PageProps } from 'gatsby'
import React from 'react'
import { Button } from '../components/atoms/Button'
import { HyperLink } from '../components/atoms/Hyperlink'
import {
    ColumnContent,
    TwoColumnLayout,
} from '../components/Examples/TwoColumnLayout'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'
import { SampleItem } from '../components/UseCases/components/SampleItem'
import { LogView } from '../svg/LogView'

export const query = graphql`
    query OurTractionPageQuery {
        sitePage(path: { eq: "/our-traction/" }) {
            fields {
                embedsData {
                    url
                    title
                    description
                    imageUrl
                }
            }
        }
    }
`

interface OurTractionPageData {
    sitePage: {
        fields: {
            embedsData: {
                url: string
                title: string
                description: string
                imageUrl: string
            }[]
        }
    }
}

const OurTractionContent: React.FC<{
    data: OurTractionPageData | null
    path: string
}> = ({ data, path }) => {
    // const embedsData = data.sitePage.fields.embedsData
    const embedsData = data?.sitePage?.fields?.embedsData

    const leftColumnContent: ColumnContent[] = [
        { type: 'subtitle', index: 0 },
        { type: 'contents', index: 0 },
    ]

    // const rightColumnContent: ColumnContent[] = [{ type: 'embed', index: 0 }]
    const rightColumnContent: ColumnContent[] = [{ type: 'images', index: 0 }]

    return (
        <TwoColumnLayout
            leftColumn={leftColumnContent}
            rightColumn={rightColumnContent}
            pageTitle="Our traction"
            pageSubtitle="$6.55K MRR with 3 clients. More are currently trialling."
            embeds={embedsData}
            contents={[
                <>
                    <div className="mb-7">
                        <SampleItem
                            title="3 'pure player' clients, who are Meeting Bots new-comers"
                            description=""
                            additionalItems={[]}
                            children={
                                <>
                                    <span className="font-bold">
                                        <HyperLink
                                            link={'https://www.raijin.ai/'}
                                            textContent={'Raijin'}
                                            newWindow={true}
                                        />{' '}
                                        - $500 / month. Singaporean.
                                    </span>{' '}
                                    Your AI Copilot in Qualitative Research and
                                    Analysis.
                                    <br></br>
                                    <span className="font-bold">
                                        <HyperLink
                                            link={'https://www.claap.io/'}
                                            textContent={'Claap'}
                                            newWindow={true}
                                        />{' '}
                                        - $2550 / month in September 2024.
                                        French.
                                    </span>{' '}
                                    HEY CLAAP, UPDATE MY CRM. Manages all Sales
                                    busywork, including deal notes, follow-ups,
                                    and CRM enrichment.
                                    <br></br>
                                    French.
                                    <br></br>
                                    <span className="font-bold">
                                        <HyperLink
                                            link={
                                                'https://www.salesbud.com.br/'
                                            }
                                            textContent={'SalesBud'}
                                            newWindow={true}
                                        />{' '}
                                        - $3300 / month + usage. Brazilian.
                                    </span>{' '}
                                    Automation of manual tasks, predictive
                                    analysis, and more.
                                    <br></br>
                                    Pricing: $3000/month for the white-labelled
                                    spoke-app platform (
                                    <HyperLink
                                        link={'/white-labelling'}
                                        textContent={'details here'}
                                    />
                                    ), $300/month for Meeting Baas Platform,
                                    plus $0.42/hour for Bots (excluding
                                    transcription).
                                    <br></br>
                                    <br></br>
                                    We've only been building the Baas API since
                                    May 2024.
                                </>
                            }
                        />
                    </div>
                </>,
                <>
                    <div className="mb-7">
                        <SampleItem
                            title="Developer friendly"
                            description=""
                            additionalItems={[]}
                            children={
                                <>
                                    {/* By being developper friendly, and hitting
                                    marketing escape velocity we will be able to
                                    compete with Recall instantly for new
                                    customers as our APIs are almost at parity,
                                    and we are more developper friendly
                                    (Open-Source code examples, Discord for the
                                    community, ...) */}
                                </>
                            }
                        />
                    </div>
                </>,
            ]}
            images={[
                {
                    src: 'ZoomCeo',
                    alt: 'Zoom CEO',
                    component: <LogView />,
                },
            ]}
            codeExamples={[]}
            buttonToShow={[
                <Button
                    key="why-sure"
                    name="Why can we do this?"
                    color="black"
                    onClick={() => navigate('/about/')}
                />,
                <Button
                    key="zoom-ceo-guardian-interview"
                    name="Link"
                    color="green"
                    onClick={() =>
                        window.open(
                            'https://www.theguardian.com/technology/article/2024/jun/05/the-future-is-sending-ai-avatars-to-meetings-for-us-says-zoom-boss',
                        )
                    }
                />,
            ]}
            title={''}
            subtitle={''}
            roundedButtons={undefined}
        />
    )
}

const OurTraction: React.FC<PageProps<OurTractionPageData>> = ({
    data,
    path,
}) => {
    return (
        <main className="snap-mandatory">
            <div className="overflow-y-scroll  h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <OurTractionContent path={path} data={data} />

                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default OurTraction

export const Head = () => {
    return (
        <SEO
            title="Meeting Baas 🐟 | Public Pitch Deck"
            description=""
            imagePath="previewPricing"
        />
    )
}
