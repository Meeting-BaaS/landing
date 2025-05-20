import React from 'react'
import { Discord } from '../../svg/Discord'
import { GitHub } from '../../svg/GitHub'
import { Linkedin } from '../../svg/Linkedin'
import { MeetingBaasIconDark } from '../../svg/MeetingBaasIconDark'
import { HyperLink } from '../atoms/Hyperlink'

const FooterOutside = () => {
    return (
        <div className="relative px-[50px] mt-[140px] flex flex-col place-self-end w-full snap-start max-w-screen-xl mx-auto ">
            <div className="w-full flex flex-col gap-6 lg:flex-row justify-between font-mono text-base px-[50px]">
                <div className=" gap-4 flex flex-col">
                    <MeetingBaasIconDark />
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
                        <HyperLink
                            link="https://meetingbaas.com/manifesto"
                            textContent="Manifesto"
                            linkBrand={true}
                        ></HyperLink>
                        <HyperLink
                            link="https://meetingbaas.com/about"
                            textContent="About Us"
                            linkBrand={true}
                        ></HyperLink>
                        <HyperLink
                            link="https://meetingbaas.com/features"
                            textContent="Features"
                            linkBrand={true}
                        ></HyperLink>
                    </div>
                </div>
                <div className=" flex flex-col gap-5">
                    <div className="text-neutral-50 font bold">Use Cases</div>
                    <div className="flex flex-col font-medium gap-2">
                        <HyperLink
                            link="https://meetingbaas.com/white-labelling"
                            textContent="White-Labelling"
                            linkBrand={true}
                        ></HyperLink>
                        <HyperLink
                            link="https://meetingbaas.com/use-cases#ProductBuilding"
                            textContent="Product Building"
                            linkBrand={true}
                        ></HyperLink>
                        <HyperLink
                            link="https://meetingbaas.com/use-cases#WorkflowEnrichment"
                            textContent="Workflow Enrichment"
                            linkBrand={true}
                        ></HyperLink>
                    </div>
                </div>

                <div className=" flex flex-col gap-5">
                    <div className="text-neutral-50 font bold">Open-Source</div>

                    <div className="flex flex-col font-medium gap-2">
                        <HyperLink
                            link="https://meetingbaas.com/examples/oss-transcript-seeker"
                            textContent="Transcript Seeker: a complete interface in React"
                            linkBrand={true}
                        ></HyperLink>
                        <HyperLink
                            link="https://meetingbaas.com/examples/meeting-transcription-summarization-notion-integration"
                            textContent="Node server for Notion summaries"
                            linkBrand={true}
                        ></HyperLink>

                        <HyperLink
                            link="https://meetingbaas.com/examples/open-source-transcript-player-with-options"
                            textContent="Simple Transcript player in React"
                            linkBrand={true}
                        ></HyperLink>

                        <HyperLink
                            link="https://meetingbaas.com/examples/make-meeting-transcription-summarization"
                            textContent="Meeting summarization using Make.com"
                            linkBrand={true}
                        ></HyperLink>

                        <HyperLink
                            link="https://meetingbaas.com/examples/oss-gladia-api-transcript-seeker"
                            textContent="Interface for the Gladia transcription API"
                            linkBrand={true}
                        ></HyperLink>
                        <HyperLink
                            link="https://meetingbaas.com/examples/oss-assemblyai-api-transcript-seeker"
                            textContent="Interface for the AssemblyAI transcription API"
                            linkBrand={true}
                        ></HyperLink>
                    </div>
                </div>
                <div className=" flex flex-col gap-5">
                    <div className="text-neutral-50 font bold">Product</div>
                    <div className="flex flex-col font-medium gap-2">
                        <HyperLink
                            link="https://meetingbaas.com/pricing"
                            textContent="Plans"
                            linkBrand={true}
                        ></HyperLink>

                        <HyperLink
                            link="https://meetingbaas.com/features"
                            textContent="Feature List"
                            linkBrand={true}
                        ></HyperLink>
                        <HyperLink
                            link="https://meetingbaas.com/ai-meeting-assistant-api"
                            textContent="AI Meeting Assistant API"
                            linkBrand={true}
                        ></HyperLink>
                        <HyperLink
                            link="https://meetingbaas.com/one-api-to-record-transcribe-meetings"
                            textContent="API to Record and Transcribe Video Meetings"
                            linkBrand={true}
                        ></HyperLink>
                        <HyperLink
                            link="https://meetingbaas.com/meeting-bots-with-transcription"
                            textContent="Meeting bots with transcription"
                            linkBrand={true}
                        ></HyperLink>

                        <HyperLink
                            link="https://meetingbaas.com/meeting-bot-api-for-google-meet"
                            textContent="Meeting bot API for Google Meet"
                            linkBrand={true}
                        ></HyperLink>
                        <HyperLink
                            link="https://meetingbaas.com/google-meet-recording-api"
                            textContent="Alternative Recording API for Google Meet"
                            linkBrand={true}
                        ></HyperLink>
                        <HyperLink
                            link="https://meetingbaas.com/recall-ai-alternatives"
                            textContent="Alternatives to Recall.ai "
                            linkBrand={true}
                        ></HyperLink>
                        <HyperLink
                            link="https://meetingbaas.com/recall-ai-vs-meeting-baas"
                            textContent="Recall.ai vs Meeting BaaS"
                        ></HyperLink>
                        <HyperLink
                            link="https://meetingbaas.com/meeting-bot-api-for-zoom"
                            textContent="Meeting bot API for Zoom"
                            linkBrand={true}
                        ></HyperLink>
                        <HyperLink
                            link="https://meetingbaas.com/meeting-bot-api-for-microsoft-teams"
                            textContent="Meeting bot API for Microsoft Teams"
                            linkBrand={true}
                        ></HyperLink>
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

                <div>
                    {/* <a href="#top">Back To Top</a> */}
                    <a href="#top">Back To Top</a>
                </div>
            </div>
        </div>
    )
}

export default FooterOutside
