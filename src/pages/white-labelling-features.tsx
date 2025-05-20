import React, { useEffect, useState } from 'react'
import {
    ColumnContent,
    TwoColumnLayout,
} from '../components/Examples/TwoColumnLayout'
import Footer from '../components/Layout/Footer'
import { WhiteLabelFooter } from '../components/Layout/WhiteLabelFooter'
import { Navbar } from '../components/Navbar/Navbar'
import { SampleItem } from '../components/UseCases/components/SampleItem'
import { SEO } from '../components/seo'

const ConversationFeaturesContent: React.FC<{ path: string }> = ({ path }) => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null)
    const whiteLabelFooter = WhiteLabelFooter({ path })

    const sections = [
        {
            title: 'A. Adding conversations',
            description: 'asasd',
            content: [
                {
                    title: 'Automated Recording',
                    description:
                        'One-click recording functionality for all major platforms.',
                },
                {
                    title: 'Multi-Platform Support',
                    description:
                        'Seamless integration with Zoom, Google Meet, and Microsoft Teams.',
                },
            ],
        },
        {
            title: 'B. Analyzing conversations',
            description: 'asasd',
            content: [
                {
                    title: 'AI-Powered Transcription',
                    description:
                        'Accurate speech-to-text conversion with multiple provider options.',
                },
                {
                    title: 'Sentiment Analysis',
                    description:
                        'Understand the emotional tone of conversations.',
                },
            ],
        },
        {
            title: 'C. Integrating conversation outputs',
            description: 'asasd',
            content: [
                {
                    title: 'CRM Integration',
                    description:
                        'Automatically update Salesforce or HubSpot with conversation insights.',
                },
                {
                    title: 'Custom Workflow Support',
                    description:
                        'Export data to various formats for seamless integration with existing systems.',
                },
            ],
        },
    ]

    const leftColumnContent: ColumnContent[] = sections.map((_, index) => ({
        type: 'contents',
        index,
    }))

    const rightColumnContent: ColumnContent[] = [{ type: 'images', index: 0 }]

    return (
        <TwoColumnLayout
            roundedButtons={whiteLabelFooter}
            leftColumn={leftColumnContent}
            rightColumn={rightColumnContent}
            pageTitle="Platform Conversation Features"
            pageSubtitle="Add, Analyze, and Integrate Conversations."
            children={<></>}
            contents={sections.map((section, index) => (
                <div key={index} className="mb-7">
                    <SampleItem
                        title={section.title}
                        description={section.description}
                        children={
                            <>
                                <button
                                    className="text-blue-500 hover:text-blue-700 mt-2"
                                    onClick={() =>
                                        setExpandedSection(
                                            expandedSection === section.title
                                                ? null
                                                : section.title,
                                        )
                                    }
                                >
                                    {expandedSection === section.title
                                        ? 'Hide details'
                                        : 'Show details'}
                                </button>
                                {expandedSection === section.title && (
                                    <div className="mt-4 ml-4">
                                        {section.content.map((item, i) => (
                                            <SampleItem
                                                key={i}
                                                title={item.title}
                                                description={item.description}
                                            />
                                        ))}
                                    </div>
                                )}
                            </>
                        }
                    />
                </div>
            ))}
            images={[
                {
                    src: 'ConversationFeatures',
                    alt: 'Conversation Features Overview',
                },
            ]}
            codeExamples={[]}
            buttonToShow={[]}
            title={''}
            subtitle={''}
        />
    )
}

const WhiteLabellingFeatures = () => {
    const [path, setPath] = useState('')

    useEffect(() => {
        setPath(window.location.pathname)
    }, [])

    return (
        <main className="snap-mandatory">
            <div className="overflow-y-scroll h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <ConversationFeaturesContent path={path} />
                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default WhiteLabellingFeatures

export const Head = () => {
    return (
        <SEO
            title="Meeting Baas 🐟 | Conversation Features"
            description="Add, analyze, and integrate conversations with ease using our advanced AI-powered tools."
            imagePath="previewConversationFeatures"
        />
    )
}
