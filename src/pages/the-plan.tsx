import { PageProps } from 'gatsby'
import React from 'react'
import {
    ColumnContent,
    TwoColumnLayout,
} from '../components/Examples/TwoColumnLayout'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'
import { SampleItem } from '../components/UseCases/components/SampleItem'

const PlanContent: React.FC<{ path: string }> = ({ path }) => {
    const leftColumnContent: ColumnContent[] = [
        { type: 'subtitle', index: 0 },
        { type: 'contents', index: 0 },
    ]

    const rightColumnContent: ColumnContent[] = [{ type: 'images', index: 0 }]

    return (
        <TwoColumnLayout
            leftColumn={leftColumnContent}
            rightColumn={rightColumnContent}
            pageTitle="The plan"
            pageSubtitle="Donald Trump in your Daily Meeting"
            contents={[
                <div className="mb-7">
                    <SampleItem
                        title="Or any celebrity"
                        description=""
                        additionalItems={[
                            {
                                label: 'dominant go-to option for speaking meeting bots',
                                content: '',
                            },
                            {
                                label: 'alternative for passive, recording bots',
                                content: '',
                            },
                            {
                                label: 'household name for meeting bots',
                                content: '',
                            },
                        ]}
                    >
                        <>
                            This, on the other hand, is a gimmick—a gimmick
                            (along with the release of other personae) that will
                            generate a huge amount of backlinks and establish us
                            as{' '}
                            <strong>
                                <em>the</em>
                            </strong>
                            {':'}
                        </>
                    </SampleItem>
                </div>,
                // <>
                //     <div className="mb-7">
                //         <SampleItem
                //             title=""
                //             description=""
                //             additionalItems={[]}
                //             children={
                //                 <>
                //                     Personally, we're more into European
                //                     filmmakers and philosophers.{' '}
                //                     <HyperLink
                //                         link={
                //                             'https://infiniteconversation.com/'
                //                         }
                //                         textContent={'Check out this POC'}
                //                         newWindow={true}
                //                     />{' '}
                //                     (without a fake video stream) of Werner
                //                     Herzog and Slavoj Žižek
                //                     {'.'}
                //                 </>
                //             }
                //         ></SampleItem>
                //     </div>
                // </>,
            ]}
            images={[
                {
                    src: 'DonaldTrump',
                    alt: 'Donald Trump in your daily video-meeting.',
                },
            ]}
            codeExamples={[]}
            buttonToShow={[]}
            title={''}
            subtitle={''}
            // roundedButtons={ManifestoFooter({ path })}
            roundedButtons={undefined}
        />
    )
}

const Plan: React.FC<PageProps> = ({ path }) => {
    return (
        <main className="snap-mandatory">
            <div className="overflow-y-scroll  h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <PlanContent path={path} />

                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default Plan

export const Head = () => {
    return (
        <SEO
            title="Meeting Baas 🐟 | The plan: Donald Trump in your next Daily Meeting."
            description="Yes, it's a gimmick. To show you can now prompt to a video-meeting anyone as an AI Avatar."
            imagePath="previewTrumpInMeeting"
        />
    )
}
