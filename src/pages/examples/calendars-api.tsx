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
            The{' '}
            <HyperLink
                link="https://docs.meetingbaas.com/api/getting-started/calendars"
                textContent="Calendars API"
            />{' '}
            allows you to automatically sync calendars from Outlook and Google
            Workspace to deploy bots to scheduled meetings.
            <br></br>
            <br></br>
            This makes it easy to:
            <ul className="list-disc list-inside mt-2">
                <li>
                    Automate recording and participation in meetings without
                    manual intervention
                </li>
                <li>
                    Connect to both Google Workspace and Microsoft Outlook
                    calendars
                </li>
                <li>Receive real-time updates when calendar events change</li>
                <li>
                    Apply business logic to determine which meetings to record
                </li>
            </ul>
            <br></br>
            The API follows a simple pattern allowing you to connect calendar
            providers, list and manage events, and automatically schedule
            recording bots when meetings occur.
        </div>
    )
}

const KeyFeaturesBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Key Features</h2>

            <ul className="list-disc list-inside mt-2">
                <li>
                    <strong>Multi-Calendar Support:</strong> Connect to both
                    Google Workspace and Microsoft Outlook calendars
                </li>
                <li>
                    <strong>OAuth Authentication:</strong> Secure integration
                    with calendar providers using OAuth
                </li>
                <li>
                    <strong>Real-Time Webhooks:</strong> Receive immediate
                    notifications when calendar events change
                </li>
                <li>
                    <strong>Selective Recording:</strong> Implement your own
                    business rules to decide which meetings to record
                </li>
                <li>
                    <strong>Bot Configuration:</strong> Customize recording
                    settings for each meeting
                </li>
                <li>
                    <strong>Recurring Meeting Support:</strong> Handle recurring
                    meeting series efficiently
                </li>
            </ul>

            <br></br>
            <h2 className="text-xl font-bold mb-2">Implementation Process:</h2>

            <ul className="list-disc list-inside">
                <li>
                    <strong>Authentication Setup:</strong> Connect calendars
                    using OAuth credentials
                </li>
                <li>
                    <strong>Calendar Selection:</strong> Choose which calendars
                    to sync
                </li>
                <li>
                    <strong>Event Management:</strong> List, filter, and process
                    calendar events
                </li>
                <li>
                    <strong>Recording Configuration:</strong> Schedule bots for
                    specific meetings
                </li>
                <li>
                    <strong>Webhook Processing:</strong> Receive and handle
                    real-time calendar updates
                </li>
                <li>
                    <strong>Maintenance:</strong> Handle credential refreshing
                    and error recovery
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
                The Calendars API is part of the Meeting BaaS platform and
                provides endpoints for:
            </p>
            <ul className="list-disc list-inside mt-2">
                <li>Creating and managing calendar integrations</li>
                <li>Listing and filtering calendar events</li>
                <li>Scheduling recording bots for specific meetings</li>
                <li>Managing webhooks for real-time updates</li>
            </ul>
            <br />
            <p>
                The API is fully documented and supports standard REST
                operations with JSON payloads. Authentication is performed using
                your Meeting BaaS API key along with OAuth tokens for calendar
                provider access.
            </p>
        </div>
    )
}

const CodeExampleBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">API Usage Example</h2>
            <p>
                Below is an example of how to use the Calendars API to schedule
                bots for team meetings:
            </p>
            <br />
            <p className="text-sm text-neutral-600">
                This Python code demonstrates how to interact with the Calendars
                API to retrieve events and schedule recording bots.
            </p>
        </div>
    )
}

const CalendarsApi = () => {
    return (
        <main>
            <SEO
                title="Calendars API - Calendar Integrations | Meeting Baas 🐟"
                description="Automatically sync calendars from Google Workspace and Microsoft Outlook to deploy meeting bots for scheduled meetings. Use webhooks for real-time updates."
                imagePath="calendars-api"
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
                        ['images', 3],
                    ]}
                    contents={[
                        <OverviewBlock key="overview" />,
                        <KeyFeaturesBlock key="key-features" />,
                        <APIUsageBlock key="api-usage" />,
                        <CodeExampleBlock key="code-example" />,
                    ]}
                    title={'Calendars API'}
                    subtitle={
                        'Synchronize Calendars and Automate Meeting Recordings'
                    }
                    images={[
                        {
                            src: 'calendars-api',
                            alt: 'Calendar integrations for meetings',
                        },
                        {
                            src: 'calendars-interface',
                            alt: 'calendar interface',
                        },
                        {
                            src: 'calendars-dashboard',
                            alt: 'calendar dashboard',
                        },
                        {
                            src: 'previewFeatures',
                            alt: 'preview features',
                        },
                    ]}
                    codeExamples={[
                        {
                            code: ['CALENDARS_API.PY'],
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
                                    'https://docs.meetingbaas.com/api/getting-started/calendars',
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
                                    'https://docs.meetingbaas.com/typescript-sdk/reference/calendars',
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
export default CalendarsApi
