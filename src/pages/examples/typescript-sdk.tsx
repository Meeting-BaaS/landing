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
                link="https://docs.meetingbaas.com/typescript-sdk"
                textContent="TypeScript SDK"
            />{' '}
            is the officially supported package that empowers developers to
            integrate with the Meeting BaaS API - the universal interface for
            automating meetings across Google Meet, Zoom, and Microsoft Teams.
            <br></br>
            <br></br>
            <ul className="list-disc list-inside mt-2">
                <li>
                    Complete type safety with comprehensive TypeScript
                    definitions
                </li>
                <li>Automatic updates synced with our OpenAPI specification</li>
                <li>
                    Simplified access to all meeting automation capabilities
                </li>
                <li>
                    Cross-platform consistency for all supported meeting
                    providers
                </li>
            </ul>
        </div>
    )
}

const KeyFeaturesBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Key Features</h2>

            <ul className="list-disc list-inside mt-2">
                <li>
                    <strong>BaaS API Client:</strong> Strongly typed functions
                    for interacting with the Meeting BaaS API
                </li>
                <li>
                    <strong>Bot Management:</strong> Create, join, and manage
                    meeting bots across platforms
                </li>
                <li>
                    <strong>Calendar Integration:</strong> Connect calendars and
                    schedule meeting recordings
                </li>
                <li>
                    <strong>Complete API Coverage:</strong> Access to all
                    Meeting BaaS API endpoints
                </li>
                <li>
                    <strong>TypeScript Support:</strong> Full TypeScript
                    definitions for all APIs
                </li>
                <li>
                    <strong>MPC Tool Integration:</strong> Pre-generated MPC
                    tools for AI systems
                </li>
                <li>
                    <strong>CLI Interface:</strong> Command-line tools for
                    common operations
                </li>
                <li>
                    <strong>Automatic Tool Generation:</strong> MPC tools
                    automatically generated for all SDK methods
                </li>
            </ul>
        </div>
    )
}

const InstallationBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Installation</h2>
            <p>
                Install the Meeting BaaS SDK using your preferred package
                manager:
            </p>
            <br />
            <p className="text-sm text-neutral-600">
                Use npm to install the SDK package:
            </p>
            <br />
            <CodeComponent choices={['SDK_INSTALL.SH']} />
            <br />
            <h2 className="text-xl font-bold mb-2">Quick Start</h2>
            <p>Create a new instance of the BaaS client with your API key:</p>
            <br />
            <p className="text-sm text-neutral-600">
                This TypeScript example shows basic client initialization and
                bot deployment:
            </p>
            <br />
            <CodeComponent choices={['SDK_USAGE.TS']} />
        </div>
    )
}

const CalendarIntegrationBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Calendar Integration</h2>
            <p>The SDK provides full calendar integration capabilities:</p>
            <br />
            <p className="text-sm text-neutral-600">
                This example demonstrates how to interact with calendars using
                the API:
            </p>
            <br />
            <CodeComponent choices={['CALENDARS_API.PY']} />
        </div>
    )
}

const MpcToolsBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">MPC Tools Integration</h2>
            <p>
                The SDK includes pre-generated MPC (Model Context Protocol)
                tools that can be easily integrated with any MPC server
                implementation:
            </p>
            <br />
            <p className="text-sm text-neutral-600">
                The following JSON configuration shows how to configure MPC
                tools for Meeting BaaS:
            </p>
            <br />
            <CodeComponent choices={['MCP_CONFIG.JSON']} />
        </div>
    )
}

const TypeScriptSDK = () => {
    return (
        <main>
            <SEO
                title="Meeting BaaS TypeScript SDK | Developer Tools for Meeting Automation"
                description="TypeScript SDK for Meeting BaaS with bot management, calendar integration, and MPC tools integration. Complete type safety and OpenAPI specification synchronization."
                imagePath="typescript-sdk"
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
                        ['code', 0],
                        ['images', 3],
                    ]}
                    contents={[
                        <OverviewBlock key="overview" />,
                        <KeyFeaturesBlock key="key-features" />,
                        <InstallationBlock key="installation" />,
                        <CalendarIntegrationBlock key="calendar-integration" />,
                        <MpcToolsBlock key="mpc-tools" />,
                    ]}
                    title={'TypeScript SDK'}
                    subtitle={'Developer Tools for Meeting Automation'}
                    images={[
                        {
                            src: 'typescript-sdk',
                            alt: 'TypeScript SDK',
                        },
                        {
                            src: 'typescript-interface',
                            alt: 'TypeScript interface',
                        },
                        {
                            src: 'typescript-dashboard',
                            alt: 'TypeScript dashboard',
                        },
                        {
                            src: 'previewFeatures',
                            alt: 'preview features',
                        },
                    ]}
                    codeExamples={[]}
                    buttonToShow={[
                        <Button
                            key="npm"
                            color="green"
                            name="npm Package"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() =>
                                window.open(
                                    'https://www.npmjs.com/package/@meeting-baas/sdk',
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
                                    'https://github.com/Meeting-Baas/sdk-generator',
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
export default TypeScriptSDK
