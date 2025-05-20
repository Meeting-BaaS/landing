import React from 'react'
import { Button } from '../components/atoms/Button'
import { HyperLink } from '../components/atoms/Hyperlink'
import { VerticalCodeExampleHolder } from '../components/Examples/verticalCodeExampleHolder'
import { FeaturesSection } from '../components/Home/FeaturesSection'
import { LastSection } from '../components/Home/LastSection'
import { WelcomeSection } from '../components/Home/WelcomeSection'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'
import { openGoogleApiReference, tryAiChat } from '../utils/router'

const OverviewBlock = (): JSX.Element => (
    <div className="space-y-4">
        <p>
            Our meeting bots, which join your user calls via our API, offer
            powerful capabilities beyond the standard Google Meet API:
        </p>
        <ul className="list-disc list-inside space-y-2">
            <li>Automate recordings without manual intervention</li>
            <li>
                Record any meeting, regardless of{' '}
                <HyperLink
                    link="https://apps.google.com/supportwidget/articlehome?article_url=https%3A%2F%2Fsupport.google.com%2Fmeet%2Fanswer%2F9308681&assistant_id=hangouts-meet-v2&product_context=9308681&product_name=UnuFlow&trigger_context=meet"
                    textContent="user's Google Meet subscription or meeting ownership"
                    newWindow={true}
                />
            </li>
            <li>
                Capture multi-language transcriptions and metadata automatically
            </li>
        </ul>
        <p>
            Unlike the{' '}
            <HyperLink
                link="https://support.google.com/meet/thread/257282515?hl=en"
                textContent="Google Meet API"
                newWindow={true}
            />
            , MeetingBaas enables automated recording for any meeting,
            independent of user actions, while ensuring compliance through clear
            recording notifications and the presence of your meeting bot.
        </p>
    </div>
)

const KeyFeaturesBlock = (): JSX.Element => (
    <div className="space-y-4">
        <h2 className="text-xl font-bold">Key Advantages</h2>
        <p>
            Our MeetingBaas API offers powerful features beyond the standard{' '}
            <HyperLink
                link="https://apps.google.com/supportwidget/articlehome?article_url=https%3A%2F%2Fsupport.google.com%2Fmeet%2Fanswer%2F12849897&assistant_id=hangouts-meet-v2&product_context=12849897&product_name=UnuFlow&trigger_context=meet"
                textContent="Google Meet Transcripts"
                newWindow={true}
            />
            :
        </p>
        <ul className="list-disc list-inside space-y-2">
            <li>
                <strong>Advanced Transcription:</strong> Support for 130+
                languages with high accuracy, using{' '}
                <HyperLink
                    link="https://gladia.io"
                    textContent="Gladia"
                    newWindow={true}
                />{' '}
                API.
            </li>
            <li>
                <strong>Comprehensive Capture:</strong> Transcripts for both
                spoken words and chat messages.
            </li>
            <li>
                <strong>Easy Access:</strong> Retrieve transcripts and live
                meeting events without relying on Google Drive.
            </li>
            <li>
                <strong>API-Driven:</strong> Easy integration into existing
                workflows and applications.
            </li>
        </ul>
    </div>
)

const TechStackBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Integration:</h2>
            <ul className="list-disc list-inside mt-2">
                <li>
                    RESTful API for easy integration with any programming
                    language
                </li>
                <li>
                    Webhooks for real-time notifications of recording events
                </li>
                <li>Secure authentication and data transmission</li>
            </ul>
        </div>
    )
}

const LaunchScriptBlock = () => {
    return (
        <div>
            To get started with MeetingBaas Google Meet Recording API:
            <br></br>
            1. Sign up for a MeetingBaas account
            <br></br>
            2. Obtain your API credentials
            <br></br>
            3. Integrate our API into your application using our comprehensive
            documentation
        </div>
    )
}

const GoogleMeetRecordingApi = () => {
    return (
        <main className="snap-mandatory">
            <SEO
                title="Meeting Baas | Alternative Google Meet Recording API"
                description="Integrate MeetingBaas with Google Meet for recording, transcription, and AI-powered features."
            />
            <div className="overflow-y-scroll h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <WelcomeSection
                    title1="Alternative "
                    title3="Google Meet Recording API"
                    title2=""
                    subtitle1="Extend the functionnalities of the Google Meet API with our meeting bots."
                    subtitle2="Capture data originating from Google Meet video-meetings at scale."
                    buttonName="Try Meeting BaaS"
                    onButtonClick={tryAiChat}
                    secondButtonName="compare to the Google Meet API"
                    onSecondButtonClick={openGoogleApiReference}
                />

                <VerticalCodeExampleHolder
                    order={[
                        ['title', 0],
                        //['subtitle', 0],
                        ['contents', 0],
                        ['buttons', 0],
                        //['images', 1],
                        ['contents', 1],
                        //['contents', 2],
                        //['images', 2],
                        //['buttons', 0],
                        //['contents', 3],
                        //['code', 0],
                        //['code', 1],
                        //['images', 3],
                    ]}
                    contents={[
                        <OverviewBlock key="overview" />,
                        <KeyFeaturesBlock key="key-features" />,
                        <TechStackBlock key="tech-stack" />,
                        <LaunchScriptBlock key="launch-script" />,
                    ]}
                    title={'Improve and automate Google Meet API recordings'}
                    subtitle={
                        'Automate and scale your Google Meet recordings effortlessly'
                    }
                    images={[
                        {
                            src: 'transcript-seeker',
                            alt: 'open source transcript seeker',
                        },
                        {
                            src: 'transcript-seeker-interface',
                            alt: 'open source transcript seeker interface',
                        },
                        {
                            src: 'transcript-seeker-dashboard',
                            alt: 'open source transcript seeker dashboard',
                        },
                        {
                            src: 'previewFeatures',
                            alt: 'preview features',
                        },
                    ]}
                    codeExamples={[
                        {
                            code: ['LAUNCH_RUN.SH'],
                        },
                        {
                            code: ['RUN.SH'],
                            externalLink:
                                'https://github.com/Meeting-Baas/transcript-seeker/',
                        },
                    ]}
                    buttonToShow={[
                        <Button
                            key="docs"
                            color="white"
                            name="Official Google API Docs"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={openGoogleApiReference}
                        />,
                        <Button
                            key="try-api"
                            color="green"
                            name="Meeting BaaS API Docs"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() => {
                                window.open('/api-playground/', '_blank')
                            }}
                        />,
                        <Button
                            key="try-api"
                            color="black"
                            name="Get your BaaS API Key"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() => {
                                window.open('/api-playground/', '_blank')
                            }}
                        />,
                    ]}
                />

                <FeaturesSection />
                <LastSection />
                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default GoogleMeetRecordingApi
