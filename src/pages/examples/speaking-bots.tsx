import React from 'react'
import { Button } from '../../components/atoms/Button'
import { HyperLink } from '../../components/atoms/Hyperlink'
import { VerticalCodeExampleHolder } from '../../components/Examples/verticalCodeExampleHolder'
import Footer from '../../components/Layout/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { SEO } from '../../components/seo'

const OverviewBlock = () => {
    return (
        <div>
            <HyperLink
                link="https://github.com/Meeting-Baas/speaking-meeting-bot"
                textContent="Speaking Bots"
            />{' '}
            is an open-source implementation that creates AI meeting agents that
            can join and participate in video meetings with distinct
            personalities and context defined in Markdown files.
            <br></br>
            <br></br>
            Our implementation extends{' '}
            <HyperLink
                link="https://github.com/pipecat-ai/pipecat"
                textContent="Pipecat"
            />
            's Python framework to create:
            <ul className="list-disc list-inside mt-2">
                <li>
                    Meeting agents that can join Google Meet, Zoom or Microsoft
                    Teams through the Meeting BaaS API
                </li>
                <li>Customizable personas with unique context</li>
                <li>
                    Support for running multiple instances locally or at scale
                </li>
                <li>
                    Real-time audio processing through WebSocket infrastructure
                </li>
            </ul>
            <br></br>
            The API follows a minimalist design with sensible defaults while
            offering optional customization. A bot can be deployed with just a
            meeting URL and API key, with additional parameters available for
            tailoring behavior.
        </div>
    )
}

const KeyFeaturesBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Features</h2>

            <ul className="list-disc list-inside mt-2">
                <li>
                    <strong>AI-Powered Conversations:</strong> Bots can engage
                    in natural-sounding conversations, responding to meeting
                    participants in real-time.
                </li>
                <li>
                    <strong>Customizable Personas:</strong> Deploy bots with
                    different personalities and specific knowledge bases through
                    Markdown-defined contexts.
                </li>
                <li>
                    <strong>Multiplatform Support:</strong> Works with Google
                    Meet, Zoom, and Microsoft Teams through one API.
                </li>
                <li>
                    <strong>Voice Activity Detection:</strong> Intelligent
                    detection of when to speak and when to listen with
                    configurable parameters.
                </li>
                <li>
                    <strong>Function Calling Tools:</strong> Built-in tools for
                    checking weather, time, and other contextual information
                    that can be enabled or disabled.
                </li>
                <li>
                    <strong>LLM Context Management:</strong> Maintains
                    consistent, coherent conversations throughout meetings.
                </li>
                <li>
                    <strong>Multiple Bot Instances:</strong> Run several bots in
                    one meeting with different personas and roles.
                </li>
            </ul>

            <br></br>
            <h2 className="text-xl font-bold mb-2">Core Technologies:</h2>

            <ul className="list-disc list-inside">
                <li>
                    <strong>Pipecat:</strong> Python framework powering
                    real-time audio processing pipeline
                </li>
                <li>
                    <strong>MeetingBaaS:</strong> Meeting bot deployment API for
                    video platforms
                </li>
                <li>
                    <strong>Text-to-Speech:</strong> Cartesia for bot voice
                    synthesis
                </li>
                <li>
                    <strong>Speech-to-Text:</strong> Deepgram or Gladia with
                    language recognition
                </li>
                <li>
                    <strong>Voice AI:</strong> OpenAI GPT models for
                    conversation generation
                </li>
                <li>
                    <strong>Data Transport:</strong> WebSocket communication
                    with Protocol Buffers
                </li>
            </ul>
        </div>
    )
}

const APIUsageBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">API Usage</h2>
            <p>
                The Speaking Bot API is accessible at{' '}
                <HyperLink
                    link="https://speaking.meetingbaas.com"
                    textContent="speaking.meetingbaas.com"
                />
                . You can access the OpenAPI specification at{' '}
                <HyperLink
                    link="https://speaking.meetingbaas.com/openapi.json"
                    textContent="speaking.meetingbaas.com/openapi.json"
                />
                .
            </p>
            <br />
            <p>The API provides endpoints to:</p>
            <ul className="list-disc list-inside mt-2">
                <li>Create and deploy speaking bots in meetings</li>
                <li>Remove bots from meetings</li>
                <li>Manage WebSocket connections for audio streaming</li>
            </ul>
        </div>
    )
}

const LaunchScriptBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Deployment Example</h2>
            <p>
                To deploy a Speaking Bot using the API, simply make a POST
                request:
            </p>
            <br />
            <p className="text-sm text-neutral-600">
                The following shell script demonstrates how to deploy a speaking
                bot to a meeting. Below it, you can see the Python
                implementation of a speaking bot persona.
            </p>
        </div>
    )
}

const SpeakingBots = () => {
    return (
        <main>
            <SEO
                title="Speaking Bots - AI Meeting Participants | Meeting Baas 🐟"
                description="Deploy AI-powered speaking agents in video meetings with distinct personalities. Works with Google Meet, Zoom, and Microsoft Teams through the Meeting BaaS API."
                imagePath="speaking-bots"
            />
            <div className="h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50 px-[20px]">
                <Navbar />

                <VerticalCodeExampleHolder
                    order={[
                        ['images', 0],
                        ['title', 0],
                        ['subtitle', 0],
                        ['buttons', 0],
                        ['contents', 0],
                        ['images', 1],
                        ['contents', 1],
                        ['contents', 2],
                        ['images', 2],
                        ['buttons', 0],
                        ['contents', 3],
                        ['code', 0],
                        ['code', 1],
                        ['images', 3],
                    ]}
                    contents={[
                        <OverviewBlock key="overview" />,
                        <KeyFeaturesBlock key="key-features" />,
                        <APIUsageBlock key="api-usage" />,
                        <LaunchScriptBlock key="launch-script" />,
                    ]}
                    title={'Speaking Bots'}
                    subtitle={
                        'AI-Powered Meeting Participants with Customizable Personas'
                    }
                    images={[
                        {
                            src: 'speaking-bots',
                            alt: 'AI speaking bots for meetings',
                        },
                        {
                            src: 'speaking-bots-interface',
                            alt: 'speaking bots interface',
                        },
                        {
                            src: 'speaking-bots-dashboard',
                            alt: 'speaking bots dashboard',
                        },
                        {
                            src: 'previewFeatures',
                            alt: 'preview features',
                        },
                    ]}
                    codeExamples={[
                        {
                            code: ['SPEAKING_BOT.SH'],
                        },
                        {
                            code: ['SPEAKING_BOT.PY'],
                            externalLink:
                                'https://github.com/Meeting-Baas/speaking-meeting-bot/',
                        },
                    ]}
                    buttonToShow={[
                        <Button
                            key="github"
                            color="green"
                            name="Clone on GitHub"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() =>
                                window.open(
                                    'https://github.com/Meeting-Baas/speaking-meeting-bot',
                                    '_blank',
                                )
                            }
                        />,
                        <Button
                            key="api-docs"
                            color="black"
                            name="API Documentation"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() => {
                                window.open(
                                    'https://docs.meetingbaas.com/llms/speaking-bots',
                                    '_blank',
                                )
                            }}
                        />,
                    ]}
                />
                <div className="min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}
export default SpeakingBots
