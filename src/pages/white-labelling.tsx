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
import { Pills } from '../svg/Pills'

const ConversationFeaturesContent: React.FC<{ path: string }> = ({ path }) => {
    const [openItem, setOpenItem] = useState<number | null>(null)
    const whiteLabelFooter = WhiteLabelFooter({ path })

    const features = [
        {
            title: 'Spoke.app: Customizable Service',
            description:
                'A comprehensive solution for managing conversations in your product.',
            additionalItems: [
                {
                    label: 'A. Create:',
                    content:
                        'Add conversations to your product using automations, a desktop app, ...',
                },
                {
                    label: 'B. Analyze:',
                    content:
                        'Extract structured information, search inside videos, search in all your conversations, ...',
                },
                {
                    label: 'C. Integrate:',
                    content:
                        'Get Hubspot and Salesforce Native integrations, along with tens of others.',
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
            roundedButtons={whiteLabelFooter}
            leftColumn={leftColumnContent}
            rightColumn={rightColumnContent}
            pageTitle="White-Labelling: Build on top of Spoke.app and MeetingBaas.com"
            pageSubtitle="Add, Analyze, and Integrate Conversations at scale."
            children={<></>}
            contents={[
                <div className="space-y-4">
                    <SampleItem
                        title="MeetingBaas.com"
                        description=""
                        children={
                            <>
                                {/* We provide you with the MeetingBaas API for recording data on Google Meet, Zoom, and Microsoft Teams, and interacting with these video-meeting platforms. */}
                                API for recording data on Google Meet, Zoom, and
                                Microsoft Teams, and interacting with these
                                video-meeting platforms.
                                {/* <br></br> */}
                            </>
                        }
                    />
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
                        ></SampleItem>
                    ))}
                </div>,
            ]}
            images={[
                {
                    src: 'VideoTikTak',
                    alt: 'Conversation Features Overview',
                    component: <Pills></Pills>,
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
