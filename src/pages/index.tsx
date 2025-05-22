import React from 'react'
import { ColumnContent } from '../components/Examples/TwoColumnLayout'
import { FeaturesSection } from '../components/Home/FeaturesSection'
import { LastSection } from '../components/Home/LastSection'
import { WelcomeSection } from '../components/Home/WelcomeSection'
import Footer from '../components/Layout/Footer'
import { Navbar } from '../components/Navbar/Navbar'
import { SEO } from '../components/seo'
import { openDocs, transcriptSeeker, tryAiChat } from '../utils/router'

const Home = () => {
    const leftColumnContent: ColumnContent[] = [
        { type: 'subtitle', index: 0 },
        { type: 'contents', index: 0 },
        { type: 'contents', index: 1 },
    ]

    const rightColumnContent: ColumnContent[] = [{ type: 'contents', index: 0 }]
    return (
        <main className="snap-mandatory">
            <SEO
                title="Meeting Bots as a Service"
                description="One API for programmatic access to meeting data across Zoom, Meet, and Teams. Hosted and ready to use, with the option to self-host when you're ready."
                isHomePage={true}
            />
            <div className=" overflow-y-scroll h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50">
                <Navbar />
                <WelcomeSection
                    title1="Meeting Bots"
                    title2=""
                    title3="as a Service"
                    subtitle1="The Open-Source developer API for access to meeting data across Zoom, Meet, and Teams."
                    subtitle2="Hosted and ready to use, with the option to self-host when you're ready."
                    buttonName="Try AI chat"
                    onButtonClick={tryAiChat}
                    secondButtonName="View Documentation"
                    onSecondButtonClick={openDocs}
                />
                {/* <div key="feature-comparison">
                  <h2 className="text-2xl font-bold mb-4">Feature Comparison</h2>
                  <FeatureComparisonTable />
                </div>, */}
                {/* <MeetingBaasVsRecallContent path="meeting-baas-vs-recall" showFooter={false}></MeetingBaasVsRecallContent> */}

                {/* <TwoColumnLayout></TwoColumnLayout> */}
                {/* <MeetingBotAPIContent path={'transcription-api'}></MeetingBotAPIContent> */}
                {/* <HomeSpokeBot></HomeSpokeBot> */}
                <FeaturesSection />
                <LastSection />
                <div className="snap-start min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}
export default Home
