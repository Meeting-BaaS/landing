import React from 'react'
import { Button } from '../components/atoms/Button'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'

const ApiCard = ({
    title,
    description,
    link,
    imageUrl,
}: {
    title: string
    description: string
    link: string
    imageUrl: string
}) => {
    return (
        <div className="bg-neutral-800 rounded-lg overflow-hidden flex flex-col">
            <div className="h-48 bg-gray-700 flex items-center justify-center overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full object-cover"
                />
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-primary-500 mb-2">
                    {title}
                </h3>
                <p className="text-primary-500 opacity-80 mb-4 flex-1">
                    {description}
                </p>
                <Button
                    color="green"
                    name="View Documentation"
                    buttonClass="w-full"
                    onClick={() => (window.location.href = link)}
                />
            </div>
        </div>
    )
}

const APIsPage = () => {
    const apis = [
        {
            title: 'Meeting BaaS API',
            description:
                'Core API for programmatic access to meetings across Google Meet, Microsoft Teams, and Zoom.',
            link: '/examples/api-docs',
            imageUrl: '/static/meeting-baas.jpg',
        },
        {
            title: 'Speaking Bots',
            description:
                'Deploy AI-powered speaking agents in your meetings with customizable personas.',
            link: '/examples/speaking-bots',
            imageUrl: '/static/speaking-bots.jpg',
        },
        {
            title: 'Transcript Seeker',
            description:
                'Open-source playground for exploring and analyzing meeting transcripts.',
            link: '/examples/oss-transcript-seeker',
            imageUrl: '/static/transcript-seeker.jpg',
        },
        {
            title: 'Calendars API',
            description:
                'Connect calendar systems with meeting intelligence for automated workflows.',
            link: '/examples/calendars-api',
            imageUrl: '/static/calendars-api.jpg',
        },
        {
            title: 'Webhooks API',
            description:
                'Receive real-time notifications for meeting events and status changes.',
            link: 'https://docs.meetingbaas.com/llms/webhooks',
            imageUrl: '/static/webhooks-api.jpg',
        },
        {
            title: 'Users API',
            description:
                'Manage user accounts, authentication, and permissions.',
            link: 'https://docs.meetingbaas.com/llms/users',
            imageUrl: '/static/users-api.jpg',
        },
    ]

    return (
        <main>
            <SEO
                title="Meeting BaaS APIs & Documentation | Meeting Intelligence Infrastructure"
                description="Explore the Meeting BaaS API ecosystem: core meeting API, speaking bots, transcript tools, and calendar integrations for developers."
            />
            <div className="min-h-screen bg-neutral-50">
                <Navbar />

                <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Meeting BaaS API Documentation
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive APIs for building meeting intelligence
                            applications. From core meeting access to AI-powered
                            meeting agents.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {apis.map((api) => (
                            <ApiCard
                                key={api.title}
                                title={api.title}
                                description={api.description}
                                link={api.link}
                                imageUrl={api.imageUrl}
                            />
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            Documentation Resources
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                            Explore our comprehensive documentation and
                            developer resources.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button
                                color="black"
                                name="API Reference"
                                buttonClass="w-full sm:w-auto"
                                onClick={() =>
                                    window.open(
                                        'https://docs.meetingbaas.com/llms/api',
                                        '_blank',
                                    )
                                }
                            />
                            <Button
                                color="green"
                                name="Getting Started Guide"
                                buttonClass="w-full sm:w-auto"
                                onClick={() =>
                                    window.open(
                                        'https://docs.meetingbaas.com/llms',
                                        '_blank',
                                    )
                                }
                            />
                            <Button
                                color="black"
                                name="GitHub Examples"
                                buttonClass="w-full sm:w-auto"
                                onClick={() =>
                                    window.open(
                                        'https://github.com/Meeting-Baas',
                                        '_blank',
                                    )
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className="bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default APIsPage
