import React from 'react'
import { Button } from '../../components/atoms/Button'
import { HyperLink } from '../../components/atoms/Hyperlink'
import Footer from '../../components/Layout/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { SEO } from '../../components/seo'

import { VerticalCodeExampleHolder } from '../../components/Examples/verticalCodeExampleHolder'
import { cloneOnGithub } from '../../utils/router'

const OverviewBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Overview</h2>
            This React application provides a simple video player with a
            synchronized transcript display. Key features include:
            <ul className="list-disc list-inside mt-2">
                <li>Video playback with standard controls</li>
                <li>Synchronized transcript display</li>
                <li>Current word highlighting in the transcript</li>
                <li>Video navigation by clicking on transcript words</li>
                <li>Responsive interface with resizable split view</li>
            </ul>
            <br></br>
            Data is loaded from a mock JSON file, which matches the typical
            format of the transcript data returned by a transcription API, in
            this case the{' '}
            <code>
                <HyperLink
                    link="https://doc.meetingbaas.com/api-reference#/bots-meeting_data"
                    textContent="/GET"
                />
            </code>{' '}
            route of Meeting Baas.
            <br></br>
            <br></br>
            The project is under the MIT license, free to use and modify it.
            <br></br>
            <br></br>
            For a full-featured example, including a back-end which stores the
            data, check out the{' '}
            <HyperLink
                link="/examples/oss-transcript-seeker"
                textContent="Transcript Seeker"
            />{' '}
            repository.
        </div>
    )
}

const TechnologiesBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Technologies Used</h2>
            <ul className="list-disc list-inside mt-2">
                <li>React</li>
                <li>TypeScript</li>
                <li>
                    <HyperLink
                        link="https://chakra-ui.com/"
                        textContent="Chakra UI"
                    />{' '}
                    for styling
                </li>
                <li>
                    <HyperLink
                        link="https://videojs.com/"
                        textContent="video.js"
                    />{' '}
                    for video playback
                </li>
            </ul>
        </div>
    )
}

const ComponentsBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Main Components</h2>
            <ul className="list-disc list-inside mt-2">
                <li>
                    <strong>App.tsx:</strong> Manages global state and layout
                </li>
                <li>
                    <strong>VideoPlayer.tsx:</strong> Wrapper for video.js
                </li>
                <li>
                    <strong>Transcript.tsx:</strong> Displays synchronized
                    transcript
                </li>
                <li>
                    <strong>Card.tsx:</strong> Reusable component for content
                    display
                </li>
            </ul>
        </div>
    )
}

const UsageBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Usage</h2>
            <p>
                The application loads a video and its transcript from mock data.
                Users can:
            </p>
            <ul className="list-disc list-inside mt-2">
                <li>Play the video and see synchronized transcript</li>
                <li>Click on words in the transcript to navigate the video</li>
                <li>
                    Resize the split between video and transcript on larger
                    screens
                </li>
            </ul>
        </div>
    )
}

const CustomizationBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Customization</h2>
            <p>
                The data structure in{' '}
                <code className="bg-gray-200 p-1 rounded">fakedata.json</code>{' '}
                aligns with the Meeting Baas API{' '}
                <code>
                    <HyperLink
                        link="https://doc.meetingbaas.com/api-reference#/bots-meeting_data"
                        textContent="/GET route"
                    />
                </code>{' '}
                format. This structure is compatible with various transcription
                API outputs, facilitating integration with different services.
            </p>
            <p className="mt-2">
                The <code className="bg-gray-200 p-1 rounded">Transcript</code>{' '}
                component processes this data, rendering speaker information and
                individual words. It tracks the current playback time,
                highlighting the corresponding word and enabling navigation on
                word click.
            </p>
        </div>
    )
}

const LaunchScriptBlock = () => {
    return (
        <div>
            Here's a simple script that clones the code repo and launches the
            example:
            <br></br>
        </div>
    )
}

const TranscriptPlayer = () => {
    return (
        <main>
            <SEO
                title="Open-Source Transcript Player with AI | Meeting Baas 🐟"
                description="Open-source React-based video player with synchronized transcripts and AI capabilities. Compatible with multiple transcription APIs and video meeting platforms."
                imagePath="transcript-player"
            />
            <div className=" h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50 px-[20px]">
                <Navbar />

                <VerticalCodeExampleHolder
                    order={[
                        ['images', 0],
                        ['title', 0],
                        ['subtitle', 0],
                        ['buttons', 0],
                        ['contents', 0],
                        ['images', 1],
                        ['contents', 1],
                        ['contents', 2],
                        ['code', 0],
                        ['buttons', 0],
                        ['contents', 3],
                        ['code', 1],
                        ['contents', 4],
                        ['contents', 5],
                        ['buttons', 0],
                        ['code', 2],
                        ['images', 2],
                    ]}
                    contents={[
                        <OverviewBlock key="overview" />,
                        <TechnologiesBlock key="technologies" />,
                        <ComponentsBlock key="components" />,
                        <LaunchScriptBlock key="launch-script" />,
                        <UsageBlock key="usage" />,
                        <CustomizationBlock key="customization" />,
                    ]}
                    title={'Open-Source Transcript Player '}
                    subtitle={
                        'React-based video player with a synchronized transcript and editor for notes, or AI summaries.'
                    }
                    images={[
                        {
                            src: 'transcript-player',
                            alt: 'open source transcript player',
                        },
                        {
                            src: 'transcript-player-interface',
                            alt: 'open source transcript player interface',
                        },
                        {
                            src: 'previewFeatures',
                            alt: 'preview features',
                        },
                    ]}
                    codeExamples={[
                        {
                            code: [
                                'TRANSCRIPT_PLAYER_APP.TSX',
                                'TRANSCRIPT_PLAYER_VIDEO.TSX',
                            ],
                            externalLink:
                                'https://github.com/Meeting-Baas/meeting-bot-as-a-service/tree/main/apps/player-interface',
                        },
                        {
                            code: ['RUN_PLAYER.SH'],
                            externalLink:
                                'https://github.com/Meeting-Baas/meeting-bot-as-a-service/',
                        },
                        {
                            code: ['TRANSCRIPT_PLAYER_TYPES.TSX'],
                            externalLink:
                                'https://github.com/Meeting-Baas/meeting-bot-as-a-service/',
                        },
                    ]}
                    buttonToShow={[
                        <Button
                            key="github"
                            color="green"
                            name="Clone on GitHub"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={cloneOnGithub}
                        />,
                        <Button
                            key="live-example"
                            color="black"
                            name="Try Online"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() => {
                                window.open('/transcript-player/', '_blank')
                            }}
                        />,
                    ]}
                />
                <div className="min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}
export default TranscriptPlayer
