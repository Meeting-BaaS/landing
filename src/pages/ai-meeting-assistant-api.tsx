import React from 'react'
import { FeaturesSection } from '../components/Home/FeaturesSection'
import { LastSection } from '../components/Home/LastSection'
import { WelcomeSection } from '../components/Home/WelcomeSection'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'

const AiMeetingAssistantApi = () => {
    return (
        <main className="snap-mandatory">
            <SEO
                title="Meeting Bots as a Service 🐟 | AI Meeting Assistant API"
                description="Deploy Meeting Bot Agents for transcription, interaction, and analysis. One API for Zoom, Google Meet, and Microsoft Teams."
            />
            <div className="overflow-y-scroll snap-mandatory snap-y h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <WelcomeSection
                    title1="Meeting Assistant"
                    title2="API"
                    title3="for Zoom, Meet, and Teams"
                    subtitle1="Meeting bots as a service: attend and interact."
                    subtitle2="Build LLM-connected meeting agents with one API"
                    buttonName="Start Building Now"
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

export default AiMeetingAssistantApi
