import { PageProps } from 'gatsby'
import React from 'react'
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
import { MultiplePeopleWithBass } from '../svg/MultiplePeopleWithBass'

const AboutContent: React.FC<{ path: string }> = ({ path }) => {
    const leftColumnContent: ColumnContent[] = [
        { type: 'subtitle', index: 0 },
        { type: 'contents', index: 0 },
    ]

    const rightColumnContent: ColumnContent[] = [{ type: 'images', index: 0 }]

    return (
        <TwoColumnLayout
            leftColumn={leftColumnContent}
            rightColumn={rightColumnContent}
            pageTitle="About Us"
            pageSubtitle="Embedded in Video Meetings since 2020 "
            contents={[
                <>
                    <div className="flex flex-col gap-[16px]">
                        <SampleItem
                            title="We know our stuff"
                            description=""
                            children={
                                <>
                                    We've specialized in the video-meeting space
                                    for the past 4 years, targeting sales teams
                                    with{' '}
                                    {[
                                        <HyperLink
                                            link="https://spoke.app"
                                            textContent="Spoke app"
                                            newWindow={true}
                                        />,
                                    ]}
                                    {', a product for end-users.'}
                                    <br></br>
                                    Spoke generated more than $500K in sales,
                                    with 45 000 registered users.
                                </>
                            }
                        />
                        <SampleItem
                            title="We speak the language of our users"
                            description="Be it building a Chrome extension capturing sound, or going through the process of a Zoom approval, we've seen most of our field. We're delighted to be serving developers directly - as a founding team of developers."
                        />
                    </div>
                </>,
            ]}
            images={[
                {
                    src: 'MultiplePeopleWithBass',
                    alt: 'Multiple People With Bass',
                    component: <MultiplePeopleWithBass />,
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

const About: React.FC<PageProps> = ({ path }) => {
    return (
        <main className="snap-mandatory">
            <div className="overflow-y-scroll h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <AboutContent path={path} />
                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}

export default About

export const Head = () => {
    return (
        <SEO
            title="Meeting Baas 🐟 | About Us"
            description="We've uploaded ourselves to video-meetings in 2020. Meet us on Google Meet!"
        />
    )
}
