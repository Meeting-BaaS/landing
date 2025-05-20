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
import { AutomatedEnrichment } from '../svg/AutomatedEnrichment'

const MeetingBaasFeatures: React.FC<{ path: string }> = ({ path }) => {
    const [openItem, setOpenItem] = useState<number | null>(null)

    const features = [
        {
            title: 'Calendar Automated Bot Attendance',
            description:
                'Define settings for your users, and collect data at scale.',
            additionalItems: [
                {
                    label: 'Key Feature',
                    content: 'Automated meeting attendance',
                },
                {
                    label: 'Tech Stack',
                    content:
                        'APIs, React frontend with TailWindCSS to implement the user-choices.',
                },
            ],
        },
        {
            title: 'Chrome Extension for Google Meet',
            description: 'Extremely convenient for Google Meet.',
            additionalItems: [
                { label: 'Key Feature', content: 'Google Meet integration' },
                { label: 'Tech Stack', content: 'React, TailwindCSS' },
            ],
        },
        {
            title: 'Desktop App',
            description: 'One click to add a link and view meeting events.',
            additionalItems: [
                { label: 'Key Feature', content: 'Cross-platform support' },
                {
                    label: 'Tech Stack',
                    content: 'Rust (Tauri), React, TailwindCSS, Swift',
                },
                {
                    label: 'Legacy Features:',
                    content:
                        'Loom-like face-cam recordings using Electron, screen-recording on MacOS using Swift.',
                },
            ],
        },
        {
            title: 'File Uploads',
            description:
                'File formatting using ffmpeg to pass all transcription APIs, while using low CPU.',
            additionalItems: [
                {
                    label: 'Key Feature',
                    content:
                        'Efficient file processing, while maintaing quality.',
                },
                { label: 'Tech Stack', content: 'Ffmpeg, Transcription APIs' },
            ],
        },
        {
            title: 'Third Party VOIP Integrations',
            description:
                'Integrate VOIP providers such as Twilio, Aircall, Amazon Connect, Ringover, Talkdesk, ...',
            additionalItems: [
                {
                    label: 'Key Feature',
                    content:
                        'Get VOIP Phone Call Data for all team members with one integration.',
                },
                {
                    label: 'Tech Stack',
                    content: 'Our API + 3rd party integrations.',
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
            pageTitle="A. Adding Conversations"
            pageSubtitle="Automation and UX for business users"
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
                    src: 'WhiteLabellingAdding',
                    alt: 'Meeting Baas Features Overview',
                    component: <AutomatedEnrichment />,
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
