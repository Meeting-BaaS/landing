import React from 'react'
import { Button } from '../../components/atoms/Button'
import { HyperLink } from '../../components/atoms/Hyperlink'
import { VerticalCodeExampleHolder } from '../../components/Examples/verticalCodeExampleHolder'
import Footer from '../../components/Layout/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { SEO } from '../../components/seo'
import { cloneOnGithub } from '../../utils/router'

const OverviewBlock = () => {
    return (
        <div>
            <HyperLink
                link="https://github.com/Meeting-Baas/transcript-seeker"
                textContent="Transcript Seeker"
            />{' '}
            is an open-source transcription playground powered by transcription
            APIs and the meeting bot API of Meeting Baas 🐟.
            <br></br>
            <br></br>
            With Transcript Seeker, you can easily upload audio or video files,
            record a video-meeting and transcribe your content. The interface
            then allows you to:
            <ul className="list-disc list-inside mt-2">
                <li>Visualize transcripts synced with your media</li>
                <li>Navigate through content by clicking on specific words</li>
                <li>
                    Use speaker diarization from transcription APIs or the
                    Meeting Baas 🐟 bot API
                </li>
                <li>
                    Access additional features like summarization and named
                    entity recognition
                </li>
            </ul>
            <br></br>
            As Transcript Seeker is open-source, you can customize and extend
            those functionalities. Feel free to check out the to-do list on the
            GitHub repository, to contribute or see what's coming next.
        </div>
    )
}

const KeyFeaturesBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Features</h2>

            <ul className="list-disc list-inside mt-2">
                <li>
                    <strong>Synchronized Playback:</strong> Click on any word in
                    the transcript to jump to that point in the recording.
                </li>
                <li>
                    <strong>AI Interaction:</strong> Chat with transcripts using
                    an OpenAI integration and Large Language Models (LLMs).
                </li>
                <li>
                    <strong>Annotation:</strong> Add notes to recordings
                    manually or automatically with AI summaries provided by the
                    APIs you're using.
                </li>

                <li>
                    <strong>File Transcription:</strong> Upload video/audio
                    recordings and transcribe using the transcription API of
                    your choice. Compatible APIs include:{' '}
                    <HyperLink
                        link="https://github.com/openai/whisper"
                        textContent="Whisper"
                    />
                    {', '}
                    <HyperLink link="https://gladia.io" textContent="Gladia" />
                    {', '}
                    <HyperLink
                        link="https://deepgram.com/"
                        textContent="Deepgram"
                    />
                    {' and '}
                    <HyperLink
                        link="https://assemblyai.com/"
                        textContent="AssemblyAI"
                    />
                    {'.'}
                </li>
                <li>
                    <strong>Meeting Recording:</strong> Generate recordings with
                    metadata using the Meeting Bot as a Service (Baas) 🐟 API
                    for video-meetings on:{' '}
                    <HyperLink link="https://zoom.us/" textContent="Zoom" />,{' '}
                    <HyperLink
                        link="https://meet.google.com/"
                        textContent="Google Meet"
                    />
                    ,{' and '}
                    <HyperLink
                        link="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software"
                        textContent="Microsoft Teams"
                    />
                    {'.'}
                </li>
                <li>
                    <strong>File Management:</strong> Upload, load and store
                    local or distant file recordings.
                </li>
            </ul>

            <br></br>
            <h2 className="text-xl font-bold mb-2">Deployment Options:</h2>

            <ul className="list-disc list-inside">
                <li>
                    <strong>Browser-based setup:</strong>
                    <ul className="list-circle list-inside ml-8">
                        <li>Runs directly in your browser</li>
                        <li>
                            Uses{' '}
                            <HyperLink
                                link="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API"
                                textContent="IndexedDB"
                            />{' '}
                            for local storage
                        </li>
                        <li>Provides an easy and quick setup</li>
                        <li>Offers offline functionality in standalone mode</li>
                    </ul>
                </li>
                <br></br>
                <li>
                    <strong>Server-based setup:</strong>
                    <ul className="list-circle list-inside ml-8">
                        <li>Option to run with an Express-JS backend</li>
                        <li>Easy to deploy and scale</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

const TechStackBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Tech Stack:</h2>
            <ul className="list-disc list-inside mt-2">
                <li>
                    Frontend: React, Vite, TypeScript, TailwindCSS, IndexedDB
                </li>
                <li>Media Playback: Vidstack</li>
                <li>Optional Backend: Express-JS</li>
            </ul>
        </div>
    )
}

const LaunchScriptBlock = () => {
    return (
        <div>
            To launch Transcript Seeker, first make sure you have Git, Node.js,
            and Yarn installed.
            <br></br>
            Then, copy the script below, save it as run.sh and make it
            executable:
        </div>
    )
}

const TranscriptPlayer = () => {
    return (
        <main>
            <SEO
                title="Open-Source Transcript Player with AI | Meeting Baas 🐟"
                description="Transcript-seeker: Open-source React-based video player with synchronized transcripts and AI capabilities. Compatible with multiple transcription APIs and video meeting platforms."
                imagePath="transcript-seeker"
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
                        ['images', 2],
                        ['buttons', 0],
                        ['contents', 3],
                        ['code', 0],
                        ['code', 1],
                        ['images', 3],
                    ]}
                    contents={[
                        <OverviewBlock key="overview" />,
                        <KeyFeaturesBlock key="key-features" />,
                        <TechStackBlock key="tech-stack" />,
                        <LaunchScriptBlock key="launch-script" />,
                    ]}
                    title={'Transcript Seeker'}
                    subtitle={
                        'Open-source Transcription Playground with an MIT License'
                    }
                    images={[
                        {
                            src: 'transcript-seeker',
                            alt: 'open source transcript seeker',
                        },
                        {
                            src: 'transcript-seeker-interface',
                            alt: 'open source transcript seeker interface',
                        },
                        {
                            src: 'transcript-seeker-dashboard',
                            alt: 'open source transcript seeker dashboard',
                        },
                        {
                            src: 'previewFeatures',
                            alt: 'preview features',
                        },
                    ]}
                    codeExamples={[
                        {
                            code: ['LAUNCH_RUN.SH'],
                        },
                        {
                            code: ['RUN.SH'],
                            externalLink:
                                'https://github.com/Meeting-Baas/transcript-seeker/',
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
                                window.open('/transcript-seeker/', '_blank')
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
