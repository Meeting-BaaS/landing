import React from 'react'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'
import { ProductBuildingSection } from '../components/UseCases/ProductBuildingSection'
import { WorkflowEnrich } from '../components/UseCases/WorkflowEnrich'

const UseCases = () => {
    return (
        <main className="snap-mandatory">
            <SEO
                title="Meeting Baas 🐟 |  Use-Cases | Transform Video Meeting Data into Solutions"
                description="View products and workflows using AI meeting bots with transcription. Open our Github to find tools to build yourself, from a simple transcript viewer to a full-blow web-app and server, customized to your needs."
                imagePath="prewiewUseCases"
            />
            <div className="overflow-y-scroll snap-mandatory snap-y h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <ProductBuildingSection />
                <WorkflowEnrich />
                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default UseCases

export const Head = () => {
    return <SEO />
}
