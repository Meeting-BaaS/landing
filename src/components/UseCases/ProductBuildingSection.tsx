import React from 'react'
import { CollaborationView } from '../../svg/CollaborationView'
import { registerRedirect } from '../../utils/router'
import { Button } from '../atoms/Button'
import { SampleItem } from './components/SampleItem'

export const ProductBuildingSection = () => {
    return (
        <div
            className="relative snap-start gap-[48px]  w-full lg:pt-[100px]  2xl:max-h-screen lg:min-h-screen flex justify-center flex-col"
            id="ProductBuilding"
        >
            <div className="max-w-screen-xl w-full mx-auto px-8 lg:px-16 flex flex-col gap-8">
                <div className="flex flex-col w-full  ">
                    <div className="font-sansCondensed font-bold text-2xl lg:text-5xl  leading-none">
                        Build any product
                    </div>
                    <div className="font-sansCondensed font-black text-3xl lg:text-6xl leading-none">
                        using voice AI for Video Meetings
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-[16px] w-full justify-between items-center ">
                    <div className="lg:w-2/5 flex flex-col gap-[48px]">
                        <div className="w-full flex flex-col gap-[16px]">
                            <SampleItem
                                title="A video library of online classes"
                                description="Record classes, and use our open source examples with a transcript viewer and database search to unlock knowledge."
                            />
                            <SampleItem
                                title="An AI interviewer "
                                description="Stream video into Google Meet or Zoom, while receiving the transcription in the same time."
                            />
                            <SampleItem
                                title="An AI Knowledge Base"
                                description="Plug your vectorized database to create searchable conversations intelligence fast for your users."
                            />
                            <SampleItem
                                title="A Sales Assistant"
                                description="Use our meeting bots and code examples to enrich CRMs fast. View our Notion integration on Github to get an idea."
                            />
                        </div>
                        <div className="w-full justify-around grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Button
                                name="Start now"
                                color="black"
                                textColor="text-neutral-50"
                                buttonClass="min-w-full"
                                onClick={registerRedirect}
                            />
                            <Button
                                name="open GitHub examples"
                                color="green"
                                buttonClass="w-full min-w-full"
                                onClick={() =>
                                    window.open(
                                        'https://github.com/Meeting-Baas/meeting-bot-as-a-service',
                                        '_blank',
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className="scale-50 md:scale-75 lg:scale-100">
                        {/* <ProductSectionIllustration /> */}
                        <CollaborationView />,
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
