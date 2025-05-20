import { navigate, PageProps } from 'gatsby'
import React from 'react'
import { Button } from '../components/atoms/Button'
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
import { LiveMeetingInput } from '../svg/LiveMeetingInput'

const ReplaceAnyMeetingStakeholderContent: React.FC<{ path: string }> = ({
    path,
}) => {
    const leftColumnContent: ColumnContent[] = [
        { type: 'subtitle', index: 0 },
        { type: 'contents', index: 0 },
        { type: 'contents', index: 1 },
    ]

    const rightColumnContent: ColumnContent[] = [{ type: 'images', index: 0 }]

    return (
        <TwoColumnLayout
            leftColumn={leftColumnContent}
            rightColumn={rightColumnContent}
            pageTitle="From passive listeners"
            pageSubtitle="to Active Participants"
            contents={[
                <>
                    <div className="mb-7">
                        <SampleItem
                            title="Hundreds of use-cases"
                            description=""
                            children={
                                <>
                                    Have you tried speaking with GPT-4 with
                                    voice-mode activated and a simple prompt?
                                    <br></br>
                                    If so, you'll understand the number of
                                    use-cases possible: teacher, salesperson, HR
                                    recruiter, project management,
                                    knowledge-base, interpreter, ...
                                </>
                            }
                        />
                    </div>
                </>,
                <>
                    <div className="mb-7">
                        <SampleItem
                            title="It's not a gimmick"
                            description="AI agents with access to personal and company knowledge are already on the market."
                            children={
                                <>
                                    Companies such as{' '}
                                    {[
                                        <HyperLink
                                            link="https://twin.so/"
                                            textContent="Twin.so"
                                        />,
                                        ' and ',
                                        <HyperLink
                                            link="https://www.lindy.ai/"
                                            textContent="Lindy AI"
                                        />,
                                        ' are offering digital clones of human office workers that can complete tasks. ',
                                    ]}
                                    These tasks can, of course, include
                                    conversational ones.
                                    {/* Additionally,{' '}
                                    <HyperLink
                                        link="https://github.com/e2b-dev/awesome-ai-agents?tab=readme-ov-file#open-source-projects"
                                        textContent="open-source in the field"
                                    />{' '}
                                    is experiencing a Cambrian explosion. */}
                                </>
                            }
                        />
                    </div>
                </>,
                <>
                    <div className="mb-7">
                        <SampleItem
                            title="Hundreds of use-cases"
                            description="From teacher, to salesperson, to HR tool, to project management tool, ..."
                            // additionalItems={[
                            //     {
                            //         label: 'The Executive',
                            //         content:
                            //             'Makes strategic decisions based on company data and market trends.',
                            //     },
                            //     {
                            //         label: 'The Salesperson',
                            //         content:
                            //             'Recalls client history and product details to close deals.',
                            //     },
                            //     {
                            //         label: 'The Teacher',
                            //         content:
                            //             'Answers student questions using a vast knowledge base.',
                            //     },
                            // ]}
                        />
                    </div>
                </>,
            ]}
            images={[
                {
                    src: 'AIBotMeeting',
                    alt: 'AI Bot participating in a video call',
                    component: <LiveMeetingInput />,
                },
            ]}
            buttonToShow={[
                <Button
                    key="see-in-action"
                    name="See It In Action"
                    color="black"
                    onClick={() => navigate('/demo/')}
                />,
            ]}
            roundedButtons={ManifestoFooter({ path })}
        />
    )
}

const ReplaceAnyMeetingStakeholder: React.FC<PageProps> = ({ path }) => {
    return (
        <main className="snap-mandatory">
            <div className="overflow-y-scroll h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <ReplaceAnyMeetingStakeholderContent path={path} />
                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default ReplaceAnyMeetingStakeholder

export const Head = () => {
    return (
        <SEO
            title="Meeting Baas 🐟 | Interactive Meeting Bots"
            description="Interactive, speaking meeting bots are coming soon to a meeting you've been invited too."
            imagePath="previewSpeakingMeetingBots"
        />
    )
}
