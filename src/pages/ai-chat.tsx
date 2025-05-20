import React from 'react'
import { Button } from '../components/atoms/Button'
import { HyperLink } from '../components/atoms/Hyperlink'
import { VerticalCodeExampleHolder } from '../components/Examples/verticalCodeExampleHolder'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'
import CodeComponent from '../components/atoms/CodeComponent'

const ForkBadge = () => (
    <div className="flex items-center gap-2 mb-4">
        <span className="text-xs bg-primary-200 border border-primary-700 text-primary-700 px-2 py-1 rounded font-mono">
            Forked from
        </span>
        <HyperLink
            link="https://github.com/vercel/ai-chatbot"
            textContent="Vercel's AI Chatbot"
        />
    </div>
)

const AIChatOverviewBlock = () => {
    return (
        <div>
            <ForkBadge />
            <p className="text-lg mb-2">
                <strong>MeetingBaaS AI Chat</strong> is an open-source chatbot, forked from Vercel's AI Chatbot, with MeetingBaaS integration and enhanced authentication. Chat with our API using natural language to send bots, debug issues, and explore all functionalities from our MCP servers.
            </p>
            <div className="bg-primary-100 border-l-4 border-primary-700 p-4 my-6">
                <p className="font-medium text-neutral-900">
                    Visit{' '}
                    <HyperLink
                        link="https://chat.meetingbaas.com"
                        textContent="chat.meetingbaas.com"
                    />{' '}
                    to start using the AI Chat interface right away.
                </p>
            </div>
            <h3 className="text-xl font-bold mt-6 mb-3">Key Features</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
                <li>
                    <strong>MeetingBaaS Integration:</strong> Unified API for Google Meet, Zoom, and Microsoft Teams. Automated recording, transcription, and LLM summaries through simple API endpoints.
                </li>
                <li>
                    <strong>Modern Architecture:</strong> Built with Next.js App Router, React Server Components, and Tailwind CSS. Uses shadcn/ui and Radix UI for accessible, flexible components.
                </li>
                <li>
                    <strong>AI SDK:</strong> Unified API for generating text, structured objects, and tool calls with LLMs. Supports OpenAI (default), xAI, Anthropic, Cohere, Fireworks, and more.
                </li>
                <li>
                    <strong>Data Persistence:</strong> Neon Serverless Postgres for chat history and user data, Vercel Blob for file storage.
                </li>
                <li>
                    <strong>Centralized Authentication:</strong> Built on better-auth, supporting SSO and multiple providers (Google, Microsoft, GitHub, GitLab, Zoom). Optionally disable auth for local development.
                </li>
                <li>
                    <strong>Web Search Integration:</strong> Enriches responses with real-time info via OpenAI's Responses API.
                </li>
                <li>
                    <strong>Open Source:</strong> Fully customizable codebase, deployable with one click.
                </li>
            </ul>
        </div>
    )
}

const AIChatUniqueBlock = () => (
    <div className="mt-8">
        <h3 className="text-xl font-bold mb-3">What's Unique in Our Fork?</h3>
        <ul className="list-disc list-inside space-y-1">
            <li>Integration with MeetingBaaS APIs for meetings, bots, and transcripts. Custom MCP tools are plugged in for advanced meeting intelligence workflows.</li>
            <li>Enhanced authentication with better-auth and SSO</li>
            <li>Redesigned login/register and landing pages for improved UX</li>
            <li>Web search integration for contextual, real-time answers</li>
            <li>Cleaner, more modern interface and layout</li>
            <li>Dedicated UI components for interacting with these MCP tools, making it easy to manage meetings, bots, and transcripts directly from the chat interface.</li>
        </ul>
    </div>
)

const userPromptExamples = [
    {
        label: 'Create a meeting bot',
        prompt: 'Create a bot for my Zoom meeting at https://zoom.us/j/123456789 starting in 10 minutes',
    },
    {
        label: 'Search transcripts',
        prompt: "Find all mentions of 'quarterly budget' in my meetings from last week",
    },
    {
        label: 'Integrate calendars',
        prompt: 'Help me set up OAuth to integrate my Google Calendar with Meeting BaaS',
    },
    {
        label: 'Access documentation',
        prompt: 'Show me the documentation for creating speaking bots',
    },
    {
        label: 'Debug meeting bots',
        prompt: 'Why did my bot not join the Google Meet at 3pm yesterday? Show logs.',
    },
    {
        label: 'Use MCP tools',
        prompt: 'Use the MCP transcript search tool to find all action items from last week.',
    },
]

const AIChatExamplesBlock = () => {
    return (
        <div>
            <h3 className="text-xl font-bold mb-3">Example User Prompts</h3>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <p className="mb-0">MeetingBaaS AI Chat supports a wide range of natural language prompts. Below are some examples you can try. All MCP tools (see MCP Tools) are available directly in the chat, and you can even debug bots you send to meetings.</p>
                <Button
                    color="black"
                    name="See MeetingBaaS MCP Tools"
                    buttonClass="flex max-w-fit ml-auto"
                    onClick={() => {
                        window.open('/examples/mcp-tools', '_self')
                    }}
                />
            </div>
            <div className="flex flex-col gap-6 mb-8">
                {userPromptExamples.map((ex, i) => (
                    <div key={i}>
                        <div className="font-medium text-neutral-900 mb-2">{ex.label}</div>
                        <CodeComponent
                            choices={[`PROMPT_EXAMPLE_${i}` as any]}
                            externalLink="https://github.com/Meeting-Baas/ai-chat"
                            maxHeight={20}
                        />
                    </div>
                ))}
            </div>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Button
                    key="try-chat"
                    color="green"
                    name="Try the Chat"
                    buttonClass="flex max-w-fit mx-auto lg:mx-0"
                    onClick={() => {
                        window.open('https://chat.meetingbaas.com', '_blank')
                    }}
                />
                <Button
                    key="github"
                    color="black"
                    name="View on GitHub"
                    buttonClass="flex max-w-fit mx-auto lg:mx-0"
                    onClick={() => {
                        window.open('https://github.com/Meeting-Baas/ai-chat', '_blank')
                    }}
                />
                <Button
                    key="mcp-tools"
                    color="black"
                    name="See MeetingBaaS MCP Tools"
                    buttonClass="flex max-w-fit mx-auto lg:mx-0"
                    onClick={() => {
                        window.open('/examples/mcp-tools', '_self')
                    }}
                />
            </div>
        </div>
    )
}

const AIChatPage = () => {
    return (
        <main>
            <SEO
                title="AI Chat | Meeting BaaS"
                description="MeetingBaaS AI Chat is an open-source chatbot, forked from Vercel's AI Chatbot, with MeetingBaaS integration and enhanced authentication through another open source service."
                imagePath="ai-chat-screenshot"
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
                        ['images', 1],
                        ['images', 2],
                        ['contents', 1],
                        ['images', 1],
                        ['images', 2],

                    ]}
                    contents={[
                        <AIChatOverviewBlock key="ai-chat-overview" />, 
                        <AIChatExamplesBlock key="ai-chat-examples" />,
                    ]}
                    title={'MeetingBaaS AI Chat'}
                    subtitle={'Interact with our API through natural language'}
                    images={[
                        {
                            src: 'ai-chat-screenshot',
                            alt: 'AI Chat Interface',
                        },
                        {
                            src: 'previewFeatures.png',
                            alt: 'Preview Features',
                        },
                        {
                            src: 'previewAiMeetingBot.png',
                            alt: 'AI Meeting Bot Preview',
                        },
                    ]}
                    codeExamples={[]}
                    buttonToShow={[]}
                />
                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default AIChatPage
