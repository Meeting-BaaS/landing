import React, { useEffect, useState } from 'react'
import { HyperLink } from '../components/atoms/Hyperlink'
import {
    ColumnContent,
    TwoColumnLayout,
} from '../components/Examples/TwoColumnLayout'
import Footer from '../components/Layout/Footer'
import { ManifestoFooter } from '../components/Layout/ManifestoFooter'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'
import { SampleItem } from '../components/UseCases/components/SampleItem'

const AudioPlayer = () => {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: '<iframe frameborder="0" class="h-[200px] scrolling="no" src="https://playlist.megaphone.fm/?e=VMP9682534565" width="100%"></iframe>',
            }}
        />
    )
}

const GuardianArticle = () => {
    return (
        <>
            <div className="flex flex-wrap text-right justify-end text-xs xl:text-base">
                "Today for this session, ideally, I do not need to join. I can
                send a digital version of myself [...] in order to listen to the
                call but also to interact with a participant in a meaningful way
                [...]"
                <br></br>
            </div>
        </>
    )
}

const ManifestoContent: React.FC<{ path: string }> = ({ path }) => {
    const manifestoFooter = ManifestoFooter({ path })
    const leftColumnContent: ColumnContent[] = [
        { type: 'contents', index: 3 },
        { type: 'subtitle', index: 0 },
        { type: 'contents', index: 0 },
    ]

    const rightColumnContent: ColumnContent[] = [
        { type: 'audioIframe', index: 0 },
        { type: 'contents', index: 2 },
    ]

    return (
        <TwoColumnLayout
            roundedButtons={manifestoFooter}
            leftColumn={leftColumnContent}
            rightColumn={rightColumnContent}
            pageTitle="AI Avatars in 5-6 Years? (Eric Yuan, Zoom CEO)"
            pageSubtitle="For us - it's a matter of weeks"
            audioPlayer={[<AudioPlayer />]}
            children={<></>}
            contents={[
                <>
                    <div className="mb-7">
                        <SampleItem
                            title="We can beat them to it"
                            description=""
                            children={
                                <>
                                    Our meeting bot has the unique ability to
                                    speak in meetings. By combining it with{' '}
                                    {[
                                        <HyperLink
                                            link="https://github.com/fixie-ai/ultravox?tab=readme-ov-file"
                                            textContent="Speech-to-Speech APIs"
                                            newWindow={true}
                                        />,
                                        ' and ',
                                        <HyperLink
                                            link="https://github.com/hacksider/Deep-Live-Cam"
                                            textContent="Image to Video APIs"
                                            newWindow={true}
                                        />,
                                    ]}{' '}
                                    we can hit a ping as low as 500
                                    milliseconds, while human vocal latency
                                    typically ranges from 200 to 600
                                    milliseconds.
                                    <br></br>
                                    We’re on track to deliver realistic speaking
                                    meeting bots within the next month, on Zoom,
                                    Google Meet and Microsoft Teams.
                                </>
                            }
                        />
                    </div>
                </>,
                <>
                    <div className="mb-7">
                        <SampleItem
                            title="AI Agents with access to personal & company knowledge are already on the market"
                            description=""
                            children={
                                <>
                                    Companies such as{' '}
                                    {[
                                        <HyperLink
                                            link="https://twin.so/"
                                            textContent="Twin.so"
                                            newWindow={true}
                                        />,
                                        ' and ',
                                        <HyperLink
                                            link="https://www.lindy.ai/"
                                            textContent="Lindy AI"
                                            newWindow={true}
                                        />,
                                        ' are ',
                                    ]}{' '}
                                    already proposing digital clones of human
                                    office-workers. And{' '}
                                    <HyperLink
                                        link="https://github.com/e2b-dev/awesome-ai-agents?tab=readme-ov-file#open-source-projects"
                                        textContent="open-source"
                                        newWindow={true}
                                    />{' '}
                                    in the field is going through a cambrian
                                    explosion.
                                </>
                            }
                        />
                    </div>
                </>,
                <>
                    <GuardianArticle />
                </>,
                <>
                    <div className="mb-7">
                        <SampleItem
                            title="Digital twins in your meetings"
                            description=""
                            children={
                                <>
                                    Eric Yuan is steering Zoom with a focus on{' '}
                                    <HyperLink
                                        link="https://www.theverge.com/2024/6/3/24168733/zoom-ceo-ai-clones-digital-twins-videoconferencing-decoder-interview"
                                        textContent='AI-powered "digital twins"'
                                        newWindow={true}
                                    />
                                    {', '}
                                    recruiting AI engineers and restructuring
                                    the company (i.e., firing some departments).
                                    The goal is to develop avatars that can
                                    attend meetings for users within 5-6 years.
                                </>
                            }
                        />
                    </div>
                </>,
            ]}
            images={[
                {
                    src: 'ZoomCeo',
                    alt: 'Zoom CEO',
                },
            ]}
            codeExamples={[]}
            buttonToShow={[]}
            title={''}
            subtitle={''}
        />
    )
}

const Manifesto = () => {
    const [path, setPath] = useState('')

    useEffect(() => {
        setPath(window.location.pathname)
    }, [])

    return (
        <main className="snap-mandatory">
            <div className="overflow-y-scroll  h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <ManifestoContent path={path} />
                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default Manifesto

export const Head = () => {
    return (
        <SEO
            title="Meeting Baas 🐟 | Towards AI avatars in our meetings"
            description="We'll be having even more meetings - if we count our AI clones attending them."
            imagePath="previewPitchDeckMeetingBaas"
        />
    )
}
