import { Link } from 'gatsby'
import React from 'react'
import { Button } from '../../components/atoms/Button'
import { HyperLink } from '../../components/atoms/Hyperlink'
import { VerticalCodeExampleHolder } from '../../components/Examples/verticalCodeExampleHolder'
import Footer from '../../components/Layout/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { SEO } from '../../components/seo'

const MCPToolsOverviewBlock = () => {
    return (
        <div>
            <p className="text-lg">
                MCP (Model Context Protocol) tools enable large language models
                to interact with Meeting BaaS directly. Use these tools to
                create meeting bots, search transcripts, manage calendars, and
                automate meeting intelligence workflows.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">
                Available MCP Repositories
            </h3>
            <ul className="list-disc list-inside mt-2">
                <li>
                    <strong>meeting-mcp:</strong> The main MCP server for
                    managing meeting data, including transcripts, recordings,
                    calendar events, and search functionality.{' '}
                    <Link
                        to="/examples/mcp/meeting-mcp"
                        className="text-blue-600 hover:underline"
                    >
                        Learn more
                    </Link>
                </li>
                <li>
                    <strong>mcp-on-vercel:</strong> Deploy Meeting BaaS MCP
                    server on Vercel with fluid compute support for efficient
                    execution and Redis integration.{' '}
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
                    documentation to AI assistants.{' '}
                    <Link
                        to="/examples/mcp/mcp-on-vercel-documentation"
                        className="text-blue-600 hover:underline"
                    >
                        Learn more
                    </Link>
                </li>
                <li>
                    <strong>speaking-bots-mcp:</strong> An MCP server that can
                    control speaking bots inside meetings with AI-powered
                    personas.{' '}
                    <HyperLink
                        link="https://github.com/Meeting-Baas/speaking-bots-mcp"
                        textContent="View on GitHub"
                    />
                </li>
            </ul>

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
                    calendar entries and upcoming meetings
                </li>
                <li>
                    <strong>AI-Generated QR Codes:</strong> Create unique bot
                    avatars with QR codes pointing to websites or contact info
                </li>
                <li>
                    <strong>Speaking Bots:</strong> Control AI-powered meeting
                    participants with distinct personalities
                </li>
                <li>
                    <strong>Documentation Access:</strong> Let AI assistants
                    access Meeting BaaS documentation
                </li>
            </ul>
        </div>
    )
}

const MCPConfigBlock = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-3">
                MCP Configuration Example
            </h3>
            <p className="mb-4">
                This simple configuration connects to the hosted Meeting BaaS
                MCP server:
            </p>
            <div className="mt-4 bg-primary-100 border border-primary-300 rounded-lg p-4">
                <h3 className="font-bold text-neutral-900 mb-2">
                    Try it yourself!
                </h3>
                <p className="mb-2">
                    All MCP tools are available through our hosted chat
                    interface:
                </p>
                <HyperLink
                    link="https://chat.meetingbaas.com"
                    textContent="chat.meetingbaas.com"
                />
                <p className="mt-2 text-sm text-neutral-700">
                    You can also self-host these MCP servers using the
                    repositories linked above.
                </p>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3">Getting Started</h3>
            <p className="mb-4">
                To integrate Meeting BaaS with AI assistants using MCP:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
                <li>Clone one of the MCP repositories</li>
                <li>Install dependencies and build the project</li>
                <li>
                    Configure environment variables with your Meeting BaaS API
                    key
                </li>
                <li>
                    Connect the MCP server to your AI assistant (Claude, Cursor,
                    etc.)
                </li>
            </ol>

            <h3 className="text-xl font-bold mt-6 mb-3">Related Pages</h3>
            <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                    <Link
                        to="/examples/speaking-bots"
                        className="text-blue-600 hover:underline"
                    >
                        Speaking Bots - AI-powered meeting participants
                    </Link>
                </li>
                <li>
                    <Link
                        to="/examples/calendars-api"
                        className="text-blue-600 hover:underline"
                    >
                        Calendars API - Calendar Integration
                    </Link>
                </li>
                <li>
                    <Link
                        to="/examples/typescript-sdk"
                        className="text-blue-600 hover:underline"
                    >
                        TypeScript SDK - Client Libraries
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const MCPToolsPage = () => {
    return (
        <main>
            <SEO
                title="MCP Tools | Meeting BaaS"
                description="Integrate Meeting BaaS with LLMs through Model Context Protocol (MCP) tools for meeting intelligence"
                imagePath="mcp-tools"
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
                        <MCPToolsOverviewBlock key="mcp-tools-overview" />,
                        <MCPConfigBlock key="mcp-config" />,
                    ]}
                    title={'Model Context Protocol (MCP) Tools'}
                    subtitle={'Integrate Meeting BaaS with LLMs'}
                    images={[
                        {
                            src: 'mcp-tools',
                            alt: 'Model Context Protocol Tools',
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
                            key="try-chat"
                            color="green"
                            name="Try in AI Chat"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() => {
                                window.open(
                                    'https://chat.meetingbaas.com',
                                    '_blank',
                                )
                            }}
                        />,
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

export default MCPToolsPage
