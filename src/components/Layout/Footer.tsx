import { Link } from 'gatsby'
import React from 'react'
import { Discord } from '../../svg/Discord'
import { GitHub } from '../../svg/GitHub'
import { Linkedin } from '../../svg/Linkedin'
import { MeetingBaasIconDark } from '../../svg/MeetingBaasIconDark'

const Footer = () => {
    return (
        <div className="relative px-[50px] mt-[140px] flex flex-col place-self-end w-full snap-start max-w-screen-xl mx-auto ">
            <div className="w-full flex flex-col gap-6 lg:flex-row justify-between font-mono text-base px-[50px]">
                <div className=" gap-4 flex flex-col">
                    <Link
                        to="/"
                        className="flex items-center  lg:min-w-fit w-[200px] cursor-pointer"
                    >
                        <MeetingBaasIconDark />
                    </Link>
                    <div className="flex gap-2 ">
                        <div
                            className="w-[30px] cursor-pointer text-white my-auto"
                            onClick={() =>
                                window.open(
                                    'https://www.linkedin.com/company/spokeai/',
                                    '_blank',
                                )
                            }
                        >
                            <Linkedin />
                        </div>
                        <div
                            className="w-[30px] cursor-pointer text-white my-auto"
                            onClick={() =>
                                window.open(
                                    'https://discord.com/invite/dsvFgDTr6c',
                                    '_blank',
                                )
                            }
                        >
                            <Discord />
                        </div>
                        <div
                            className="w-[30px] cursor-pointer my-auto text-white"
                            onClick={() =>
                                window.open(
                                    'https://github.com/Meeting-Baas/Meeting-Bot-As-A-Service',
                                    '_blank',
                                )
                            }
                        >
                            <GitHub />
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col gap-5">
                    <div className="text-neutral-50 font bold">Resources</div>
                    <div className="flex flex-col font-medium gap-2">
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/manifesto"
                        >
                            Manifesto
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/about"
                        >
                            About Us
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/talk-to-us"
                        >
                            Talk to Us
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/features"
                        >
                            Features
                        </Link>
                        <div
                            className="text-primary-500 cursor-pointer hover:underline"
                            onClick={() => {
                                window.open(
                                    'https://chat.meetingbaas.com',
                                    '_blank',
                                )
                            }}
                        >
                            AI Chat
                        </div>
                        <div
                            className="text-primary-500 cursor-pointer hover:underline"
                            onClick={() => {
                                window.location.href =
                                    'https://doc.meetingbaas.com'
                                // '_blank',
                            }}
                        >
                            Documentation
                        </div>
                        {/* to="/meeting-transcription-summarization-notion-integration" */}
                        <div
                            className="text-primary-500 cursor-pointer hover:underline"
                            onClick={() => {
                                window.location.href = '/terms-and-conditions'
                            }}
                        >
                            Terms and Conditions
                        </div>
                        <div
                            className="text-primary-500 cursor-pointer hover:underline"
                            onClick={() => {
                                window.location.href = '/privacy'
                            }}
                        >
                            Privacy Policy
                        </div>
                        <div
                            className="text-primary-500 cursor-pointer hover:underline"
                            onClick={() => {
                                window.location.href = '/license'
                            }}
                        >
                            License
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col gap-5">
                    <div className="text-neutral-50 font bold">Use Cases</div>
                    <div className="flex flex-col font-medium gap-2">
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/white-labelling"
                        >
                            White-Labelling
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/use-cases#ProductBuilding"
                        >
                            Product Building
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/use-cases#WorkflowEnrichment"
                        >
                            Workflow Enrichment
                        </Link>
                    </div>
                </div>

                <div className=" flex flex-col gap-5">
                    <div className="text-neutral-50 font bold">Open-Source</div>

                    <div className="flex flex-col font-medium gap-2">
                        <Link
                            to=""
                            className="text-primary-500 cursor-pointer hover:underline"
                            onClick={() => {
                                window.open(
                                    'https://transcriptseeker.com/',
                                    '_blank',
                                )
                            }}
                        >
                            Transcript Seeker
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/examples/oss-transcript-seeker"
                        >
                            Transcript Seeker: a complete interface in React
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/examples/speaking-bots"
                        >
                            Speaking Bots: AI-powered meeting participants
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/examples/mcp-tools"
                        >
                            MCP Tools - Model Context Protocol
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/examples/mcp/meeting-mcp"
                        >
                            Meeting MCP Server
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/examples/mcp/mcp-on-vercel"
                        >
                            MCP on Vercel
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/examples/mcp/mcp-on-vercel-documentation"
                        >
                            MCP Documentation Server
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/examples/meeting-transcription-summarization-notion-integration"
                        >
                            Node server for Notion summaries
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/examples/open-source-transcript-player-with-options"
                        >
                            Simple Transcript player in React
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/examples/make-meeting-transcription-summarization"
                        >
                            Meeting summarization using Make.com
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/examples/oss-gladia-api-transcript-seeker"
                        >
                            Interface for the Gladia transcription API
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/examples/oss-assemblyai-api-transcript-seeker"
                        >
                            Interface for the AssemblyAI transcription API
                        </Link>
                    </div>
                </div>

                <div className=" flex flex-col gap-5">
                    <div className="text-neutral-50 font bold">APIs</div>
                    <div className="flex flex-col font-medium gap-2">
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/examples/apis"
                        >
                            APIs: Meeting Intelligence Platform
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/examples/calendars-api"
                        >
                            Calendars API: Meeting scheduling integration
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/examples/webhooks-api"
                        >
                            Webhooks API: Event Notifications
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/examples/typescript-sdk"
                        >
                            TypeScript SDK: Open Source + Hosted Tools
                        </Link>
                    </div>
                </div>
                <div className=" flex flex-col gap-5">
                    <div className="text-neutral-50 font bold">Product</div>
                    <div className="flex flex-col font-medium gap-2">
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/pricing"
                        >
                            Plans
                        </Link>

                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/features"
                        >
                            Feature List
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/meeting-transcription-api"
                        >
                            Meeting Transcription API
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/ai-meeting-assistant-api"
                        >
                            AI Meeting Assistant API
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/one-api-to-record-transcribe-meetings"
                        >
                            API to Record and Transcribe Video Meetings
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/meeting-bots-with-transcription"
                        >
                            Meeting bots with transcription
                        </Link>

                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/meeting-bot-api-for-google-meet"
                        >
                            Meeting bot API for Google Meet
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/google-meet-recording-api"
                        >
                            Alternative Recording API for Google Meet
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/recall-ai-alternatives"
                        >
                            Alternatives to Recall AI
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/recall-ai-vs-meeting-baas"
                        >
                            Recall AI vs Meeting BaaS
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/meeting-bot-api-for-zoom"
                        >
                            Meeting bot API for Zoom
                        </Link>
                        <Link
                            className="text-primary-500 cursor-pointer hover:underline"
                            to="/meeting-bot-api-for-microsoft-teams"
                        >
                            Meeting bot API for Microsoft Teams
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full border-t mt-[50px] py-[50px] border-neutral-500 flex flex-row justify-between text-primary-500">
                <a
                    href="https://www.pappers.fr/entreprise/spoke-883755654"
                    className="text-primary-500"
                >
                    © 2024, SAS SPOKE
                </a>
                <div className="text-primary-200">
                    <a href="#top">BackToTop</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
