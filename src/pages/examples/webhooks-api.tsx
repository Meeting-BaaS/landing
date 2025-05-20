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
                link="https://docs.meetingbaas.com/api/webhooks"
                textContent="Webhooks API"
            />{' '}
            enables real-time notifications for meeting events, allowing your
            applications to receive updates about meeting starts, completions,
            transcription events, and more.
            <br></br>
            <br></br>
            <ul className="list-disc list-inside mt-2">
                <li>Receive real-time meeting notifications</li>
                <li>Integrate with your existing workflow tools</li>
                <li>Build custom event handlers for meeting events</li>
                <li>Automate post-meeting processes</li>
            </ul>
            <br></br>
            Webhooks provide a powerful way to build responsive applications
            that react to meeting lifecycle events without constant polling,
            enabling efficient integrations with CRMs, analytics platforms, and
            other business systems.
        </div>
    )
}

const KeyFeaturesBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Key Features</h2>

            <ul className="list-disc list-inside mt-2">
                <li>
                    <strong>Meeting Lifecycle Events:</strong> Receive
                    notifications for meeting starts, completions, and failures
                </li>
                <li>
                    <strong>Transcription Events:</strong> Get updates when
                    transcription is available or updated
                </li>
                <li>
                    <strong>Calendar Events:</strong> Notifications for calendar
                    changes and synchronization
                </li>
                <li>
                    <strong>Retry Mechanism:</strong> API endpoint to retry
                    failed webhook deliveries
                </li>
                <li>
                    <strong>Customizable Endpoints:</strong> Set different
                    webhook URLs for different event types
                </li>
                <li>
                    <strong>Event Filtering:</strong> Control which events
                    trigger notifications
                </li>
            </ul>
        </div>
    )
}

const EventTypesBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Webhook Event Types</h2>
            <p>MeetingBaaS webhooks deliver the following event types:</p>
            <br />
            <ul className="list-disc list-inside space-y-2">
                <li>
                    <strong>meeting.started:</strong> A bot has successfully
                    joined a meeting
                </li>
                <li>
                    <strong>meeting.completed:</strong> A meeting has ended and
                    recordings are available
                </li>
                <li>
                    <strong>meeting.failed:</strong> A bot failed to join a
                    meeting
                </li>
                <li>
                    <strong>transcription.available:</strong> Initial
                    transcription is available
                </li>
                <li>
                    <strong>transcription.updated:</strong> Transcription has
                    been updated or refined
                </li>
                <li>
                    <strong>calendar.synced:</strong> A calendar has been
                    synchronized
                </li>
                <li>
                    <strong>event.added:</strong> A new calendar event has been
                    detected
                </li>
                <li>
                    <strong>event.updated:</strong> A calendar event has been
                    updated
                </li>
                <li>
                    <strong>event.deleted:</strong> A calendar event has been
                    removed
                </li>
            </ul>
        </div>
    )
}

const SetupExampleBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Setup Example</h2>
            <p>
                Here's an example of how to configure a webhook URL for meeting
                events:
            </p>
            <br />
            <p className="text-sm text-neutral-600">
                This JSON configuration shows how to set up a webhook endpoint
                in your Meeting BaaS account.
            </p>
            <br />
            <CodeComponent choices={['MAKE_WEBHOOK.JSON']} />
            <br />
            <h2 className="text-xl font-bold mb-2">Webhook Event Formats</h2>
            <p>Here are examples of webhook event payloads:</p>
            <br />
            <p className="text-sm text-neutral-600">
                These JSON examples show the format of meeting started and
                completed event notifications.
            </p>
            <br />
            <CodeComponent choices={['WEBHOOK_EVENTS.JSON']} />
        </div>
    )
}

const WebhooksAPI = () => {
    return (
        <main>
            <SEO
                title="Meeting BaaS Webhooks API | Real-time Meeting Event Notifications"
                description="Webhooks API for Meeting BaaS provides real-time notifications for meeting events, enabling integrations with CRMs, analytics platforms, and business systems."
                imagePath="webhooks-api"
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
                        ['buttons', 0],
                        ['contents', 4],
                        ['contents', 5],
                        ['code', 0],
                        ['code', 1],
                        ['images', 3],
                    ]}
                    contents={[
                        <OverviewBlock key="overview" />,
                        <KeyFeaturesBlock key="key-features" />,
                        <EventTypesBlock key="event-types" />,
                        <SetupExampleBlock key="setup-example" />,
                    ]}
                    title={'Webhooks API'}
                    subtitle={'Real-time Meeting Event Notifications'}
                    images={[
                        {
                            src: 'webhooks-api',
                            alt: 'Webhooks API',
                        },
                        {
                            src: 'webhooks-interface',
                            alt: 'Webhooks interface',
                        },
                        {
                            src: 'webhooks-dashboard',
                            alt: 'Webhooks dashboard',
                        },
                        {
                            src: 'previewFeatures',
                            alt: 'preview features',
                        },
                    ]}
                    codeExamples={[
                    ]}
                    buttonToShow={[
                        <Button
                            key="docs"
                            color="green"
                            name="Webhooks Documentation"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() =>
                                window.open(
                                    'https://docs.meetingbaas.com/api/webhooks',
                                    '_blank',
                                )
                            }
                        />,
                        <Button
                            key="api-docs"
                            color="black"
                            name="API Reference"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() => {
                                window.open(
                                    'https://docs.meetingbaas.com/api',
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
export default WebhooksAPI
