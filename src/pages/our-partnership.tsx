import { PageProps } from 'gatsby'
import React, { useState } from 'react'
import {
    ColumnContent,
    TwoColumnLayout,
} from '../components/Examples/TwoColumnLayout'
import Footer from '../components/Layout/Footer'
import { WhiteLabelFooter } from '../components/Layout/WhiteLabelFooter'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'
import { SampleItem } from '../components/UseCases/components/SampleItem'
import { CollaborationView } from '../svg/CollaborationView'

const MeetingBaasFeatures: React.FC<{ path: string }> = ({ path }) => {
    const [openItem, setOpenItem] = useState<number | null>(null)

    const features = [
        {
            title: 'Getting you started',
            description:
                "We'll help you spin up instances on AWS, or let you use the spoke.app API. Expect a reasonable end-to-end setup to take at least 3 weeks on your end.",
            additionalItems: [
                {
                    label: 'Key Feature',
                    content:
                        'On-premise, or retro-engineering through the Spoke App API.',
                },
                {
                    label: 'Tech Stack',
                    content:
                        'Rust (what should we port to Node for you?), or backwards integration through the Spoke API which we can customize.',
                },
            ],
        },
        {
            title: 'Collaborating',
            description: 'Combining Slack and Notion for visibility.',
            additionalItems: [
                {
                    label: 'Key Feature',
                    content:
                        'A shared Slack channel where messages are added as tickets to a Kanban board on Notion. Emergencies can be dealt with through a shared WhatsApp group.',
                },
                {
                    label: 'Tech Stack',
                    content: 'Slack, Notion, Kanban Board, WhatsApp',
                },
            ],
        },
        {
            title: 'Sharing visibility on our roadmaps',
            description:
                "Exactly as we continue to improve the Meeting Baas platform, you'll deliver new features on your stack.",
            additionalItems: [
                {
                    label: 'Key Feature',
                    content:
                        'Coordination, help on building features with our experience.',
                },
                {
                    label: 'Tech Stack',
                    content: 'APIs, Video and Audio Streaming, RAG, ...',
                },
            ],
        },
    ]

    const leftColumnContent: ColumnContent[] = [
        { type: 'subtitle', index: 0 },
        { type: 'contents', index: 0 },
    ]
    const rightColumnContent: ColumnContent[] = [{ type: 'images', index: 0 }]

    return (
        <TwoColumnLayout
            leftColumn={leftColumnContent}
            rightColumn={rightColumnContent}
            pageTitle="Our partnership"
            pageSubtitle="Support, shared roadmap and planning"
            contents={[
                <div className="space-y-4">
                    {features.map((feature, index) => (
                        <SampleItem
                            key={index}
                            title={
                                <button
                                    onClick={() =>
                                        setOpenItem(
                                            openItem === index ? null : index,
                                        )
                                    }
                                    className="w-full text-left font-semibold hover:text-blue-600 focus:outline-none"
                                >
                                    {feature.title}
                                </button>
                            }
                            description={
                                openItem === index ? feature.description : ''
                            }
                            additionalItems={
                                openItem === index
                                    ? feature.additionalItems
                                    : []
                            }
                        >
                            {/* {openItem === index && (
                                <>
                                    This feature enhances Meeting Baas by providing{' '}
                                    <strong>{feature.additionalItems[0].content.toLowerCase()}</strong>,
                                    making it a <em>crucial component</em> of our comprehensive meeting solution.
                                </>
                            )} */}
                        </SampleItem>
                    ))}
                </div>,
            ]}
            images={[
                {
                    src: 'SpokeUploadFeatures',
                    alt: 'Meeting Baas Features Overview',
                    component: <CollaborationView />,
                },
            ]}
            codeExamples={[]}
            buttonToShow={[]}
            title={''}
            subtitle={''}
            roundedButtons={WhiteLabelFooter({ path })}
        />
    )
}

const Plan: React.FC<PageProps> = ({ path }) => {
    return (
        <main className="snap-mandatory">
            <div className="overflow-y-scroll h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <MeetingBaasFeatures path={path} />
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
            title="Meeting Baas 🐟 | Advanced Features for Intelligent Meetings"
            description="Discover Meeting Baas's cutting-edge features: AI-powered recording, seamless integrations, and intelligent analysis for your meetings."
            imagePath="previewMeetingBaasFeatures"
        />
    )
}
