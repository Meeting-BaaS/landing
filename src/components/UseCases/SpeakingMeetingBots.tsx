import React from 'react'
import { Button } from '../atoms/Button'
import { CenteredImage } from '../atoms/CenteredImage'
import { SampleItem } from './components/SampleItem'

export const SpeakingMeetingBotsContent = () => {
    return (
        <div
            className="relative snap-start gap-[48px] w-full lg:pt-[100px] 2xl:max-h-screen lg:min-h-screen flex justify-center flex-col"
            id="ProductBuilding"
        >
            <div className="max-w-screen-xl w-full mx-auto px-8 lg:px-16 flex flex-col gap-8">
                <div className="flex flex-col w-full">
                    <div className="font-sansCondensed font-bold text-2xl lg:text-5xl leading-none">
                        AI Avatars "in 5-6 Years"? (Eric Yuan, Zoom CEO)
                    </div>
                    <div className="font-sansCondensed font-black text-3xl lg:text-6xl leading-none">
                        For us - it's a matter of weeks.
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-[16px] w-full justify-between items-center">
                    <div className="lg:w-1/2 flex flex-col gap-[48px]">
                        <div className="w-full flex flex-col gap-[16px]">
                            <SampleItem
                                title="AI Avatars in Meetings are already possible"
                                description="Our product has the unique ability to speak in meetings. By combining it with Speech-to-Speech APIs, and Image to Video APIs we can hit a ping as low as 500 milliseconds, while human vocal latency typically ranges from 200 to 600 milliseconds."
                            />
                            {/* <SampleItem
                                title="Market Readiness for AI Avatars"
                                description="Startups are already envisioning AI asssitants for sales, HR, etc."
                            /> */}
                            <SampleItem
                                title="MeetingBaaS: Speak, Attend, Interact"
                                description="Speak: Our API will let anyone programmatically send virtual clones in meetings. Attend, Interact: We already offer and distribute meetings bots which passively record and transcribe."
                            />
                            <SampleItem
                                title="Picks and Shovels: Multiple Platforms through a single API"
                                description="Build any product with virtual clones through a single interface for Google Meet, Zoom and Microsoft Teams."
                            />
                        </div>
                        <div className="w-full justify-end grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* <Button
                                name="Back"
                                color="green"
                                textColor="text-neutral-50"
                                buttonClass="min-w-full"
                                onClick={() => window.open('/about/')}
                            /> */}

                            <Button
                                name="Why are we so sure?"
                                color="black"
                                textColor="text-neutral-50"
                                buttonClass="min-w-full"
                                onClick={() => window.open('/about/')}
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2 h-full flex items-center justify-center">
                        <div className="scale-50 md:scale-75 lg:scale-100">
                            {/* <ZoomC */}
                            <CenteredImage
                                alt="Zoom CEO"
                                className="w-full h-auto"
                                picture={'ZoomCeo'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
