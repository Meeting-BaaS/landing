import React from 'react'
import { Link } from 'gatsby'
import { BaasIllustrationBuble } from '../svg/BaasIllustrationBuble'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { Button } from '../components/atoms/Button'
import { CodeComponentButton } from '../components/atoms/CodeComponent'

const COOKIE_DOMAIN = typeof window !== 'undefined' ? window.location.hostname.replace(/^www\./, '') : 'yourdomain.com'

const chatUrl = `https://chat.${COOKIE_DOMAIN}`
const analyticsUrl = `https://analytics.${COOKIE_DOMAIN}`
const logsUrl = `https://logs.${COOKIE_DOMAIN}`

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-neutral-900">
            <Navbar />
            <main className="flex flex-1 flex-col items-center justify-center text-center px-4 py-12">
                <div className="max-w-md w-full flex flex-col items-center gap-6 relative" style={{ minHeight: 472 }}>
                    <div className="w-full flex flex-col items-center justify-center relative" style={{ height: 472 }}>
                        <div
                            className="absolute left-0 w-full flex flex-col items-center z-10"
                            style={{ top: '30%' }}
                        >
                            <h1 className="text-5xl font-bold text-[#78FFF0]">Ooops 404</h1>
                            <p className="text-lg text-neutral-200 mt-2">Looks like you found a page that doesn't exist.<br />Let's get you back to something fishy!</p>
                        </div>
                        <BaasIllustrationBuble hideRectangle />
                    </div>
                    <div className="flex flex-col gap-3 w-full mt-2 z-20">
                        <Button name="Return to Landing Page" color="green" onClick={() => (window.location.href = '/')} />
                        <Button name="Go to Chat App" color="green" onClick={() => window.open(chatUrl, '_blank')} />
                        <Button name="Go to Analytics App" color="green" onClick={() => window.open(analyticsUrl, '_blank')} />
                        <Button name="Go to Logs App" color="green" onClick={() => window.open(logsUrl, '_blank')} />
                        <Button name="Pricing and Billing" color="green" onClick={() => window.open('https://pricing.meetingbaas.com', '_blank')} />
                    </div>
                    <div className="w-full mt-8">
                        {/* Fun code snippet as an easter egg */}
                        <CodeComponentButton choices={['PROMPT_EXAMPLE_4']} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default NotFoundPage 