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
            Meeting BaaS provides a comprehensive set of{' '}
            <HyperLink
                link="https://docs.meetingbaas.com/api"
                textContent="API endpoints"
            />{' '}
            for programmatic access to meeting data across Zoom, Google Meet,
            and Microsoft Teams.
            <br></br>
            <br></br>
            Our APIs allow you to:
            <ul className="list-disc list-inside mt-2">
                <li>Deploy meeting bots to join and record video meetings</li>
                <li>
                    Sync calendar events from Google Workspace and Microsoft
                    Outlook
                </li>
                <li>
                    Create AI-powered meeting agents that can speak and interact
                </li>
                <li>Access meeting transcripts, recordings, and metadata</li>
                <li>Receive real-time updates through webhooks</li>
            </ul>
            <br></br>
            With a simple, RESTful design, our APIs can be integrated into any
            application, providing powerful meeting intelligence features with
            minimal effort.
        </div>
    )
}

const APIEndpointsBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Core API Endpoints</h2>

            <h3 className="text-lg font-semibold mt-4 mb-1">
                Meeting Bots API
            </h3>
            <ul className="list-disc list-inside ml-4">
                <li>
                    <strong>Deploy Bots:</strong> Send bots to meetings with
                    customizable settings
                </li>
                <li>
                    <strong>Remove Bots:</strong> End bot participation in
                    ongoing meetings
                </li>
                <li>
                    <strong>Get Meeting Data:</strong> Retrieve recordings,
                    transcripts, and metadata
                </li>
                <li>
                    <strong>List Bots:</strong> View all deployed bots and their
                    status
                </li>
                <li>
                    <strong>Retranscribe:</strong> Generate new transcriptions
                    with different providers
                </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-1">Calendars API</h3>
            <ul className="list-disc list-inside ml-4">
                <li>
                    <strong>Connect Calendars:</strong> Sync with Google and
                    Microsoft calendar providers
                </li>
                <li>
                    <strong>List Events:</strong> View upcoming and past
                    calendar events
                </li>
                <li>
                    <strong>Schedule Recordings:</strong> Automatically record
                    specific calendar events
                </li>
                <li>
                    <strong>Webhook Management:</strong> Receive real-time
                    calendar updates
                </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-1">
                Speaking Bots API
            </h3>
            <ul className="list-disc list-inside ml-4">
                <li>
                    <strong>Deploy Speaking Agents:</strong> Create AI meeting
                    participants with custom personas
                </li>
                <li>
                    <strong>Audio Streaming:</strong> Stream meeting audio and
                    bot responses
                </li>
                <li>
                    <strong>Persona Management:</strong> Define bot personality
                    and knowledge
                </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-1">Webhooks API</h3>
            <ul className="list-disc list-inside ml-4">
                <li>
                    <strong>Live Events:</strong> Receive real-time meeting
                    status updates
                </li>
                <li>
                    <strong>Completion Notifications:</strong> Get notified when
                    recordings are ready
                </li>
                <li>
                    <strong>Calendar Sync:</strong> Receive calendar change
                    notifications
                </li>
            </ul>
        </div>
    )
}

const SDKOptionsBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Integration Options</h2>
            <p>
                Meeting BaaS offers multiple integration paths to suit your
                development needs:
            </p>
            <br />
            <h3 className="text-lg font-semibold mb-1">1. RESTful API</h3>
            <p className="mb-3">
                Direct API access using standard HTTP methods with JSON
                payloads. Ideal for custom implementations and languages not
                covered by our SDKs.
            </p>

            <h3 className="text-lg font-semibold mb-1">2. TypeScript SDK</h3>
            <p className="mb-3">
                Our official TypeScript SDK provides type-safe access to all
                Meeting BaaS features with comprehensive documentation.
            </p>

            <h3 className="text-lg font-semibold mb-1">
                3. Webhook Integration
            </h3>
            <p className="mb-3">
                Event-driven architecture that pushes updates to your
                application in real-time, reducing the need for polling.
            </p>

            <h3 className="text-lg font-semibold mb-1">
                4. Open Source Components
            </h3>
            <p>
                Many Meeting BaaS components are available as open source
                repositories, allowing for customization and self-hosting.
            </p>
        </div>
    )
}

const CodeExampleBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">
                Example: Sending a Bot to a Meeting
            </h2>
            <p>
                Here's a simple example of how to send a recording bot to a
                meeting using our API:
            </p>
            <br />
            <p className="text-sm text-neutral-600">
                This example shows how to use a bash script to invite a bot to a
                meeting.
            </p>
        </div>
    )
}

const MeetingBaasAPIs = () => {
    return (
        <main>
            <SEO
                title="Meeting BaaS APIs | Programmable Meeting Intelligence"
                description="Comprehensive API endpoints for deploying meeting bots, syncing calendars, creating AI meeting agents, and accessing meeting data across Zoom, Google Meet, and Microsoft Teams."
                imagePath="apis"
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
                        ['images', 3],
                    ]}
                    contents={[
                        <OverviewBlock key="overview" />,
                        <APIEndpointsBlock key="api-endpoints" />,
                        <SDKOptionsBlock key="sdk-options" />,
                        <CodeExampleBlock key="code-example" />,
                    ]}
                    title={'Meeting BaaS APIs'}
                    subtitle={'Complete Meeting Intelligence API Platform'}
                    images={[
                        {
                            src: 'apis',
                            alt: 'Meeting BaaS API platform',
                        },
                        {
                            src: 'apis-dashboard',
                            alt: 'API dashboard interface',
                        },
                        {
                            src: 'apis-documentation',
                            alt: 'API documentation',
                        },
                        {
                            src: 'previewFeatures',
                            alt: 'preview features',
                        },
                    ]}
                    codeExamples={[
                        {
                            code: ['INVITE.SH'],
                        },
                    ]}
                    buttonToShow={[
                        <Button
                            key="api-docs"
                            color="green"
                            name="API Documentation"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() =>
                                window.open(
                                    'https://docs.meetingbaas.com/api',
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
                                    'https://docs.meetingbaas.com/typescript-sdk/reference',
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
export default MeetingBaasAPIs
