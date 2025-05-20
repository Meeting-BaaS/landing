import React from 'react'
import FeatureComparisonTable from '../components/atoms/FeatureComparisonTable'
import { LastSection } from '../components/Home/LastSection'
import { MeetingBaasVsRecallContent } from '../components/Home/MeetingBaasVsRecall'
import { Testimonial } from '../components/Home/Testimonial'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'

const RecallAiVsMeetingBaas = () => {
    return (
        <main>
            <SEO
                title="Recall.ai vs Meeting Baas Feature comparison | Meeting Baas 🐟"
                description="Or why Meeting Baas' free trial, lower pricing, and immediate availability will entice you."
                // imagePath="transcript-seeker"
            />
            <div className=" overflow-y-scroll min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />

                <MeetingBaasVsRecallContent
                    path="meeting-baas-vs-recall"
                    showFooter={false}
                />
                <div className="pb-0 px-[20px]  lg:px-[60px] w-full  items-center flex flex-col justify-center max-w-screen-xl mx-auto lg:justify-between py-4 pb-4">
                    <FeatureComparisonTable />
                </div>
                <Testimonial lightTheme={true} />
                <LastSection />
                <div className="min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}
export default RecallAiVsMeetingBaas
