import React, { useEffect } from 'react'
import { SEO } from '../components/seo'

const docs = () => {
    useEffect(() => {
        window.location.href = 'https://doc.meetingbaas.com'
    }, [])

    return (
        <main className="snap-mandatory bg-neutral-50">
            <SEO
                title="Meeting Baas 🐟 | Docs | Run your own meeting bots with AI in 2 minutes"
                description="Meeting Baas API documentation. Learn how to send your first meeting bot to a meeting, and handle the data. Explore our comprehensive guides, API references, and examples to integrate AI-powered meeting bots into your workflow."
                imagePath="SocialPreviewApi"
            />
            <div>Redirecting to documentation...</div>
        </main>
    )
}

export default docs
