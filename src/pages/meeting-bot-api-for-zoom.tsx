import React from 'react'
import { FeaturesSection } from '../components/Home/FeaturesSection'
import { LastSection } from '../components/Home/LastSection'
import { WelcomeSection } from '../components/Home/WelcomeSection'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'

const Home = () => {
    return (
        <main className="snap-mandatory">
            <SEO
                title="Meeting Baas 🐟 | Run your own meeting bots with transcription. In 2 minutes"
                description="Deploy Meeting Bots with transcription. At scale using one API call."
            />
            <div className=" overflow-y-scroll snap-mandatory snap-y h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <WelcomeSection
                    title1="Meeting Bot API" // Updated title1
                    title2="for Zoom" // Updated title2
                    title3="" // Updated title3
                    // title3="Meeting BaaS" // Updated title3
                    subtitle1="Get the transcription, recording and meta-data" // Updated subtitle1
                    subtitle2="from Zoom, and at scale." // Updated subtitle2
                    buttonName="Get API Access" // Updated buttonName
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
export default Home
