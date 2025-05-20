import React from 'react'
import { CalendarSyncIllustration } from '../../svg/CalendarSyncIllustration'
import { CodeSampleIllustration } from '../../svg/CodeSampleIllustration'
import { ConversationIllustration } from '../../svg/ConversationIllustration'
import { CustomBrandingIllustration } from '../../svg/CustomBrandingIllustration'
import { GDPRIllustration } from '../../svg/GDPRIllustration'
import { Multiplateform } from '../../svg/Multiplateform'
import { TranscriptIllustration } from '../../svg/TranscriptIllustration'
import { VideoRecordingIllustration } from '../../svg/VideoRecordingIllustration'
import { registerRedirect } from '../../utils/router'
import { Button } from '../atoms/Button'
import { wrapWordsWithLinks } from '../Pricing/PricingDetails'

export const FeaturesSection = () => {
    return (
        <div className="snap-start py-[100px] lg:pt-[160px] bg-neutral-900 px-[60px] w-full min-h-screen items-center flex flex-row justify-between">
            <div className="2xl:w-3/5 lg:max-w-screen-lg mx-auto flex flex-col gap-[64px]">
                <div className="text-center mb-8">
                    <h2 className="text-bold font-sansCondensed text-2xl lg:text-3xl font-black uppercase text-primary-500 mb-4">
                        WHY DEVELOPERS CHOOSE MEETING BAAS
                    </h2>
                    <h3 className="text-bold font-sansCondensed text-xl lg:text-2xl font-black uppercase text-primary-500">
                        PROGRAMMATIC ACCESS TO MEETINGS
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-8">
                    <GridItem
                        children={<VideoRecordingIllustration />}
                        title="Raw Video & Audio"
                        description="Direct access to meeting recordings"
                    />
                    <GridItem
                        children={<TranscriptIllustration />}
                        title="Full Transcription"
                        description="Gladia, Whisper v3, or your own engine"
                    />
                    <GridItem
                        children={<ConversationIllustration />}
                        title="Participant Metadata"
                        description="Speaker detection with timestamps"
                    />
                    <GridItem
                        children={<Multiplateform />}
                        title="Multi-Platform Support"
                        description="One API for Zoom, Meet, and Teams"
                    />
                </div>

                <div className="text-center mt-8 mb-4">
                    <h3 className="text-bold font-sansCondensed text-xl lg:text-2xl font-black uppercase text-primary-500">
                        THE OPEN SOURCE ADVANTAGE
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4 gap-8">
                    <GridItem
                        children={<CodeSampleIllustration />}
                        title="Hosted API First"
                        description="Start integrating in minutes"
                    />
                    <GridItem
                        children={<CustomBrandingIllustration />}
                        title="Open Source Core"
                        description="View, modify, and contribute to the codebase"
                    />
                    <GridItem
                        children={<GDPRIllustration />}
                        title="Self-Host Option"
                        description="Deploy on your infrastructure when needed"
                    />
                    <GridItem
                        children={<CalendarSyncIllustration />}
                        title="No Vendor Lock-In"
                        description="Your data, your code, your choice"
                    />
                </div>

                <div className="text-center mt-8 mb-4">
                    <h3 className="text-bold font-sansCondensed text-xl lg:text-2xl font-black uppercase text-primary-500">
                        WHO WE SERVE
                    </h3>
                    <p className="text-primary-500 opacity-75 mt-2">
                        TECHNICAL TEAMS BUILDING:
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    <GridItem
                        children={<CodeSampleIllustration />}
                        title="AI Meeting Assistants"
                        description="Create your own meeting AI using our data"
                    />
                    <GridItem
                        children={<CustomBrandingIllustration />}
                        title="Vertical SaaS"
                        description="Embed meeting capabilities in your industry solution"
                    />
                    <GridItem
                        children={<GDPRIllustration />}
                        title="Developer Tools"
                        description="Build IDE plugins or workflow automations"
                    />
                    <GridItem
                        children={<CalendarSyncIllustration />}
                        title="Meeting Intelligence"
                        description="Create analytics on customer conversations"
                    />
                </div>

                <div className=" grid grid-cols-1 lg:grid-cols-2 mx-auto gap-9 lg:w-full 2xl:w-3/4">
                    <Button
                        name="View Documentation"
                        onClick={() =>
                            (window.location.href = '/documentation')
                        }
                        textColor="text-neutral-50"
                        color="green"
                        buttonClass="min-w-full"
                    />

                    <Button
                        name="Get API Key"
                        onClick={registerRedirect}
                        buttonClass="min-w-full"
                        color="green"
                    />
                </div>
            </div>
        </div>
    )
}

const GridItem = (props: {
    classGridItem?: string
    title: string
    description: string
    children: React.ReactNode
}) => {
    return (
        <div
            className={`flex flex-col items-center gap-4 ${props.classGridItem}`}
        >
            <div className="rounded-full bg-primary-500 w-[70px] h-[105px] justify-center items-center flex mx-auto text-neutral-900">
                {props.children}
            </div>
            <div className="flex flex-col gap-1 2xl:gap-4 text-center">
                <div className="text-bold font-sansCondensed text-base lg:text-lg 2xl:text-xl font-black uppercase text-primary-500">
                    {props.title}
                </div>
                <div className="text-sm lg:text-base 2xl:text-lg hidden 2xl:block text-primary-500 opacity-75">
                    {wrapWordsWithLinks(props.description)}
                </div>
            </div>
        </div>
    )
}
