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
import { YourPlatformWithIntegrations } from '../svg/YourPlatformWithIntegrations'

const MeetingBaasFeatures: React.FC<{ path: string }> = ({ path }) => {
    const [openItem, setOpenItem] = useState<number | null>(null)

    const features = [
        {
            title: 'Native Integrations',
            description:
                'Native and Granular integrations to Hubspot, SalesForce, Zapier and n8n.',
            additionalItems: [
                {
                    label: 'Key Feature',
                    content:
                        "High quality integrations, made to granular level of a 'talking point'",
                },
                {
                    label: 'Tech Stack',
                    content:
                        'Webhook, APIs, Rust and Front-end in React / TailWindCSS.',
                },
            ],
        },
        {
            title: 'Third party integrations',
            description: 'Integrated to Rollout.hq',
            additionalItems: [
                {
                    label: 'Key Feature',
                    content: 'More than 300 outgoing integrations:',
                },
                {
                    label: 'Tech Stack',
                    content: 'White-labelled integrations for Google ',
                },
            ],
        },
        {
            title: 'Automated E-mails',
            description:
                'Participants to meetings received a branded e-mail from the platform, with an AI report, a link, etc.',
            additionalItems: [
                {
                    label: 'Key Feature',
                    content:
                        'Email summary integration. Enables user base growth.',
                },
                {
                    label: 'Tech Stack',
                    content:
                        'Webhook, APIs, customer.io (we should switch to Resend).',
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
            pageTitle="C. Synchronizing Conversations"
            pageSubtitle="Information centered where your users work"
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
                    src: 'YourPlatform',
                    alt: 'Meeting Baas Features Overview',
                    component: (
                        <YourPlatformWithIntegrations></YourPlatformWithIntegrations>
                    ),
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
