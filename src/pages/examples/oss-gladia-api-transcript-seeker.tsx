import React from 'react'
import { Button } from '../../components/atoms/Button'
import { HyperLink } from '../../components/atoms/Hyperlink'
import { VerticalCodeExampleHolder } from '../../components/Examples/verticalCodeExampleHolder'
import Footer from '../../components/Layout/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { SEO } from '../../components/seo'
import { cloneOnGithub } from '../../utils/router'

const GladiaOverviewBlock = () => {
    return (
        <div>
            <HyperLink
                link="https://github.com/Meeting-Baas/transcript-seeker"
                textContent="Transcript Seeker"
            />{' '}
            integrates with{' '}
            <HyperLink
                link="https://gladia.io"
                textContent="Gladia's transcription and summarization"
            />{' '}
            API, offering users a free, open-source interface to leverage
            Gladia's advanced speech-to-text capabilities.
            <br></br>
            <br></br>
            With Transcript Seeker, you can upload audio or video files and use
            Gladia's API to generate accurate transcriptions. The interface
            allows you to:
            <ul className="list-disc list-inside mt-2">
                <li>Visualize transcripts synced with your media</li>
                <li>Navigate through content by clicking on specific words</li>
                <li>
                    Utilize Gladia's speaker diarization for multi-speaker
                    content
                </li>
                <li>
                    Access additional features from the API like{' '}
                    <HyperLink
                        link="https://docs.gladia.io/chapters/audio-intelligence/pages/summarization"
                        textContent="summarization"
                    />{' '}
                    and named entity recognition, and update the interface with
                    those options.
                </li>
            </ul>
            <br></br>
            As Transcript Seeker is open-source, you can customize and extend
            those functionalities and integrations from the Gladia transcription
            API.
        </div>
    )
}

const GladiaImplementationBlock = () => {
    return (
        <div>
            The files below implement the Gladia API integration within
            Transcript Seeker, handling the transcription process and additional
            features:
        </div>
    )
}

const GladiaImplementationFeaturesBlock = () => {
    return (
        <div>
            Key functionalities include:
            <ul className="list-disc list-inside mt-2">
                <li>File upload to Gladia's servers</li>
                <li>Initiating transcription with customizable options</li>
                <li>Polling for transcription results</li>
                <li>Processing and grouping utterances by speaker</li>
                <li>
                    Handling additional features like summarization and named
                    entity recognition
                </li>
            </ul>
            <br></br>
            The implementation allows for easy configuration of Gladia API
            options, including:
            <ul className="list-disc list-inside mt-2">
                <li>Speaker diarization</li>
                <li>Summarization</li>
                <li>Named entity recognition</li>
                <li>Sentiment analysis</li>
                <li>Chapterization</li>
            </ul>
            <br></br>
            This modular approach enables developers to extend or modify the
            Gladia API integration as needed.
        </div>
    )
}
const LaunchScriptBlock = () => {
    return (
        <div>
            To launch Transcript Seeker and use the Gladia API integration:
            <br></br>
            <br></br>
            <ol className="list-decimal list-inside mt-2">
                <li>
                    Copy the script below, save it as run.sh and make it
                    executable:
                </li>
                <pre className="bg-gray-100 p-2 mt-2 rounded-md">
                    {`chmod +x run.sh
./run.sh`}
                </pre>
                <li className="mt-2">
                    Once the development server is running, open the application
                    in your browser.
                </li>
                <li>
                    Go to the "Settings" section and input your Gladia API key.
                </li>
                <li>
                    When uploading a file, select "Gladia" as the transcription
                    service.
                </li>
            </ol>
            <br></br>
            Make sure you have Git, Node.js, and Yarn installed before running
            the script.
        </div>
    )
}

const TranscriptPlayerGladia = () => {
    return (
        <main>
            <SEO
                title="Open-Source Transcript Player using the with Gladia API | Meeting Baas 🐟"
                description="Transcript-seeker: Free, open-source React-based video player integrating Gladia's transcription API. Synchronized transcripts, AI capabilities, and customizable interface by Meeting Baas."
                imagePath="transcript-seeker-gladia"
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
                        ['code', 0],
                        ['images', 2],
                        ['buttons', 0],
                        ['contents', 2],
                        ['code', 1],
                        ['images', 3],
                    ]}
                    contents={[
                        <GladiaOverviewBlock key="gladia-overview" />,
                        <GladiaImplementationBlock key="gladia-implementation" />,
                        <LaunchScriptBlock key="launch-script" />,
                    ]}
                    title={'Transcription interface using the Gladia API'}
                    subtitle={
                        'Transcription Playground leveraging the Gladia API, with an MIT License'
                    }
                    images={[
                        {
                            src: 'transcript-seeker-gladia',
                            alt: 'open source transcript seeker gladia',
                        },
                        {
                            src: 'transcript-seeker-interface',
                            alt: 'open source transcript seeker',
                        },
                        {
                            src: 'transcript-seeker-interface-gladia-api',
                            alt: 'transcript seeker interface gladia api',
                        },
                        {
                            src: 'previewFeatures',
                            alt: 'preview features',
                        },
                    ]}
                    codeExamples={[
                        {
                            code: ['GLADIA_OPTIONS', 'GLADIA_INDEX'],
                            externalLink:
                                'https://github.com/Meeting-Baas/transcript-seeker/',
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
export default TranscriptPlayerGladia
