import React from 'react'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'
import { VerticalCodeExampleHolder } from '../components/Examples/verticalCodeExampleHolder'
import CodeComponent from '../components/atoms/CodeComponent'

const BSL_LICENSE = `
Business Source License 1.1

Licensor: SAS SPOKE
Licensed Work: Meeting BaaS (https://meetingbaas.com)
Change Date: 18 months from the date of each code release
Change License: Apache 2.0

Use Limitation: The Licensed Work may only be used for non-commercial purposes, or for your own internal business operations. You may not use the Licensed Work, or any part of it, to provide a commercial service or product to third parties, including as a hosted or SaaS offering, without explicit written permission from the Licensor.

Feature Delay: Any new features or changes in the closed-source version will be released under this license after a 1-week delay.

On or after the Change Date, this license will automatically convert to the Apache 2.0 License, and you may use the Licensed Work for any purpose, including commercial use.
`;

const SEO_KEYWORDS = [
    'open source meeting bots',
    'meeting bot API',
    'self-host meeting bot',
    'Meeting BaaS',
    'Zoom bot open source',
    'Google Meet bot open source',
    'Microsoft Teams bot open source',
    'meeting automation',
    'meeting intelligence',
    'developer API for meetings',
    'transcription API',
    'meeting recording API',
    'open source SaaS',
    'GDPR meeting bot',
    'no vendor lock-in meeting bot',
    'Recall AI alternative',
    'meeting bot license',
    'business source license',
    'source available meeting bot',
    'meeting bot as a service',
]

const SEO_DESCRIPTION =
    'Meeting BaaS is the open source, developer-first API for meeting bots, recording, and transcription across Zoom, Google Meet, and Microsoft Teams. Self-host or use our hosted service. This is the official license page for our core bot technology.'

const HeroBlock = () => (
    <div>
        <h1 className="text-3xl font-bold mb-4">Meeting BaaS License & Open Source Policy</h1>
        <p className="mb-4 text-lg">
            <strong>Meeting BaaS</strong> is the leading open source platform and developer API for programmatic access to meeting data across Zoom, Google Meet, and Microsoft Teams. Our mission is to empower technical teams to build AI meeting assistants, automate workflows, and access meeting intelligence with no vendor lock-in.
        </p>
        <p className="mb-4">
            <strong>Hosted and ready to use, with the option to self-host when you're ready.</strong> This page explains the license for our core meeting bot technology and clarifies the open source status of our other repositories.
        </p>
        <div className="mb-2 text-sm text-neutral-600">
            <strong>Keywords:</strong> {SEO_KEYWORDS.join(', ')}
        </div>
    </div>
)

const SummaryBlock = () => (
    <div>
        <h1 className="text-3xl font-bold mb-4">Business Source License (BSL)</h1>
        <p className="mb-6 text-lg">
            Meeting BaaS is <strong>source-available</strong> under the Business Source License (BSL). You are free to use, modify, and self-host the code for personal or internal business use. <strong>You may not offer Meeting BaaS as a commercial service or product to third parties.</strong> After a delay period, all code changes are released under an open source license. This protects our business while empowering the community.
        </p>
    </div>
)

const WhatThisLicenseCoversBlock = () => (
    <div>
        <h2 className="text-xl font-semibold mb-2">What This License Covers</h2>
        <p className="mb-2">
            <strong>The Business Source License (BSL) described on this page applies only to our core meeting bot technology:</strong>
        </p>
        <ul className="list-disc list-inside mb-2">
            <li>
                <a href="https://github.com/Meeting-Baas/meeting-bot-as-a-service" className="text-blue-600 underline">meeting-bot-as-a-service</a> (the core bot that joins meetings)
            </li>
            <li>
                The main server(s) that manage and orchestrate meeting bots
            </li>
        </ul>
        <p className="mb-2">
            <strong>All other repositories in our GitHub organization are open source under their respective licenses</strong> (MIT, Apache 2.0, etc.) and are not subject to these BSL restrictions. You are free to use, modify, and build on these projects without the commercial limitations described above.
        </p>
        <p className="mb-2">Some examples of our open source repositories:</p>
        <ul className="list-disc list-inside">
            <li><a href="https://github.com/Meeting-Baas/transcript-seeker" className="text-blue-600 underline">transcript-seeker</a> – Open-source transcript viewer and manager</li>
            <li><a href="https://github.com/Meeting-Baas/speaking-meeting-bot" className="text-blue-600 underline">speaking-meeting-bot</a> – Autonomous speaking bots using MeetingBaas API</li>
            <li><a href="https://github.com/Meeting-Baas/meeting-mcp" className="text-blue-600 underline">meeting-mcp</a> – Model Context Protocol server for AI assistants</li>
            <li><a href="https://github.com/Meeting-Baas/ai-chat" className="text-blue-600 underline">ai-chat</a> – Next.js AI chatbot (Vercel fork)</li>
            <li><a href="https://github.com/Meeting-Baas/sdk-generator" className="text-blue-600 underline">sdk-generator</a> – TypeScript SDK generator for MeetingBaas API</li>
        </ul>
    </div>
)

