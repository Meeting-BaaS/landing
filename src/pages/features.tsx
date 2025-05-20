import React from 'react'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { PricingDetails } from '../components/Pricing/PricingDetails'
import { SEO } from '../components/seo'

const features = () => {
    return (
        <main className="snap-mandatory bg-neutral-50">
            <SEO
                title="Meeting Baas 🐟  | Features | Run your own meeting bots with AI in 2 minutes."
                description="Start at $0.69/hour. Compatible with Zoom, Teams, Google Meet. Features include transcription, summarization, custom bot settings, recording files, meeting metadata, calendar integration, 99.9% SLA, and more."
                imagePath="prewiewFeatures"
            />
            <div className="overflow-y-scroll h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden">
                <Navbar />
                <PricingDetails />
                <div className="mt-[40px] min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default features
