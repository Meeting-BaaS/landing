import React from 'react'
import { EnrichIllustartion } from '../../svg/EnrichIllustartion'
import { Button } from '../atoms/Button'
import { SampleItem } from './components/SampleItem'

export const WorkflowEnrich = () => {
    return (
        <div
            className="relative snap-start gap-[48px] pt-[100px] lg:pt-[100px]  2xl:max-h-screen lg:min-h-screen flex justify-center flex-col"
            id="WorkflowEnrichment"
        >
            <div className="max-w-screen-xl w-full mx-auto px-8 lg:px-16 flex flex-col gap-8">
                <div className="flex flex-col w-full  ">
                    <div className="font-sansCondensed font-bold text-2xl lg:text-5xl  leading-none">
                        Workflow enrichement
                    </div>
                    <div className="font-sansCondensed font-black text-3xl lg:text-6xl leading-none">
                        POWERFUL, Large Scale business logic for voice
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-[16px] w-full justify-between items-center ">
                    <div className="lg:w-2/5 flex flex-col gap-[48px]">
                        <div className="w-full flex flex-col gap-[16px]">
                            <SampleItem
                                title="CRMs: SalesForce or Hubspot"
                                description="Stream formatted conversation outputs to a CRM to power your custom business logic."
                            />
                            <SampleItem
                                title="Data Warehouses"
                                description="Import Data & Meta Data. Export transcripts, AI scoring data, structured summaries."
                            />
                            <SampleItem
                                title="Custom Business Logic"
                                description="Export conversations to formats that fit in your workflow - such as Notion, OneNote."
                            />
                        </div>
                        <div className="w-full justify-around grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <Button
                                name="from $300/month"
                                color="green"
                                buttonClass="  w-full min-w-full f"
                                onClick={() =>
                                    (window.location.href = '/talk-to-us')
                                }
                            />
                        </div>
                    </div>
                    <div className="scale-50 md:scale-75 lg:scale-100">
                        <EnrichIllustartion />
                    </div>
                </div>
            </div>
            {/* <div className="hidden 2xl:block absolute bottom-0 left-0 text-7xl leading-none  font-black font-sansCondensed uppercase text-outline w-full whitespace-nowrap overflow-hidden">
                scrap and act on any conversation scrap and act on any
                conversation scrap and act on any conversation
            </div> */}
        </div>
    )
}
