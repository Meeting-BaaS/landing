import { Link } from 'gatsby'
import React from 'react'
import { Button } from '../../../components/atoms/Button'
import { HyperLink } from '../../../components/atoms/Hyperlink'
import { VerticalCodeExampleHolder } from '../../../components/Examples/verticalCodeExampleHolder'
import Footer from '../../../components/Layout/Footer'
import { Navbar } from '../../../components/Navbar/Navbar'
import { SEO } from '../../../components/seo'

const MCPVercelOverviewBlock = () => {
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
                This is the main MCP (Model Context Protocol) server powering{' '}
                <HyperLink
                    link="https://chat.meetingbaas.com"
                    textContent="chat.meetingbaas.com"
                />
                , providing the LLM integration and AI capabilities for the
                Meeting BaaS chat interface. It's built on the Vercel MCP
                template with Meeting BaaS-specific modifications.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Key Features</h3>
            <ul className="list-disc list-inside mt-2">
                <li>
                    <strong>Meeting BaaS SDK Integration:</strong> Complete
                    integration with the official Meeting BaaS SDK for managing
                    meetings, bots, and calendars
                </li>
                <li>
                    <strong>Fluid Compute:</strong> Optimized for Vercel's Fluid
                    compute functionality for efficient execution and scaling
                </li>
                <li>
                    <strong>Redis Session Management:</strong> Uses Redis for
                    reliable session management and state persistence
                </li>
                <li>
                    <strong>Flexible Authentication:</strong> Multiple
                    authentication methods including headers, request body, and
                    environment variables
                </li>
            </ul>
        </div>
    )
}

const MCPVercelDetailsBlock = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-3">SDK Integration</h3>
            <p className="mb-4">
                This project uses the official Meeting BaaS SDK (
                <code>@meeting-baas/sdk</code>) which provides:
            </p>
            <ul className="list-disc list-inside mt-2 mb-6">
                <li>
                    Complete type safety with comprehensive TypeScript
                    definitions
                </li>
                <li>Automatic updates synced with OpenAPI specification</li>
                <li>
                    Simplified access to all meeting automation capabilities
                </li>
                <li>
                    Cross-platform consistency for all supported meeting
                    providers
                </li>
                <li>
                    Pre-generated MPC tools for easy integration with AI systems
                </li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">Environment Setup</h3>
            <p className="mb-4">Required environment variables:</p>
            <div className="bg-neutral-100 p-4 rounded-lg font-mono text-sm mb-6">
                <p className="mb-2">
                    REDIS_URL=redis://username:password@host:port
                </p>
                <p className="mb-2"># Optional variables</p>
                <p className="mb-2">NODE_ENV=development</p>
                <p className="mb-2">LOG_LEVEL=info</p>
                <p>BAAS_API_KEY=your-api-key # Development only</p>
            </div>
            <p className="mb-4">
                The server supports multiple ways to provide the Meeting BaaS
                API key:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mb-6">
                <li>
                    <strong>Request headers:</strong>
                    <ul className="list-disc pl-6 mt-1">
                        <li>
                            <code>x-meeting-baas-api-key</code>
                        </li>
                        <li>
                            <code>x-meetingbaas-apikey</code>
                        </li>
                        <li>
                            <code>x-api-key</code>
                        </li>
                        <li>
                            <code>Authorization</code> (as a Bearer token)
                        </li>
                    </ul>
                </li>
                <li>
                    <strong>Request body:</strong> For POST requests with{' '}
                    <code>{'{"apiKey": "your-api-key"}'}</code>
                </li>
                <li>
                    <strong>Environment variable:</strong>{' '}
                    <code>BAAS_API_KEY</code> (development mode only)
                </li>
            </ol>

            <h3 className="text-xl font-bold mt-6 mb-3">
                Related MCP Implementations
            </h3>
            <ul className="list-disc list-inside mt-2">
                <li>
                    <strong>meeting-mcp:</strong> The main MCP server for
                    managing meeting data, including transcripts, recordings,
                    and calendar events.{' '}
                    <Link
                        to="/examples/mcp/meeting-mcp"
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

const MCPOnVercelPage = () => {
    return (
        <main>
            <SEO
                title="MCP on Vercel | Meeting BaaS"
                description="Deploy Meeting BaaS MCP server on Vercel with fluid compute support for efficient execution and Redis integration."
                imagePath="mcp-on-vercel"
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
                        <MCPVercelOverviewBlock key="mcp-vercel-overview" />,
                        <MCPVercelDetailsBlock key="mcp-vercel-details" />,
                    ]}
                    title={'MCP on Vercel'}
                    subtitle={'Deploy Meeting BaaS MCP on Vercel'}
                    images={[
                        {
                            src: 'mcp-on-vercel',
                            alt: 'MCP on Vercel',
                        },
                    ]}
                    codeExamples={[
                        {
                            code: ['SDK_INSTALL.SH'],
                            externalLink:
                                'https://github.com/Meeting-Baas/mcp-on-vercel',
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
                                    'https://github.com/Meeting-Baas/mcp-on-vercel',
                                    '_blank',
                                )
                            }}
                        />,
                        <Button
                            key="try-now"
                            color="green"
                            name="Try it Now"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() => {
                                window.open(
                                    'https://chat.meetingbaas.com',
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

export default MCPOnVercelPage
