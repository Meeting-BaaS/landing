import React from 'react'
import { FeaturesSection } from '../components/Home/FeaturesSection'
import { LastSection } from '../components/Home/LastSection'
import { WelcomeSection } from '../components/Home/WelcomeSection'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'

const OneApiToRecordTranscribeMeetings = () => {
    return (
        <main className="snap-mandatory">
            <SEO
                title="Multi-Language Meeting Transcription API | MeetingBaas 🐟"
                description="One API to record and transcribe meetings in multiple languages. Supports Zoom, Google Meet, and Microsoft Teams."
            />
            <div className="overflow-y-scroll snap-mandatory snap-y h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <WelcomeSection
                    title1="Multi-Language"
                    title2="Meeting"
                    title3="TRANSCRIPTION API"
                    subtitle1="Record and transcribe meetings in 100+ languages"
                    subtitle2="One API for Zoom, Meet, and Teams."
                    buttonName="Get API Access"
                />
                <FeaturesSection />
                <LastSection />
                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default OneApiToRecordTranscribeMeetings
