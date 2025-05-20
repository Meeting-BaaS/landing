import { PageProps } from 'gatsby'
import React from 'react'
import {
    ColumnContent,
    TwoColumnLayout,
} from '../components/Examples/TwoColumnLayout'
import Footer from '../components/Layout/Footer'
import { ManifestoFooter } from '../components/Layout/ManifestoFooter'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'
import { SampleItem } from '../components/UseCases/components/SampleItem'
import { PricingAsset } from '../svg/PricingAsset'

const HowWeMakeMoneyContent: React.FC<{ path: string }> = ({ path }) => {
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
            pageTitle="How we make money"
            pageSubtitle="Simple billing by the hour"
            contents={[
                <>
                    <div className="mb-7">
                        <SampleItem
                            title="Aligned with our users"
                            description=" We bill bot usage by the second, offering a simple and straightforward B2B model.  "
                            children={
                                <>
                                    Our revenue depends on usage volume, which
                                    ties directly to client satisfaction and
                                    success.
                                </>
                            }
                        />
                    </div>
                </>,
                <>
                    <div className="mb-7">
                        {/* <SampleItem
                            title="With a 3 step strategy"
                            description=""
                            children={
                                <>
                                    <span className="font-bold">
                                        Short-term (next 90 days):
                                    </span>{' '}
                                    Target new entrants with our marketing
                                    velocity (i.e.{' '}
                                    <em>Donald Trump in your meeting</em>) and
                                    voice APIs partnerships.
                                    <br></br>
                                    <span className="font-bold">
                                        Mid-term (next 6 months):
                                    </span>{' '}
                                    Sign two pure players, one business
                                    relationship tool for recording bots, and a
                                    new player for speaking bots.
                                    <br></br>
                                    <span className="font-bold">
                                        Long-term (next 2 years):
                                    </span>{' '}
                                    Monetize millions of bot hours monthly,
                                    billing by the second.
                                </>
                            }
                            additionalItems={[]}
                        /> */}
                    </div>
                </>,
                <>
                    <div className="mb-7">
                        <SampleItem
                            title="Passive, recording transcription bots"
                            description=""
                            additionalItems={[
                                {
                                    label: 'Conversation Intelligence pure-players',
                                    content:
                                        'Almost all of them are using the Recall API, and new players are created every day.',
                                },
                                {
                                    label: 'CRMs, ATS and other Business Relationship Management Tools',
                                    content:
                                        "This category isn't equipped yet, and by reaching marketing escape velocity, we can beat Recall there.",
                                },
                            ]}
                        />
                    </div>
                </>,
                <>
                    <div className="mb-7">
                        <SampleItem
                            title="Speaking meeting bots."
                            description="Sky is the limit in terms of usage and new product creation for our customers"
                            additionalItems={[
                                {
                                    label: 'A language teacher inside Google Meet',
                                    content:
                                        'Imagine having students learning languages directly inside Google Meet',
                                },
                                {
                                    label: 'A support product',
                                    content:
                                        'Imagine an onboarding robot which can reply to your questions, and share some onboarding videos',
                                },
                                {
                                    label: '...',
                                    content: '...',
                                },
                            ]}
                        />
                    </div>
                </>,
            ]}
            images={[
                {
                    src: 'ZoomCeo',
                    alt: 'Zoom CEO',
                    component: <PricingAsset />,
                },
            ]}
            // codeExamples={[]}
            buttonToShow={[]}
            title={''}
            subtitle={''}
            roundedButtons={ManifestoFooter({ path })}
        />
    )
}

const HowWeMakeMoney: React.FC<PageProps> = ({ path }) => {
    return (
        <main className="snap-mandatory">
            <div className="overflow-y-scroll  h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <HowWeMakeMoneyContent path={path} />

                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default HowWeMakeMoney

export const Head = () => {
    return (
        <SEO
            title="Meeting Baas 🐟 | How we make money"
            description="Simple billing by the hour for meeting bots. Aligned with users."
            imagePath="previewPricing"
        />
    )
}
