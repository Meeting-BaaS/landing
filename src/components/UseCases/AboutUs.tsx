import React from 'react'
import { MultiplePeopleWithBass } from '../../svg/MultiplePeopleWithBass'
import { Button } from '../atoms/Button'
import { SampleItem } from './components/SampleItem'

export const AboutUs = () => {
    return (
        <div
            className="relative snap-start gap-[48px]  w-full lg:pt-[100px]  2xl:max-h-screen lg:min-h-screen flex justify-center flex-col"
            id="ProductBuilding"
        >
            <div className="max-w-screen-xl w-full mx-auto px-8 lg:px-16 flex flex-col gap-8">
                <div className="flex flex-col w-full  ">
                    <div className="font-sansCondensed font-bold text-2xl lg:text-5xl  leading-none">
                        About Us
                    </div>
                    <div className="font-sansCondensed font-black text-3xl lg:text-6xl leading-none"></div>
                </div>
                <div className="flex flex-col lg:flex-row gap-[16px] w-full justify-between items-center ">
                    <div className="lg:w-1/2 flex flex-col gap-[48px]">
                        <div className="w-full flex flex-col gap-[16px]">
                            {/* <SampleItem
                                title="What is Meeting Baas?"
                                description="An API service providing bots for Google Meet, Zoom, and Microsoft Teams. These bots capture and relay meeting data directly to users."
                            />
                            <SampleItem
                                title="Core Functionality"
                                description="Our API collects video meeting data at scale: transcripts, summaries, and metadata. This enables swift integration into your products or processes."
                            /> */}
                            <SampleItem
                                title="We know our stuff"
                                description="We've specialized in the video-meeting space since 4 years, initially focusing on sales teams with Spoke app."
                            />
                            <SampleItem
                                title="We speak the language of our end users"
                                description="Be it on device audio capture, building a desktop app, or going through the process of a Zoom approval, we've seen most of our field. We're delighted to be serving developpers directly - as a founding team of developpers."
                            />
                            <SampleItem
                                title="Why a fish?"
                                description="We initially confused 'Bass' (the fish) with 'BaaS' (Bots as a Service)."
                            />
                        </div>
                        <div className="w-full justify-end grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Button
                                name="Talk to us"
                                color="black"
                                textColor="text-neutral-50"
                                buttonClass="min-w-full"
                                onClick={() => window.open('/talk-to-us/')}
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2 h-full flex items-center justify-center">
                        <div className="scale-50 md:scale-75 lg:scale-100">
                            <MultiplePeopleWithBass />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="hidden 2xl:block absolute bottom-0 left-0 text-7xl leading-none  font-black font-sansCondensed uppercase text-outline w-full whitespace-nowrap overflow-hidden text-primary-500 outline-primary-500 ">
                focus on building what matters focus on building what matters
                focus on building what matters
            </div> */}
        </div>
    )
}
