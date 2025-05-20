import { PageProps } from 'gatsby'
import React from 'react'
import { HyperLink } from '../components/atoms/Hyperlink'
import {
    ColumnContent,
    TwoColumnLayout,
} from '../components/Examples/TwoColumnLayout'
import Footer from '../components/Layout/Footer'
import { ManifestoFooter } from '../components/Layout/ManifestoFooter'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'
import { SampleItem } from '../components/UseCases/components/SampleItem'
import { RawBotData } from '../svg/RawBotData'

const GuardianArticle = () => {
    return (
        <div className="flex justify-end">
            <div className="w-1/2">
                <div className="text-right">
                    <br></br>
                    "Essentially, in order to{' '}
                    <HyperLink
                        link="https://www.theverge.com/2024/6/3/24168733/zoom-ceo-ai-clones-digital-twins-videoconferencing-decoder-interview"
                        textContent="listen to the call but also to interact"
                    />{' '}
                    with a participant in a meaningful way [...]"
                    <br></br>
                </div>
            </div>
        </div>
    )
}

const MeetingBotsAreTheNewNormContent: React.FC<{ path: string }> = ({
    path,
}) => {
    const leftColumnContent: ColumnContent[] = [
        { type: 'subtitle', index: 0 },
        { type: 'contents', index: 0 },
        { type: 'contents', index: 1 },
    ]

    const rightColumnContent: ColumnContent[] = [{ type: 'images', index: 0 }]

    return (
        <TwoColumnLayout
            leftColumn={leftColumnContent}
            rightColumn={rightColumnContent}
            pageTitle="Passive transcriber, recording bots"
            pageSubtitle="are prevalent and still booming"
            contents={[
                <>
                    <div className="mb-7">
                        <SampleItem
                            title="Via native conversation intelligence 'pure players'"
                            description=""
                            children={
                                <>
                                    <div>
                                        Thanks to the creation and usage of
                                        meeting bots that can record and
                                        transcribe hundreds of startups have
                                        emerged such as{' '}
                                        <HyperLink
                                            link="https://gong.io"
                                            textContent="Gong"
                                            newWindow={true}
                                        />
                                        ,{' '}
                                        <HyperLink
                                            link="https://grain.com/"
                                            textContent="Grain"
                                            newWindow={true}
                                        />
                                        ,{' '}
                                        <HyperLink
                                            link="https://www.attention.tech/"
                                            textContent="Attention"
                                            newWindow={true}
                                        />
                                        ,{' '}
                                        <HyperLink
                                            link="https://en.modjo.ai/"
                                            textContent="Modjo"
                                            newWindow={true}
                                        />
                                        ,{' and '}
                                        <HyperLink
                                            link="https://fellow.app/blog/productivity/meeting-bots/"
                                            textContent="more"
                                            newWindow={true}
                                        />
                                        .
                                    </div>
                                    {/* Uncomment this section if needed in the future */}
                                    {/* <div>
                                            In most cases, these companies did not develop the meeting bots themselves. 
                                            Instead, they relied on the API of our unique competitor,{' '}
                                            <HyperLink
                                                link="https://recall.ai"
                                                textContent="Recall"
                                                newWindow={true}
                                            />
                                            .
                                        </div> */}
                                </>
                            }
                        />
                    </div>
                </>,
                <>
                    <div className="mb-7">
                        <SampleItem
                            title="Now through all Business Relationship Management Tools"
                            description="CRMs and ATSs (Applicant Tracking Systems) will become obsolete if they don't incorporate conversation intelligence features, such as automatic note-taking,  applicant information extraction after a video meeting, etc."
                            children={
                                <>
                                    <div></div>
                                </>
                            }
                        />
                    </div>
                </>,
                <>
                    <GuardianArticle />
                </>,
            ]}
            images={[
                {
                    src: 'ZoomCeo',
                    alt: 'Zoom CEO',
                    component: <RawBotData />,
                },
            ]}
            codeExamples={[]}
            buttonToShow={[]}
            title={''}
            subtitle={''}
            roundedButtons={ManifestoFooter({ path })}
        />
    )
}

const MeetingBotsAreTheNewNorm: React.FC<PageProps> = ({ path }) => {
    return (
        <main className="snap-mandatory">
            <div className="overflow-y-scroll  h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <MeetingBotsAreTheNewNormContent path={path} />

                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default MeetingBotsAreTheNewNorm

export const Head = () => {
    return (
        <SEO
            title="Meeting Baas 🐟 | Passive transcriber bots are a new norm"
            description="The norm for business meetings. Powering conversation intelligence startups, CRMs and ATSs."
            imagePath="previewPitchDeckMeetingBaas"
        />
    )
}
