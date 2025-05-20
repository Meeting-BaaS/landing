import { Link } from 'gatsby'
import React from 'react'
import { Button } from '../../../components/atoms/Button'
import { VerticalCodeExampleHolder } from '../../../components/Examples/verticalCodeExampleHolder'
import Footer from '../../../components/Layout/Footer'
import { Navbar } from '../../../components/Navbar/Navbar'
import { SEO } from '../../../components/seo'

const MeetingMCPOverviewBlock = () => {
    return (
        <div>
            <div className="flex items-center mb-6">
                <Link
                    to="/examples/mcp-tools"
                    className="text-blue-600 hover:underline mr-2"
                >
                    ← MCP Tools
                </Link>
            </div>
            <p className="text-lg">
                A Model Context Protocol (MCP) server that provides tools for
                managing meeting data, including transcripts, recordings,
                calendar events, and search functionality. This server enables
                AI assistants like Claude and Cursor to access and manipulate
                meeting data.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Key Features</h3>
            <ul className="list-disc list-inside mt-2">
                <li>
                    <strong>Bot Management:</strong> Create and invite bots to
                    your video conferences that automatically record and
                    transcribe meetings
                </li>
                <li>
                    <strong>Transcript Search:</strong> Search through meeting
                    transcripts and find specific information without watching
                    entire recordings
                </li>
                <li>
                    <strong>Calendar Integration:</strong> View and organize
                    calendar entries and upcoming meetings with OAuth
                    integrations for Google and Microsoft
                </li>
                <li>
                    <strong>AI-Generated QR Codes:</strong> Create unique bot
                    avatars with QR codes pointing to websites or contact
                    information
                </li>
            </ul>
        </div>
    )
}

const MeetingMCPToolsBlock = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-3">Available Tools</h3>
            <div className="mb-8">
                <h4 className="text-lg font-bold mb-2">Calendar Tools</h4>
                <ul className="list-disc list-inside mb-6">
                    <li>
                        <strong>oauthGuidance:</strong> Get detailed
                        step-by-step instructions on setting up OAuth
                    </li>
                    <li>
                        <strong>listRawCalendars:</strong> Lists available
                        calendars from Google or Microsoft
                    </li>
                    <li>
                        <strong>setupCalendarOAuth:</strong> Integrates a
                        calendar using OAuth credentials
                    </li>
                    <li>
                        <strong>listCalendars:</strong> Lists all integrated
                        calendars
                    </li>
                    <li>
                        <strong>getCalendar:</strong> Gets detailed information
                        about a specific calendar
                    </li>
                    <li>
                        <strong>listUpcomingMeetings:</strong> Lists upcoming
                        meetings from a calendar
                    </li>
                </ul>
            </div>
            <div className="mb-8">
                <h4 className="text-lg font-bold mb-2">Meeting Tools</h4>
                <ul className="list-disc list-inside mb-6">
                    <li>
                        <strong>createBot:</strong> Creates a meeting bot that
                        can join video conferences
                    </li>
                    <li>
                        <strong>getBots:</strong> Lists all bots and their
                        associated meetings
                    </li>
                    <li>
                        <strong>getRecording:</strong> Retrieves recording
                        information for a specific bot/meeting
                    </li>
                    <li>
                        <strong>getMeetingData:</strong> Gets transcript and
                        recording data for a specific meeting
                    </li>
                </ul>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3">Example Workflows</h3>
            <div className="mb-6">
                <h4 className="text-lg font-bold mb-2">Recording a Meeting</h4>
                <div className="bg-neutral-100 p-4 rounded-lg">
                    <p className="font-mono mb-2 text-neutral-700">
                        "Create a bot for my Zoom meeting at
                        https://zoom.us/j/123456789"
                    </p>
                </div>
            </div>
            <div className="mb-6">
                <h4 className="text-lg font-bold mb-2">Calendar Integration</h4>
                <div className="bg-neutral-100 p-4 rounded-lg">
                    <p className="font-mono mb-2 text-neutral-700">
                        "Integrate my Google Calendar using these OAuth
                        credentials"
                    </p>
                </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3">
                Related MCP Implementations
            </h3>
            <ul className="list-disc list-inside mt-2">
                <li>
                    <strong>mcp-on-vercel:</strong> Deploy Meeting BaaS MCP
                    server on Vercel with fluid compute support.{' '}
                    <Link
                        to="/examples/mcp/mcp-on-vercel"
                        className="text-blue-600 hover:underline"
                    >
                        Learn more
                    </Link>
                </li>
                <li>
                    <strong>mcp-on-vercel-documentation:</strong> MCP server
                    specifically for fetching and serving Meeting BaaS API
                    documentation.{' '}
                    <Link
                        to="/examples/mcp/mcp-on-vercel-documentation"
                        className="text-blue-600 hover:underline"
                    >
                        Learn more
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const MeetingMCPPage = () => {
    return (
        <main>
            <SEO
                title="Meeting MCP | Meeting BaaS"
                description="The main Model Context Protocol server for managing meeting data, including transcripts, recordings, calendar events, and search functionality."
                imagePath="meeting-mcp"
            />
            <div className="overflow-y-scroll h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />

                <VerticalCodeExampleHolder
                    order={[
                        ['title', 0],
                        ['subtitle', 0],
                        ['contents', 0],
                        ['buttons', 0],
                        ['code', 0],
                        ['contents', 1],
                    ]}
                    contents={[
                        <MeetingMCPOverviewBlock key="meeting-mcp-overview" />,
                        <MeetingMCPToolsBlock key="meeting-mcp-tools" />,
                    ]}
                    title={'Meeting MCP Server'}
                    subtitle={'The Main MCP Server for Meeting Intelligence'}
                    images={[
                        {
                            src: 'meeting-mcp',
                            alt: 'Meeting MCP Server',
                        },
                    ]}
                    codeExamples={[
                        {
                            code: ['MCP_CONFIG.JSON'],
                            externalLink:
                                'https://github.com/Meeting-Baas/meeting-mcp',
                        },
                    ]}
                    buttonToShow={[
                        <Button
                            key="github"
                            color="black"
                            name="View on GitHub"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() => {
                                window.open(
                                    'https://github.com/Meeting-Baas/meeting-mcp',
                                    '_blank',
                                )
                            }}
                        />,
                    ]}
                />
                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default MeetingMCPPage
