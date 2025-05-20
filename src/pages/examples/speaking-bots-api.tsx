import React from 'react'
import { Button } from '../../components/atoms/Button'
import CodeComponent from '../../components/atoms/CodeComponent'
import { HyperLink } from '../../components/atoms/Hyperlink'
import { VerticalCodeExampleHolder } from '../../components/Examples/verticalCodeExampleHolder'
import Footer from '../../components/Layout/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { SEO } from '../../components/seo'

const OverviewBlock = () => (
    <div>
        The{' '}
        <HyperLink
            link="https://speaking.meetingbaas.com"
            textContent="Speaking Bots API"
        />{' '}
        lets you deploy conversational AI agents (personas) into Google Meet, Microsoft Teams, and Zoom meetings. These bots can speak, listen, and interact in real time, powered by Pipecat and MeetingBaas.
        <br />
        <br />
        <ul className="list-disc list-inside mt-2">
            <li>Deploy bots with custom personalities and voices</li>
            <li>Real-time audio streaming and speech-to-text</li>
            <li>Support for multiple platforms and multiple bots per meeting</li>
            <li>OpenAPI and HTTP endpoints for easy integration</li>
        </ul>
        <br />
        The API is open source and can be self-hosted or used via the public endpoint.
    </div>
)

const KeyFeaturesBlock = () => (
    <div>
        <h2 className="text-xl font-bold mb-2">Key Features</h2>
        <ul className="list-disc list-inside mt-2">
            <li><strong>Conversational AI:</strong> Bots can speak, listen, and interact in meetings</li>
            <li><strong>Custom Personas:</strong> Define unique personalities, voices, and entry messages</li>
            <li><strong>Multi-Platform:</strong> Google Meet, Microsoft Teams, Zoom</li>
            <li><strong>WebSocket Audio:</strong> Real-time audio streaming with Pipecat</li>
            <li><strong>Open Source:</strong> Full codebase available for customization</li>
            <li><strong>Easy Deployment:</strong> Launch bots with a simple HTTP POST</li>
        </ul>
    </div>
)

const EndpointsBlock = () => (
    <div>
        <h2 className="text-xl font-bold mb-2">API Endpoints</h2>
        <ul className="list-disc list-inside mt-2">
            <li><code>POST /bots</code> — Deploy a speaking bot to a meeting</li>
            <li><code>DELETE /bots/{'{bot_id}'}</code> — Remove a bot from a meeting</li>
            <li><code>GET /health</code> — Health check</li>
        </ul>
        <br />
        <p>See the <HyperLink link="https://speaking.meetingbaas.com/docs" textContent="API docs" /> and <HyperLink link="https://speaking.meetingbaas.com/openapi.json" textContent="OpenAPI spec" /> for full details.</p>
    </div>
)

const ExampleHttpBlock = () => (
    <div>
        <h2 className="text-xl font-bold mb-2">HTTP Example: Deploy a Speaking Bot</h2>
        <p>Minimal example using <code>curl</code>:</p>
        <br />
        <CodeComponent choices={['SPEAKING_BOT.SH']} />
        <br />
        <p>Python example for advanced persona usage:</p>
        <br />
        <CodeComponent choices={['SPEAKING_BOT.PY']} externalLink="https://github.com/Meeting-Baas/speaking-meeting-bot/" />
    </div>
)

const PersonaBlock = () => (
    <div>
        <h2 className="text-xl font-bold mb-2">Personas: Custom Conversational Agents</h2>
        <p>
            Define your own personas with unique prompts, voices, and behaviors. See the <HyperLink link="https://github.com/Meeting-Baas/speaking-meeting-bot/tree/main/config/personas" textContent="personas directory" /> for examples.
        </p>
        <br />
        <ul className="list-disc list-inside mt-2">
            <li>Each persona is a folder with Markdown files for prompt, context, and rules</li>
            <li>Assign a persona by name when launching a bot</li>
            <li>Supports custom entry messages, images, and voice IDs</li>
        </ul>
    </div>
)

const SpeakingBotsAPI = () => (
    <main>
        <SEO
            title="Speaking Bots API - Conversational Meeting Agents | Meeting BaaS 🐟"
            description="Deploy AI-powered speaking bots with custom personas into video meetings. HTTP API, open source, real-time audio, and more."
            imagePath="speaking-bots-api"
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
                    ['contents', 4],
                    ['images', 3],
                ]}
                contents={[
                    <OverviewBlock key="overview" />, // 0
                    <KeyFeaturesBlock key="key-features" />, // 1
                    <EndpointsBlock key="endpoints" />, // 2
                    <ExampleHttpBlock key="http-examples" />, // 3
                    <PersonaBlock key="personas" />, // 4
                ]}
                title={'Speaking Bots API'}
                subtitle={'Conversational AI Agents for Meetings'}
                images={[
                    {
                        src: 'speaking-bots-api',
                        alt: 'Speaking Bots API',
                    },
                    {
                        src: 'speaking-bots-interface',
                        alt: 'Speaking bots interface',
                    },
                    {
                        src: 'speaking-bots-dashboard',
                        alt: 'Speaking bots dashboard',
                    },
                    {
                        src: 'previewFeatures',
                        alt: 'preview features',
                    },
                ]}
                codeExamples={[]}
                buttonToShow={[
                    <Button
                        key="api-docs"
                        color="green"
                        name="API Documentation"
                        buttonClass="flex max-w-fit mx-auto lg:mx-0"
                        onClick={() =>
                            window.open(
                                'https://speaking.meetingbaas.com/docs',
                                '_blank',
                            )
                        }
                    />,
                    <Button
                        key="github"
                        color="black"
                        name="GitHub Repository"
                        buttonClass="flex max-w-fit mx-auto lg:mx-0"
                        onClick={() => {
                            window.open(
                                'https://github.com/Meeting-Baas/speaking-meeting-bot',
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
export default SpeakingBotsAPI 