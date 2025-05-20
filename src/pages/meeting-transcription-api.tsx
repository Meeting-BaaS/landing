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
import { baasDocumentation } from '../utils/router'
import { SendMeetingSummaryToNotion } from './examples/meeting-transcription-summarization-notion-integration'
// import { baasDocumentation } from '../utils/router'

const OverviewBlock = (): JSX.Element => (
    <div className="space-y-4">
        <p>
            Our Meeting Bot API (Meeting BaaS meaning Meeting bots as a Service)
            allows you to record and convert speech to text for{' '}
            <HyperLink
                link="https://meet.google.com/"
                textContent="Google Meet"
            />
            , <HyperLink link="https://zoom.us/" textContent="Zoom" />, and{' '}
            <HyperLink
                link="https://www.microsoft.com/en-us/microsoft-teams/log-in"
                textContent="Microsoft Teams"
            />{' '}
            meetings, using one simple curl command:
        </p>
        <ul className="list-disc list-inside space-y-2">
            <li>Transcription support for 99 languages</li>
            <li>Speaker diarization for unlimited participants</li>
            <li>Transcription of both spoken words and chat messages</li>
            <li>
                Real-time transcription with processing speed of 1 hour audio in
                less than 60 seconds
            </li>
        </ul>
        <p>
            Our Meeting Bot as a Service API integrates with{' '}
            <HyperLink
                link="https://www.gladia.io/speech-to-text"
                textContent="Gladia's proprietary Whisper-Zero ASR"
                newWindow={true}
            />
            , optimized for real-life enterprise audio, providing a complete
            solution for capturing and analyzing meeting content.
        </p>
    </div>
)

const KeyFeaturesBlock = (): JSX.Element => (
    <div className="space-y-4">
        <h2 className="text-xl font-bold">API Capabilities</h2>
        <ul className="list-disc list-inside space-y-2">
            <li>
                <strong>High Accuracy:</strong> 95% accuracy rate, with
                Whisper-Zero ASR removing virtually all hallucinations from
                audio transcripts
            </li>
            <li>
                <strong>Custom Vocabulary:</strong> Add industry-specific terms
                or names to improve transcription accuracy
            </li>
            <li>
                <strong>Timestamps:</strong> Word-level timestamps for precise
                audio-text synchronization
            </li>
            <li>
                <strong>Noise Reduction:</strong> Advanced algorithms to filter
                out background noise
            </li>
            <li>
                <strong>Format Options:</strong> Receive transcripts in plain
                text, SRT, or VTT caption formats
            </li>
            <li>
                <strong>Code-switching:</strong> Accurately transcribe
                conversations where multiple languages are used interchangeably
            </li>
            <li>
                <strong>Translation:</strong> Convert spoken language into
                written text in any of the 99 supported languages
            </li>
        </ul>
    </div>
)
const ExampleBlock = (): JSX.Element => (
    <div className="space-y-8">
        <h2 className="text-2xl font-bold">Automate Meeting Workflows</h2>
        <p>
            Using the MeetingBaas API, you can set up automations to extract
            information from video meetings into the database of your choice, be
            it an <strong>end-user database</strong> such as Notion or Airtable,
            or a <strong>more robust solution</strong> like PostgreSQL.
            <br />
            <br />
            As we handle{' '}
            <HyperLink
                newWindow={true}
                link="https://doc.meetingbaas.com/introduction/sending-a-bot"
                textContent="getting the data"
            />
            , and also optionally transcribe your meetings, you're just one API
            call away from an LLM to structure the data, extract meaning, and
            store it.
        </p>

        <div className="space-y-4">
            <h3 className="text-lg font-semibold">For example to Notion:</h3>
            <SendMeetingSummaryToNotion></SendMeetingSummaryToNotion>
        </div>

        <div className="space-y-4">
            <h3 className="text-xl font-bold">Make + Airtable Integration:</h3>
            <p>
                Leverage Make (formerly Integromat) and Airtable to create a
                powerful automation workflow for your meetings.
            </p>
            <ul className="list-disc list-inside space-y-2">
                <li>
                    Set up a Make scenario to trigger on new meeting recordings.
                </li>
                <li>
                    Use MeetingBaas API to retrieve meeting data and
                    transcriptions.
                </li>
                <li>
                    Process the data with AI services for summarization and
                    insights.
                </li>
                <li>
                    Automatically update Airtable with structured meeting
                    information.
                </li>
            </ul>
            <Button
                key="make-docs"
                color="green"
                name="View Make + Airtable Example"
                buttonClass="flex max-w-fit mx-auto lg:mx-0"
                onClick={() =>
                    window.open(
                        '/examples/make-meeting-transcription-summarization',
                        '_blank',
                    )
                }
            />
        </div>
    </div>
)

