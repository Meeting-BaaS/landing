import React from 'react'
import { BaasIllustrationBuble } from '../../svg/BaasIllustrationBuble'
import { registerRedirect } from '../../utils/router'
import { Button } from '../atoms/Button'
import { ArrowTopRightIcon } from '../../svg/ArrowTopRightIcon'

export const LastSection: React.FC = () => {
    return (
        <section
            className="snap-start min-h-screen flex items-center justify-center bg-neutral-900"
            aria-label="How It Works"
        >
            <div className="max-w-screen-xl w-full mx-auto flex flex-col justify-center items-center px-6">
                <div className="text-center mb-12">
                    <h2 className="font-sansCondensed text-2xl lg:text-3xl font-black text-primary-500 uppercase mb-8">
                        HOW IT WORKS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
                        <Card
                            title="1"
                            description="Get your API key - Free tier available for development"
                            link="https://auth.meetingbaas.com/sign-in"
                        />
                        <Card
                            title="2"
                            description="Send a bot to meetings - One API call to join and record"
                            link="https://docs.meetingbaas.com/api/getting-started/sending-a-bot"
                        />
                        <Card
                            title="3"
                            description="Access meeting data - Recordings, transcripts, and metadata"
                            link="https://docs.meetingbaas.com/api/getting-started/getting-the-data"
                        />
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h2 className="font-sansCondensed text-2xl lg:text-3xl font-black text-primary-500 uppercase mb-8">
                        TECHNICAL RESOURCES
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        <Card
                            title="API Documentation"
                            description="Complete reference for all endpoints"
                            link="https://docs.meetingbaas.com/"
                        />
                        <Card
                            title="GitHub Examples"
                            description="Sample code for common use cases"
                            link="https://github.com/Meeting-Baas"
                        />
                        <Card
                            title="Discord Community"
                            description="Get help from our team and other developers"
                            link="https://discord.com/invite/dsvFgDTr6c"
                        />
                        <Card
                            title="Self-Host Guide"
                            description="When you're ready to deploy on your infrastructure"
                            link="https://docs.meetingbaas.com/"
                        />
                    </div>
                </div>

                <div className="text-center mt-8">
                    <h2 className="font-sansCondensed text-2xl lg:text-3xl font-black text-primary-500 uppercase mb-6">
                        OPEN SOURCE ECOSYSTEM
                    </h2>
                    <p className="text-primary-500 opacity-85 mb-8 max-w-2xl mx-auto">
                        Our open-source modules let you build exactly what you
                        need:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-12 max-w-3xl mx-auto">
                        <Card
                            title="Transcript Seeker"
                            description="Complete interface in React"
                            link="https://github.com/Meeting-Baas/transcript-seeker"
                        />
                        <Card
                            title="Node Server"
                            description="For Notion summaries and integration"
                            link="https://github.com/meeting-baas/meeting-bot-as-a-service/tree/main/apps/node-js-to-notion-llm-brief"
                        />
                        <Card
                            title="Transcription API Interfaces"
                            description="For Gladia and AssemblyAI"
                            link="https://github.com/Meeting-Baas/"
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            name="Explore GitHub"
                            onClick={() =>
                                window.open(
                                    'https://github.com/Meeting-Baas',
                                    '_blank',
                                )
                            }
                            color="green"
                            buttonClass="w-full sm:w-auto"
                        />
                        <Button
                            name="Join Discord"
                            onClick={() =>
                                window.open(
                                    'https://discord.com/invite/dsvFgDTr6c',
                                    '_blank',
                                )
                            }
                            color="green"
                            buttonClass="w-full sm:w-auto"
                        />
                    </div>
                </div>

                {/* Call-to-action with fish */}
                <div className="w-full p-10 lg:p-32">
                    <div className="lg:hidden">
                        <Button
                            flatbutton={false}
                            buttonClass="w-fit mx-auto cursor-pointer mt-2 mb-10 z-10 relative"
                            name="Get API Key"
                            onClick={() => registerRedirect({ redirect: null })}
                            color="green"
                            textColor="text-neutral-900"
                            aria-label="Register and get your API key"
                        />{' '}
                    </div>
                    <div className="hidden lg:block">
                        <div className="relative w-full my-16 flex flex-col items-center justify-center min-h-[100px]">
                            <h2 className="font-sansCondensed sm:text-xl lg:text-3xl xl:text-4xl font-black text-neutral-900 z-10 relative">
                                Start Building Now
                            </h2>
                            <Button
                                flatbutton={false}
                                buttonClass="w-fit mx-auto cursor-pointer mt-2 mb-10 z-10 relative"
                                name="Get API Key"
                                onClick={() =>
                                    registerRedirect({ redirect: null })
                                }
                                color="green"
                                textColor="text-neutral-900"
                                aria-label="Register and get your API key"
                            />

                            {/* Bubbles and fish container */}
                            <div className="absolute -bottom-16 left-0 right-0 h-[300px] flex items-center justify-center overflow-visible">
                                <BaasIllustrationBuble />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Card = (props: { title: string; description: string; link?: string }) => {
    return (
        <div className="bg-neutral-700 p-4 rounded-lg flex flex-col gap-2 justify-center">
            <h3 className="font-sansCondensed text-xl font-bold text-primary-500 mb-3">
                {props.title}
            </h3>
            <p className="text-primary-500 opacity-85">{props.description}</p>
            {props.link && (
                <div
                    className=" flex flex-row self-end bg-neutral-900 hover:cursor-pointer hover:bg-neutral-500 p-2 rounded-md text-primary-500 text-xs w-fit"
                    onClick={() => window.open(props.link, '_blank')}
                >
                    <ArrowTopRightIcon className="w-4 h-4 my-auto" />
                </div>
            )}
        </div>
    )
}
