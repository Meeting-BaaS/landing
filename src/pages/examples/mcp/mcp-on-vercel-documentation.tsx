import { Link } from 'gatsby'
import React from 'react'
import { Button } from '../../../components/atoms/Button'
import { VerticalCodeExampleHolder } from '../../../components/Examples/verticalCodeExampleHolder'
import Footer from '../../../components/Layout/Footer'
import { Navbar } from '../../../components/Navbar/Navbar'
import { SEO } from '../../../components/seo'

const MCPDocumentationOverviewBlock = () => {
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
                This MCP server fetches and serves Meeting BaaS API
                documentation from the official documentation site. It enables
                AI assistants to access comprehensive documentation about
                Meeting BaaS features, APIs, and SDKs.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Documentation Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="border rounded-lg p-6 bg-neutral-50 shadow-sm">
                    <h4 className="text-lg font-bold mb-2">Category Tools</h4>
                    <ul className="list-disc list-inside">
                        <li>
                            <strong>listCategories:</strong> List all available
                            categories
                        </li>
                        <li>
                            <strong>getAllDocs:</strong> Get all documentation
                            content
                        </li>
                        <li>
                            <strong>getDocsByCategory:</strong> Get docs by
                            specific category name
                        </li>
                    </ul>
                </div>
                <div className="border rounded-lg p-6 bg-neutral-50 shadow-sm">
                    <h4 className="text-lg font-bold mb-2">
                        API Documentation
                    </h4>
                    <ul className="list-disc list-inside">
                        <li>
                            <strong>getApiDocs:</strong> Get API documentation
                        </li>
                        <li>
                            <strong>getCalendarsDocs:</strong> Get Calendars API
                            docs
                        </li>
                        <li>
                            <strong>getMeetingsDocs:</strong> Get Meetings API
                            docs
                        </li>
                        <li>
                            <strong>getUsersDocs:</strong> Get Users API docs
                        </li>
                        <li>
                            <strong>getWebhooksDocs:</strong> Get Webhooks API
                            docs
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const MCPDocumentationDetailsBlock = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-3">Documentation Sources</h3>
            <p className="mb-4">
                Documentation is fetched from{' '}
                <code>https://docs.meetingbaas.com/llms/</code> with these
                categories:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="border rounded-lg p-4 bg-neutral-100">
                    <code>/all</code>
                    <p className="text-sm text-neutral-700">
                        All documentation content
                    </p>
                </div>
                <div className="border rounded-lg p-4 bg-neutral-100">
                    <code>/api</code>
                    <p className="text-sm text-neutral-700">
                        API documentation
                    </p>
                </div>
                <div className="border rounded-lg p-4 bg-neutral-100">
                    <code>/sdk</code>
                    <p className="text-sm text-neutral-700">SDK docs</p>
                </div>
                <div className="border rounded-lg p-4 bg-neutral-100">
                    <code>/typescript-sdk</code>
                    <p className="text-sm text-neutral-700">TypeScript SDK</p>
                </div>
            </div>

            <h3 className="text-xl font-bold mt-6 mb-3">
                AI Assistant Integration
            </h3>
            <p className="mb-4">This MCP server enables AI assistants to:</p>
            <ul className="list-disc list-inside mb-6">
                <li>
                    Provide accurate, up-to-date information about Meeting BaaS
                    APIs
                </li>
                <li>
                    Fetch specific documentation sections based on user queries
                </li>
                <li>
                    Understand the full capabilities of the Meeting BaaS
                    platform
                </li>
                <li>
                    Assist in troubleshooting by referencing official
                    documentation
                </li>
            </ul>
            <div className="bg-neutral-100 p-4 rounded-lg">
                <p className="font-mono text-neutral-700">
                    With this MCP server, AI assistants can respond to prompts
                    like:
                </p>
                <p className="font-mono text-neutral-700 mt-2">
                    "How do I invite a bot to a Zoom meeting?"
                </p>
                <p className="font-mono text-neutral-700 mt-2">
                    "What SDK methods are available for calendar management?"
                </p>
            </div>

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
                    <strong>mcp-on-vercel:</strong> Deploy Meeting BaaS MCP
                    server on Vercel with fluid compute support for efficient
                    execution.{' '}
                    <Link
                        to="/examples/mcp/mcp-on-vercel"
                        className="text-blue-600 hover:underline"
                    >
                        Learn more
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const MCPDocumentationPage = () => {
    return (
        <main>
            <SEO
                title="MCP Documentation Server | Meeting BaaS"
                description="MCP server for fetching and serving Meeting BaaS API documentation to AI assistants."
                imagePath="mcp-documentation"
            />
            <div className="overflow-y-scroll h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />

                <VerticalCodeExampleHolder
                    order={[
                        ['title', 0],
                        ['subtitle', 0],
                        ['contents', 0],
                        ['buttons', 0],
                        ['images', 0],
                        ['contents', 1],
                    ]}
                    contents={[
                        <MCPDocumentationOverviewBlock key="mcp-docs-overview" />,
                        <MCPDocumentationDetailsBlock key="mcp-docs-details" />,
                    ]}
                    title={'MCP Documentation Server'}
                    subtitle={'AI-Powered Documentation Access'}
                    images={[
                        {
                            src: 'mcp-documentation',
                            alt: 'MCP Documentation Server',
                        },
                    ]}
                    codeExamples={[]}
                    buttonToShow={[
                        <Button
                            key="github"
                            color="black"
                            name="View on GitHub"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() => {
                                window.open(
                                    'https://github.com/Meeting-Baas/mcp-on-vercel-documentation',
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

export default MCPDocumentationPage
