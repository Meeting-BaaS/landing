import React from 'react'
import { Button } from '../../components/atoms/Button'
import CodeComponent from '../../components/atoms/CodeComponent'
import { HyperLink } from '../../components/atoms/Hyperlink'
import { VerticalCodeExampleHolder } from '../../components/Examples/verticalCodeExampleHolder'
import Footer from '../../components/Layout/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { SEO } from '../../components/seo'

const OverviewBlock = () => {
    return (
        <div>
            The{' '}
            <HyperLink
                link="https://docs.meetingbaas.com/api/getting-started/sending-a-bot"
                textContent="Bots API"
            />{' '}
            lets you deploy AI-powered bots to Google Meet, Microsoft Teams, and Zoom meetings for recording, transcription, and live event monitoring.
            <br />
            <br />
            <ul className="list-disc list-inside mt-2">
                <li>Send bots to meetings instantly or schedule in advance</li>
                <li>Record audio/video or join in audio-only mode</li>
                <li>Enable live transcription and speaker identification</li>
                <li>Customize bot name, avatar, and entry message</li>
                <li>Receive real-time status and completion webhooks</li>
            </ul>
            <br />
            MeetingBaaS bots act as real meeting participants, providing seamless integration for automation, compliance, and analytics use cases.
        </div>
    )
}

const KeyFeaturesBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Key Features</h2>
            <ul className="list-disc list-inside mt-2">
                <li><strong>Multi-Platform Support:</strong> Google Meet, Microsoft Teams, Zoom</li>
                <li><strong>Instant or Scheduled Join:</strong> Deploy bots immediately or reserve for future meetings</li>
                <li><strong>Recording Modes:</strong> Speaker view, gallery view, or audio-only</li>
                <li><strong>Transcription:</strong> Live or post-meeting, with multiple provider options</li>
                <li><strong>Customizable Bots:</strong> Name, avatar, entry message, and more</li>
                <li><strong>Webhooks:</strong> Real-time status, completion, and error notifications</li>
                <li><strong>Advanced Options:</strong> WebSocket streaming, deduplication, and more</li>
            </ul>
        </div>
    )
}

const WebhookEventsBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Bot Webhook Event Types</h2>
            <p>MeetingBaaS bots send the following webhook events to your endpoint:</p>
            <br />
            <ul className="list-disc list-inside space-y-2">
                <li><strong>complete:</strong> Bot finished recording, transcript and MP4 available</li>
                <li><strong>failed:</strong> Bot failed to join or record the meeting (with error details)</li>
                <li><strong>transcription_complete:</strong> Transcription completed (after retranscribe or async job)</li>
                <li><strong>bot.status_change:</strong> Live status updates (joining, in call, recording, paused, ended, etc.)</li>
            </ul>
            <br />
            <p className="text-sm text-neutral-600">See below for example webhook payloads.</p>
            <br />
            <CodeComponent choices={['WEBHOOK_EVENTS.JSON']} />
        </div>
    )
}

const APIUsageBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">API Usage</h2>
            <p>
                The Bots API provides endpoints to:
            </p>
            <ul className="list-disc list-inside mt-2">
                <li>Send a bot to a meeting (<code>POST /bots</code>)</li>
                <li>Remove a bot from a meeting (<code>DELETE /bots/&#123;bot_id&#125;</code>)</li>
                <li>List bots and meeting metadata</li>
                <li>Retranscribe a meeting (<code>POST /bots/retranscribe</code>)</li>
                <li>Get meeting data, screenshots, and more</li>
            </ul>
            <br />
            <p>
                Authentication is via your MeetingBaaS API key. See the code examples for how to send, remove, and interact with bots programmatically.
            </p>
        </div>
    )
}

const CodeExampleBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">API Usage Examples</h2>
            <p>
                Below are examples for sending a bot to a meeting, removing a bot, and using a speaking bot:
            </p>
            <br />
            <p className="text-sm text-neutral-600">
                Bash and Python examples for bot deployment, plus a speaking bot example.
            </p>
        </div>
    )
}

const BotsApi = () => {
    return (
        <main>
            <SEO
                title="Bots API - Deploy Meeting Bots | Meeting BaaS 🐟"
                description="Send AI bots to Google Meet, Teams, and Zoom for recording, transcription, and automation. Real-time webhooks and advanced configuration."
                imagePath="bots-api"
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
                        ['contents', 3],
                        ['code', 0],
                        ['code', 1],
                        ['code', 2],
                        ['images', 3],
                    ]}
                    contents={[
                        <OverviewBlock key="overview" />, // 0
                        <KeyFeaturesBlock key="key-features" />, // 1
                        <WebhookEventsBlock key="webhook-events" />, // 2
                        <APIUsageBlock key="api-usage" />, // 3
                        <CodeExampleBlock key="code-example" />, // 4
                    ]}
                    title={'Bots API'}
                    subtitle={'Deploy AI Bots to Meetings Instantly'}
                    images={[
                        {
                            src: 'bots-api',
                            alt: 'Bots API',
                        },
                        {
                            src: 'bots-interface',
                            alt: 'Bots interface',
                        },
                        {
                            src: 'bots-dashboard',
                            alt: 'Bots dashboard',
                        },
                        {
                            src: 'previewFeatures',
                            alt: 'preview features',
                        },
                    ]}
                    codeExamples={[
                        { code: ['INVITE.SH', 'EXAMPLE_PYTHON'] },
                        { code: ['SPEAKING_BOT.PY'] },
                    ]}
                    buttonToShow={[
                        <Button
                            key="api-docs"
                            color="green"
                            name="API Documentation"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() =>
                                window.open(
                                    'https://docs.meetingbaas.com/api/getting-started/sending-a-bot',
                                    '_blank',
                                )
                            }
                        />,
                        <Button
                            key="sdk-docs"
                            color="black"
                            name="TypeScript SDK"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() => {
                                window.open(
                                    'https://docs.meetingbaas.com/typescript-sdk/reference/bots',
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
export default BotsApi 