import React from 'react'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'
import { SpeakingMeetingBotsContent } from '../components/UseCases/SpeakingMeetingBots'

const SpeakingMeetingBots = () => {
    return (
        <main className="snap-mandatory">
            <SEO
                title="Meeting Baas 🐟 | Speaking AI Meeting Bots | The Future is Now"
                description="Discover how our AI meeting bots can speak, attend, and interact in video meetings on Google Meet, Zoom, and Teams within 2 months. Transform remote interactions with our cutting-edge technology."
                // imagePath="previewSpeakingBots"
            />
            <div className="overflow-y-scroll snap-mandatory snap-y h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <SpeakingMeetingBotsContent />
                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default SpeakingMeetingBots

export const Head = () => {
    return (
        <SEO
            title="Meeting Baas 🐟 | Speaking AI Meeting Bots | Revolutionizing Remote Interactions"
            description="Experience the future of remote meetings with our speaking AI bots. Attend meetings on your behalf, interact naturally, and transform your virtual collaboration across Google Meet, Zoom, and Teams."
        />
    )
}