const WhyThisLicenseBlock = () => (
    <div>
        <h2 className="text-xl font-semibold mb-2">Why This License?</h2>
        <p className="mb-2">
            Our edge over closed competitors is openness, but we also need to protect our ability to operate and invest in the platform. The BSL allows you to self-host, audit, and extend Meeting BaaS, while preventing direct commercial competition. This ensures a sustainable open ecosystem for all.
        </p>
        <p>
            <strong>No talk to sales. No vendor lock-in. Just code, APIs, and freedom for builders.</strong>
        </p>
    </div>
)

const FeatureDelayBlock = () => (
    <div>
        <h2 className="text-xl font-semibold mb-2">Feature Delay</h2>
        <p>
            Any new features or changes in the closed-source version will be released under this license after a <strong>1-week delay</strong>. This gives us a short window to stabilize and support new releases before they are made available to the community.
        </p>
    </div>
)

const OpenSourceTransitionBlock = () => (
    <div>
        <h2 className="text-xl font-semibold mb-2">Open Source Transition</h2>
        <p>
            On or after <strong>18 months from the date of each code release</strong>, the code will automatically convert to the <a href="https://www.apache.org/licenses/LICENSE-2.0" className="text-blue-600 underline">Apache 2.0 License</a>. At that point, you may use the code for any purpose, including commercial use.
        </p>
    </div>
)

const LicenseCodeBlock = () => (
    <div>
        <h3 className="text-lg font-bold mb-2 text-primary-700">Full License Text</h3>
        <div className="my-4">
            <CodeComponent
                choices={['BSL_LICENSE']}
                externalLink="https://github.com/Meeting-Baas/meeting-bot-as-a-service"
                maxHeight={40}
            />
        </div>
    </div>
)

const AttributionBlock = () => (
    <div>
        <h2 className="text-xl font-semibold mb-2">How to Attribute & Special Cases</h2>
        <p className="mb-2">
            If you use Meeting BaaS in your internal tools, research, or non-commercial product, please include a link to <a href="https://meetingbaas.com" className="text-primary-700 underline">meetingbaas.com</a> in your documentation or about page. Attribution is appreciated and helps support the open source ecosystem.
        </p>
        <p className="mb-2">
            <strong>Note:</strong> Commercial hosting or resale of Meeting BaaS as a service is not permitted under this license. If you are an NGO, non-profit, or have a special use case, we offer reduced or free usage—please <a href="/talk-to-us" className="text-primary-700 underline">contact us</a> to discuss your needs.
        </p>
        <p className="mb-2">
            <strong>Internal Use by Large Organizations:</strong> Internal use of Meeting BaaS by organizations with more than 100 employees or over $5M annual revenue requires a paid commercial license. Please <a href="/talk-to-us" className="text-primary-700 underline">contact us</a> to discuss terms.
        </p>
    </div>
)

const LicencePage = () => {
    return (
        <main>
            <SEO
                title="Open Source Meeting Bot License | Meeting BaaS"
                description={SEO_DESCRIPTION}
            />
            <div className="overflow-y-scroll h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <VerticalCodeExampleHolder
                    order={[
                        ['contents', 0],
                        ['contents', 1],
                        ['contents', 2],
                        ['contents', 3],
                        ['contents', 4],
                        ['contents', 5],
                        ['contents', 6],
                        ['contents', 7],
                    ]}
                    contents={[
                        <HeroBlock key="hero" />,
                        <SummaryBlock key="summary" />, 
                        <WhatThisLicenseCoversBlock key="covers" />, 
                        <WhyThisLicenseBlock key="why" />, 
                        <FeatureDelayBlock key="delay" />, 
                        <OpenSourceTransitionBlock key="transition" />, 
                        <LicenseCodeBlock key="license" />,
                        <AttributionBlock key="attrib" />,
                    ]}
                    title={'Business Source License (BSL)'}
                    subtitle={'Source-available, with commercial protection for our core meeting bot technology'}
                    images={[]}
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

export default LicencePage 