import React from 'react'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { PricingDetails } from '../components/Pricing/PricingDetails'
import { PricingWelcomSection } from '../components/Pricing/PricingWelcomSection'
import { SEO } from '../components/seo'

const pricing = () => {
    // LEGACY KEEPING THE ROUTE LIKE THIS BECAUSE IM LAZY LAZARE
    return (
        <main className="snap-mandatory bg-neutral-50">
            <SEO
                title="Meeting Baas 🐟  | Pricing | Run your own meeting bots with AI in 2 minutes"
                description="Sign up, get 4 hours free then pay $0.69 / hour. Pay less as you scale."
                imagePath="previewPricing"
            />
            <div className="overflow-y-scroll h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden">
                <Navbar />
                <PricingWelcomSection />
                <PricingDetails />
                <div className="mt-[40px] min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default pricing
