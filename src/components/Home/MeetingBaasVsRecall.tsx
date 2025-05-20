import React from 'react'
import { RawBotData } from '../../svg/RawBotData'
import { baasDocumentation, openRecallCompetitorDocs } from '../../utils/router'
import { Button } from '../atoms/Button'
import { VerticalCodeExampleHolder } from '../Examples/verticalCodeExampleHolder'
import { SampleItem } from '../UseCases/components/SampleItem'

export const MeetingBaasVsRecallContent: React.FC<{
    path: string
    showFooter?: boolean
}> = ({ path, showFooter = true }) => {
    return (
        <>
            <VerticalCodeExampleHolder
                order={[
                    // ['images', 0],
                    ['contents', 3],
                    ['title', 0],
                    ['subtitle', 0],
                    ['contents', 0],
                    ['contents', 1],
                    ['buttons', 0],
                    ['contents', 2],
                ]}
                contents={[
                    <div key="why-choose" className="flex flex-col gap-[16px]">
                        <SampleItem
                            title="Why choose MeetingBaaS?"
                            description="We offer a 99.5% SLA as a rock-solid guarantee from day one, and other advantages:"
                            additionalItems={[
                                {
                                    label: 'Free trial:',
                                    content:
                                        ' Get your API key and start processing hours of recordings for free.',
                                },
                                {
                                    label: 'Lower pricing:',
                                    content:
                                        ' $0.69 per hour, including transcription and calendar integration, out of the box.',
                                },
                                {
                                    label: 'Immediately available:',
                                    content: ' No need to talk to sales.',
                                },
                                {
                                    label: 'On-prem available:',
                                    content:
                                        " If you're using AWS instances, the entire process takes 1 day.",
                                },
                            ]}
                        />
                    </div>,
                    <div
                        key="recall-advantages"
                        className="flex flex-col gap-4"
                    >
                        <SampleItem
                            title="Why stick with Recall:"
                            description="Recall may be more suitable for several reasons:"
                            additionalItems={[
                                {
                                    label: 'Established player:',
                                    content:
                                        ' Pivoted into meeting bots in 2022, with hundreds of API clients.',
                                },
                                {
                                    label: 'More platforms:',
                                    content:
                                        ' Supports Slack huddles (by adding a new participant) and Webex.',
                                },
                                {
                                    label: 'Security certifications:',
                                    content:
                                        ' SOC-II and HIPAA compliant (MeetingBaaS in process).',
                                },
                            ]}
                        />
                    </div>,
                    <div
                        key="comparison-intro"
                        className="text-xl text-gray-600 -mb-16"
                    >
                        Here's a side-by-side comparison of the MeetingBaaS and
                        Recall.ai APIs:
                    </div>,
                    <div
                        key="raw-bot-data"
                        className="w-full flex justify-center items-center"
                    >
                        <RawBotData></RawBotData>
                    </div>,
                ]}
                title={'MeetingBaaS vs Recall.ai'}
                subtitle={
                    'Two competitor APIs to record video-meetings at scale.'
                }
                images={
                    [
                        // {
                        //     src: 'transcript-seeker',
                        //     alt: 'open source transcript seeker',
                        // },
                    ]
                } // Add appropriate images if needed
                codeExamples={[]} // Add code examples if needed
                buttonToShow={[
                    <Button
                        key="docs"
                        color="white"
                        name="Recall.ai Docs"
                        buttonClass="flex max-w-fit mx-auto lg:mx-0"
                        onClick={openRecallCompetitorDocs}
                    />,
                    <Button
                        key="try-api"
                        color="green"
                        name="Meeting BaaS API Docs"
                        buttonClass="flex max-w-fit mx-auto lg:mx-0"
                        onClick={baasDocumentation}
                    />,
                    <Button
                        key="try-api"
                        color="black"
                        name=" 🐟 Get your BaaS API Key 🐟 "
                        buttonClass="flex max-w-fit mx-auto lg:mx-0"
                        onClick={() => {
                            window.open('/api-playground/', '_blank')
                        }}
                    />,
                ]}
            />
        </>
    )
}
