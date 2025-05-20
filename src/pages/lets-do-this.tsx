import { PageProps } from 'gatsby'
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
import { SpeakingBassZoomGoogleMeet } from '../svg/SpeakingBassOnZoomGoogleMeet'
import { baasDocumentation, registerRedirect } from '../utils/router'

const LetsDoThisContent: React.FC<{ path: string }> = ({ path }) => {
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
            pageTitle="That's a new gold rush"
            pageSubtitle="Let's sell picks and shovels"
            contents={[
                <>
                    <>
                        <div className="mb-7">
                            <SampleItem
                                title="Meeting Bots as a Service: Attend, Interact"
                                description=""
                                children={
                                    <>
                                        <span className="font-bold">
                                            Attend:
                                        </span>{' '}
                                        We already offer and distribute meeting
                                        bots which passively record and
                                        transcribe.
                                        <br></br>
                                        <span className="font-bold">
                                            Interact:
                                        </span>{' '}
                                        Our API will allow anyone to
                                        programmatically send virtual clones
                                        into meetings that can speak.
                                    </>
                                }
                                additionalItems={[]}
                            />
                        </div>
                    </>
                    ,
                    <div className="mb-7">
                        <SampleItem
                            title="Key Advantages"
                            description=""
                            children={
                                <>
                                    <span className="font-bold">
                                        Multi-Platform Support:{' '}
                                    </span>
                                    One single API for Meeting Bots on Google
                                    Meet, Zoom, and Microsoft Teams.
                                    <br></br>
                                    <span className="font-bold">
                                        High Barrier to Entry:{' '}
                                    </span>
                                    Building and maintaining meeting bots is
                                    resource-intensive. Building requires months
                                    of work by experienced developers, and
                                    maintaining the system requires a dedicated
                                    team due to constant platform updates.
                                </>
                            }
                            additionalItems={[]}
                        />
                        ,
                    </div>
                </>,
            ]}
            images={[
                {
                    src: 'ZoomCeo',
                    alt: 'Zoom CEO',
                    component: <SpeakingBassZoomGoogleMeet />,
                },
            ]}
            codeExamples={[]}
            buttonToShow={[]}
            title={''}
            subtitle={''}
            roundedButtons={ManifestoFooter({ path })}
        />
    )
}

export const MeetingBotAPIContent: React.FC<{ path: string }> = ({ path }) => {
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
            pageTitle="One API"
            pageSubtitle="to attend and interact virtually."
            contents={[
                <>
                    <>
                        <div className="mb-7">
                            <SampleItem
                                title="Meeting Bots as a Service: Attend, Interact"
                                description=""
                                children={
                                    <>
                                        <span className="font-bold">
                                            Attend:
                                        </span>{' '}
                                        We offer and distribute meeting bots
                                        which passively record and transcribe.
                                        <br></br>
                                        <span className="font-bold">
                                            Interact:
                                        </span>{' '}
                                        Our API lets anyone programmatically
                                        send meeting agents into meetings that
                                        can speak.
                                    </>
                                }
                                additionalItems={[]}
                            />
                        </div>
                    </>
                    ,
                    <div className="mb-7">
                        <SampleItem
                            title="Key Advantages"
                            description=""
                            children={
                                <>
                                    <span className="font-bold">
                                        Multi-Platform Support:{' '}
                                    </span>
                                    One single API for Meeting Bots on Google
                                    Meet, Zoom, and Microsoft Teams.
                                    <br></br>
                                    <span className="font-bold">
                                        Out of the box trial and open-source
                                        examples:{' '}
                                    </span>
                                    <HyperLink
                                        link="https://github.com/Meeting-Baas"
                                        textContent="GitHub"
                                        newWindow={true}
                                    />
                                    <br></br>
                                    <span className="font-bold">
                                        Partnerships and White-Labelling:{' '}
                                    </span>
                                    <HyperLink
                                        link="https://meetingbass.com/white-labelling"
                                        textContent="Learn More"
                                        newWindow={true}
                                    />
                                </>
                            }
                        />
                        ,
                    </div>
                    <div
                        style={{ display: 'flex', width: '100%', gap: '10px' }}
                    >
                        <div style={{ flex: 1 }}>
                            <Button
                                key="see-in-action-1"
                                name="open (current) docs"
                                color="white"
                                onClick={baasDocumentation}
                            />
                        </div>
                        <div style={{ flex: 1 }}>
                            <Button
                                key="see-in-action-2"
                                name="start building"
                                color="black"
                                onClick={registerRedirect}
                            />
                        </div>
                    </div>
                </>,
            ]}
            images={[
                {
                    src: 'ZoomCeo',
                    alt: 'Zoom CEO',
                    component: <SpeakingBassZoomGoogleMeet />,
                },
            ]}
            codeExamples={[]}
            buttonToShow={[]}
            title={''}
            subtitle={''}
        />
    )
}

const LetsDoThis: React.FC<PageProps> = ({ path }) => {
    return (
        <main className="snap-mandatory">
            <div className="overflow-y-scroll  h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <LetsDoThisContent path={path} />

                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default LetsDoThis

export const Head = () => {
    return (
        <SEO
            title="Meeting Baas 🐟 | Meeting Bots as a Service"
            description="Attend and interact in meetings across platforms. One API for Google Meet, Zoom, and Microsoft Teams."
            imagePath="previewSpeakingMeetingBots"
        />
    )
}
