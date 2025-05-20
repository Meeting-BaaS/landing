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
import { WhiteLabelDiagram } from '../svg/WhiteLabelDiagram'

const MeetingBaasFeatures: React.FC<{ path: string }> = ({ path }) => {
    const [openItem, setOpenItem] = useState<number | null>(null)

    const features = [
        {
            title: 'Transcription',
            description:
                'Use the Gladia API out of the box, or learn how to set up Runpod to run inference for any AI pipeline.',
            additionalItems: [
                {
                    label: 'Key Feature',
                    content: 'Best in class transcription',
                },
                { label: 'Tech Stack', content: 'APIs, AI Cloud Pipeline' },
            ],
        },
        {
            title: 'AI Search in video',
            description:
                'Find a specific information just by asking a question.',
            additionalItems: [
                {
                    label: 'Key Feature',
                    content: 'Search in video, summarization',
                },
                {
                    label: 'Tech Stack',
                    content: 'React, TailwindCSS, Prompting',
                },
            ],
        },
        {
            title: 'AI Templates',
            description:
                'Extract data from conversations in a structured fashion',
            additionalItems: [
                {
                    label: 'Key Feature',
                    content:
                        'Structured text extraction, video-clips, field extraction',
                },
                {
                    label: 'Tech Stack',
                    content: 'React, TailwindCSS, Prompting',
                },
            ],
        },
        {
            title: 'Collaboration, tags and Playlists',
            description: 'Add filters by creator ID, or video tag',
            additionalItems: [
                {
                    label: 'Key Feature',
                    content: 'Playlists for sales onboarding, video tags',
                },
                {
                    label: 'Tech Stack',
                    content: 'React, TailwindCSS, Prompting',
                },
            ],
        },
        {
            title: 'Search in workspace',
            description: 'Search among all conversations of your co-workers.',
            additionalItems: [
                {
                    label: 'Key Feature',
                    content:
                        'Structured text extraction, video-clips, field extraction',
                },
                { label: 'Tech Stack', content: 'OpenSearch, ElasticSearch' },
            ],
        },
        {
            title: 'Outlook and Google SSO',
            description:
                'Get your users to log in with Google Auth and Microsoft Outlook.',
            additionalItems: [
                {
                    label: 'Key Feature',
                    content: 'Google Auth, Microsoft Outlook Auth',
                },
                {
                    label: 'Tech Stack',
                    content: 'Rust, o-auth libraries which we have forked.',
                },
            ],
        },
        {
            title: 'Video-Editing',
            description:
                'Edit videos and create sharable and downloadable clips just by highlighting text.',
            additionalItems: [
                {
                    label: 'Key Feature',
                    content:
                        'Video-editing, video clip link sharing, video-editing with AI',
                },
                { label: 'Tech Stack', content: 'Rust, ffmpeg && co.' },
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
            pageTitle="B. Analyzing Conversations"
            pageSubtitle="Information centered in one place"
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
                    src: 'WhiteLabelledSpokeArchitecture',
                    alt: 'White Label Diagram',
                    component: <WhiteLabelDiagram />,
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
