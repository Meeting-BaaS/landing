import React from 'react'
import { Button } from '../components/atoms/Button'
import { HyperLink } from '../components/atoms/Hyperlink'
import { TwoColumnLayout } from '../components/Examples/TwoColumnLayout'
import { FeaturesSection } from '../components/Home/FeaturesSection'
import { LastSection } from '../components/Home/LastSection'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'
import { SampleItem } from '../components/UseCases/components/SampleItem'
import { SpeakingBassZoomGoogleMeet } from '../svg/SpeakingBassOnZoomGoogleMeet'
import {
    openRecallCompetitor,
    openTranskriptorCompetitor,
} from '../utils/router'

const GoogleMeetRecordingApi = () => {
    return (
        <main className="snap-mandatory">
            <SEO
                title="Alternatives to Recall.ai | Meeting Baas 🐟 | Alternative Google Meet Recording API"
                description="Alternative APIs to recall.ai for meeting recording. Meeting BaaS and Transkriptor."
            />
            <div className="overflow-y-scroll h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <TwoColumnLayout
                    pageTitle="Alternatives"
                    pageSubtitle="to Recall.ai"
                    title=""
                    subtitle=""
                    contents={[
                        <>
                            <div className="space-y-4 mb-7">
                                <p>
                                    MeetingBaaS offers 80% of the same
                                    functionalities at 50% of the cost, with
                                    self-onboarding and pay-as-you-go pricing.
                                    <br />
                                    <HyperLink
                                        link="https://transkriptor.com/pricing/"
                                        textContent="Transkriptor"
                                        newWindow={true}
                                    />{' '}
                                    has 30% of these capabilities, behind a
                                    paywall.
                                </p>
                            </div>
                            <div className="mb-7">
                                <SampleItem
                                    title="Meeting BaaS: Meeting Bots as a Service"
                                    description=""
                                    children={
                                        <>
                                            <br />
                                            <span className="font-bold">
                                                Attend:
                                            </span>{' '}
                                            Capture any meeting content.
                                            Customize the bot name and
                                            appearance. Access this data in
                                            real-time or afterwards.
                                            <br />
                                            <span className="font-bold">
                                                Interact:
                                            </span>{' '}
                                            Stream in video and audio content,
                                            and create meeting agents that can
                                            join and speak in meetings.
                                        </>
                                    }
                                    additionalItems={[]}
                                />
                            </div>
                            <div className="mb-7">
                                <SampleItem
                                    title="Transkriptor: Simple Transcription API"
                                    description=""
                                    children={
                                        <>
                                            <br />
                                            <span className="font-bold">
                                                Core Functionality:
                                            </span>{' '}
                                            Straightforward API for adding a bot
                                            to meetings for transcription.
                                            <br />
                                            <span className="font-bold">
                                                Limitations - or Simplicity:
                                            </span>{' '}
                                            Sole focus on transcription, with
                                            just two parameters: the meeting URL
                                            and the target language.
                                            <br />
                                        </>
                                    }
                                    additionalItems={[]}
                                />
                            </div>
                        </>,
                    ]}
                    images={[
                        {
                            src: 'ZoomCeo',
                            alt: 'Zoom CEO',
                            component: <SpeakingBassZoomGoogleMeet />,
                        },
                    ]}
                    buttonToShow={[
                        <div
                            key="button-container"
                            className="w-full space-y-4"
                        >
                            <div className="flex w-full gap-4">
                                <Button
                                    key="see-in-action-1"
                                    name="Talk to Transkriptor"
                                    color="white"
                                    onClick={openTranskriptorCompetitor}
                                    buttonClass="w-full"
                                />
                                <Button
                                    key="see-in-action-2"
                                    name="Talk to Recall"
                                    color="white"
                                    onClick={openRecallCompetitor}
                                    buttonClass="w-full"
                                />

                                {/* <Button
      key="get-api-key"
      color="black"
      name="Start building now on Meeting Baas 🐟"
      buttonClass="w-full flex justify-center items-center"
      onClick={registerRedirect}
    /> */}
                            </div>
                        </div>,
                    ]}
                    leftColumn={[
                        { type: 'title', index: 0 },
                        { type: 'subtitle', index: 0 },
                        { type: 'contents', index: 0 },
                        { type: 'buttons', index: 0 },
                    ]}
                    rightColumn={[{ type: 'images', index: 0 }]}
                    codeExamples={[]}
                />

                {/* <FeatureComparisonTable></FeatureComparisonTable> */}

                <FeaturesSection />
                <LastSection />
                {/* <Testimonial lightTheme={true} /> */}
                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default GoogleMeetRecordingApi
