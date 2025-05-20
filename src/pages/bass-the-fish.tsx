import { navigate, PageProps } from 'gatsby'
import React from 'react'
import { Button } from '../components/atoms/Button'
import {
    ColumnContent,
    TwoColumnLayout,
} from '../components/Examples/TwoColumnLayout'
import Footer from '../components/Layout/Footer'
import { ManifestoFooter } from '../components/Layout/ManifestoFooter'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'
import { SampleItem } from '../components/UseCases/components/SampleItem'
import { BassTheFish } from '../svg/BassTheFish'

export const BassTheFishPageContent: React.FC<{
    path: string
    showFooter?: boolean
}> = ({ path, showFooter = true }) => {
    const leftColumnContent: ColumnContent[] = [
        { type: 'subtitle', index: 0 },
        { type: 'contents', index: 0 },
        { type: 'contents', index: 1 },
        { type: 'buttons', index: 0 },
    ]

    const rightColumnContent: ColumnContent[] = [
        { type: 'images', index: 0 },
        // { type: 'buttons', index: 0 },
    ]

    return (
        <TwoColumnLayout
            leftColumn={rightColumnContent}
            rightColumn={leftColumnContent}
            pageTitle="Meeting Bots as a Service"
            pageSubtitle="- aka Bass the fish"
            contents={[
                <>
                    <div className="flex flex-col gap-[16px]">
                        <SampleItem
                            title="Why a fish?"
                            description="We initially confused 'Bass' (the fish) with 'BaaS' (Bots as a Service)."
                        />
                    </div>
                </>,
                <>
                    <div className="flex flex-col gap-[16px]">
                        <SampleItem
                            title="Bass the API Fish"
                            description=""
                            children={
                                <>
                                    Like bass are found in water, Bass is
                                    accessible through video meetings on Google
                                    Meet, Microsoft Teams and Zoom. That is on
                                    95% of devices with a decent internet
                                    connection, instantly.
                                    {/* Just as a bass uses its lateral line to
                                    detect subtle vibrations and changes in
                                    water pressure, our bots employ advanced
                                    speech recognition to capture every nuance
                                    in conversations. The bass's ability to
                                    adapt to various aquatic environments
                                    mirrors our bots' capacity to seamlessly
                                    integrate into different meeting platforms.
                                    And like how a bass can navigate through
                                    murky waters using its acute senses, our
                                    bots can transcribe and translate
                                    discussions in real-time across multiple
                                    languages, cutting through the complexity of
                                    international meetings. */}
                                </>
                            }
                            additionalItems={[
                                {
                                    label: 'Passively',
                                    content:
                                        'Record, and transcribe and translate meetings in any language. Extract information through LLMs.',
                                },
                                {
                                    label: 'Actively',
                                    content:
                                        'Speak in meetings and interact with participants in any language for (almost) any use case.',
                                },
                            ]}
                        />
                    </div>
                </>,
            ]}
            images={[
                {
                    src: 'MultiplePeopleWithBass',
                    alt: 'Multiple People With Bass',
                    component: <BassTheFish />,
                },
            ]}
            codeExamples={[]}
            buttonToShow={[
                <Button
                    key="talk-to-us"
                    name="Interested in collaborating?"
                    color="black"
                    textColor="text-neutral-50"
                    buttonClass="min-w-full"
                    onClick={() => navigate('/talk-to-us/')}
                />,
            ]}
            title={''}
            subtitle={''}
            roundedButtons={
                showFooter ? [ManifestoFooter({ path })] : undefined
            }
        />
    )
}

const BassTheFishPage: React.FC<PageProps> = ({ path }) => {
    return (
        <main className="snap-mandatory">
            <div className="overflow-y-scroll h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <BassTheFishPageContent path={path} />
                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default BassTheFishPage

export const Head = () => {
    return (
        <SEO
            title="Meeting Baas 🐟 | Bass the API Fish"
            description="Why a fish? BaaS became Bass. Swim through Google Meet, Zoom, and Teams."
        />
    )
}