const MeetingTranscriptionApi = () => {
    return (
        <main className="snap-mandatory">
            <SEO
                title="MeetingBaas | Meeting Transcription API"
                description="Convert speech to text for Google Meet, Zoom, and Microsoft Teams meetings with the MeetingBaaS API."
                imagePath="ApiForMeetingTranscription"
            />
            <div className="overflow-y-scroll h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <WelcomeSection
                    title1="API for"
                    title2=""
                    title3="Meeting Transcription"
                    subtitle1="Convert speech to text for Google Meet, Zoom, and Microsoft Teams."
                    subtitle2="Support for 130+ languages with speaker diarization and meta-data."
                    // buttonName="Get your MeetingBaas API key 🐟"
                    buttonName="Get your MeetingBaas API key"
                    secondButtonName="View API Documentation"
                    onSecondButtonClick={baasDocumentation}
                />
                <div className="p-0">
                    <VerticalCodeExampleHolder
                        order={[
                            ['title', 0],
                            ['contents', 0],
                            ['images', 0],
                            ['buttons', 0],
                            ['contents', 1],
                        ]}
                        contents={[
                            <OverviewBlock key="overview" />,
                            <KeyFeaturesBlock key="key-features" />,
                            // <CodeExampleBlock key="code-example" />,
                        ]}
                        title={
                            'Transcribe Meetings with the Meeting BaaS API  🐟'
                        }
                        buttonToShow={[
                            <Button
                                key="docs"
                                color="black"
                                name="API Documentation"
                                buttonClass="flex max-w-fit mx-auto lg:mx-0"
                                onClick={baasDocumentation}
                            />,
                            <Button
                                key="try-api"
                                color="green"
                                name="Get API Key"
                                buttonClass="flex max-w-fit mx-auto lg:mx-0"
                                onClick={() => {
                                    window.open('/api-playground/', '_blank')
                                }}
                            />,
                        ]}
                        subtitle={''}
                        images={[
                            {
                                src: 'previewFeatures',
                                alt: 'preview features',
                            },
                        ]}
                        codeExamples={[]}
                    />
                    <VerticalCodeExampleHolder
                        order={[
                            ['contents', 0],
                            ['buttons', 0],
                        ]}
                        contents={[<ExampleBlock key="example-block" />]}
                        title={
                            'Transcribe Meetings with the Meeting BaaS API  🐟'
                        }
                        buttonToShow={[
                            <Button
                                color="black"
                                name="View example on GitHub"
                                buttonClass="flex max-w-fit mx-auto lg:mx-0"
                                onClick={() => {
                                    window.open(
                                        'https://github.com/meeting-baas/meeting-bot-as-a-service/tree/main/apps/node-js-to-notion-llm-brief',
                                        '_blank',
                                    )
                                }}
                            />,
                            <Button
                                key="try-api"
                                color="green"
                                name="Get your API Key"
                                buttonClass="flex max-w-fit mx-auto lg:mx-0"
                                onClick={() => {
                                    window.open('/api-playground/', '_blank')
                                }}
                            />,
                        ]}
                        subtitle={''}
                        images={[
                            {
                                src: 'previewFeatures',
                                alt: 'preview features',
                            },
                        ]}
                        codeExamples={[]}
                    />
                </div>

                <FeaturesSection />
                <LastSection />
                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default MeetingTranscriptionApi
