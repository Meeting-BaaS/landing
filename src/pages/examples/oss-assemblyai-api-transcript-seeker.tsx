import React from 'react'
import { Button } from '../../components/atoms/Button'
import { HyperLink } from '../../components/atoms/Hyperlink'
import { VerticalCodeExampleHolder } from '../../components/Examples/verticalCodeExampleHolder'
import Footer from '../../components/Layout/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { SEO } from '../../components/seo'
import { cloneOnGithub } from '../../utils/router'

const AssemblyAIOverviewBlock = () => {
    return (
        <div>
            <HyperLink
                link="https://github.com/Meeting-Baas/transcript-seeker"
                textContent="Transcript Seeker"
            />{' '}
            integrates with{' '}
            <HyperLink
                link="https://assemblyai.com"
                textContent="AssemblyAI's transcription API"
            />
            , providing an open-source interface for AssemblyAI's speech-to-text
            capabilities.
            <br></br>
            <br></br>
            With this integration, you can:
            <ul className="list-disc list-inside mt-2">
                <li>
                    Upload audio or video files for transcription using
                    AssemblyAI's API
                </li>
                <li>View transcripts synchronized with your media</li>
                <li>
                    Navigate content by selecting specific words in the
                    transcript
                </li>
                <li>
                    Use AssemblyAI's speaker diarization for multi-speaker
                    content
                </li>
                <li>
                    Access additional API features such as{' '}
                    <HyperLink
                        link="https://www.assemblyai.com/docs/models/summarization"
                        textContent="summarization"
                    />
                    , named entity recognition, and sentiment analysis
                </li>
            </ul>
            <br></br>
            As an open-source project, Transcript Seeker allows for
            customization and extension of AssemblyAI API integrations.
        </div>
    )
}

const AssemblyAIImplementationBlock = () => {
    return (
        <div>
            The AssemblyAI API integration in Transcript Seeker includes:
            <ul className="list-disc list-inside mt-2">
                <li>File upload to AssemblyAI's servers</li>
                <li>Transcription initiation with configurable options</li>
                <li>Result polling and retrieval</li>
                <li>Processing and organizing speaker utterances</li>
                <li>
                    Handling of additional features like summarization and
                    entity detection
                </li>
            </ul>
            <br></br>
            AssemblyAI API options available in the implementation:
            <ul className="list-disc list-inside mt-2">
                <li>Speaker labels (diarization)</li>
                <li>Summarization (with customizable model and type)</li>
                <li>Entity detection</li>
                <li>Sentiment analysis</li>
                <li>Auto chapters</li>
            </ul>
            <br></br>
            This implementation allows developers to modify or extend the
            AssemblyAI API integration as needed.
        </div>
    )
}

const LaunchScriptBlockAssemblyAi = () => {
    return (
        <div>
            To use Transcript Seeker with the AssemblyAI API integration:
            <br></br>
            <br></br>
            <ol className="list-decimal list-inside mt-2">
                <li>Save the script below as run.sh and make it executable:</li>
                <pre className="bg-gray-100 p-2 mt-2 rounded-md">
                    {`chmod +x run.sh
./run.sh`}
                </pre>
                <li className="mt-2">
                    Open the application in your browser once the development
                    server starts.
                </li>
                <li>
                    Navigate to "Settings" and enter your AssemblyAI API key.
                </li>
                <li>
                    Choose "AssemblyAI" as the transcription service when
                    uploading a file.
                </li>
            </ol>
            <br></br>
            Ensure Git, Node.js, and Yarn are installed on your system before
            running the script.
        </div>
    )
}

const TranscriptPlayerAssemblyAi = () => {
    return (
        <main>
            <SEO
                title="Open-Source Transcript Player with the AssemblyAI API | Meeting Baas 🐟"
                description="Transcript-seeker: Free, open-source React-based video player integrating AssemblyAI's powerful transcription API. Synchronized transcripts, AI capabilities, and customizable interface by Meeting Baas."
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
                        ['code', 0],
                        ['images', 2],
                        ['buttons', 0],
                        ['contents', 2],
                        ['code', 1],
                        ['images', 3],
                    ]}
                    contents={[
                        <AssemblyAIOverviewBlock key="assemblyai-overview" />,
                        <AssemblyAIImplementationBlock key="assemblyai-implementation" />,
                        <LaunchScriptBlockAssemblyAi key="launch-script" />,
                    ]}
                    title={'Transcription interface using the AssemblyAI API'}
                    subtitle={
                        'Transcription Playground leveraging the AssemblyAI API, with an MIT License'
                    }
                    images={[
                        {
                            src: 'transcript-seeker-assemblyai',
                            alt: 'open source transcript seeker assemblyai',
                        },
                        {
                            src: 'transcript-seeker-interface',
                            alt: 'open source transcript seeker',
                        },
                        {
                            src: 'transcript-seeker-interface-assemblyai-api',
                            alt: 'transcript seeker interface assemblyai api',
                        },
                        {
                            src: 'previewFeatures',
                            alt: 'preview features',
                        },
                    ]}
                    codeExamples={[
                        {
                            code: ['ASSEMBLYAI_OPTIONS', 'ASSEMBLYAI_INDEX'],
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
export default TranscriptPlayerAssemblyAi
