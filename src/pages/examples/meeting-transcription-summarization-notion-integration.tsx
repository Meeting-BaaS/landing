import React from 'react'
import { Button } from '../../components/atoms/Button'
import { HyperLink } from '../../components/atoms/Hyperlink'
import { CodeExampleHolder } from '../../components/Examples/codeExampleHolder'
import Footer from '../../components/Layout/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { SEO } from '../../components/seo'

export const SendMeetingSummaryToNotion = () => {
    return (
        <div>
            <div>
                Connect{' '}
                <HyperLink
                    link="https://meetingbaas.com"
                    textContent={'Meeting Baas'}
                />
                {' 🐟, '}
                <HyperLink
                    link="https://openai.com"
                    textContent="OpenAI"
                />, {' and '}
                <HyperLink
                    link="https://www.notion.so"
                    textContent={'Notion'}
                />{' '}
                APIs to automate meeting transcription, summarization and
                storage in a Notion database.
            </div>

            <br></br>
            <div>
                Set up a very simple{' '}
                <HyperLink
                    link={'https://expressjs.com/en/starter/hello-world.html'}
                    textContent={'Express JS'}
                ></HyperLink>{' '}
                server to create a user friendly form to send a{' '}
                <HyperLink
                    link="https://meet.google.com/"
                    textContent={'Google Meet'}
                />{' '}
                <HyperLink link="https://zoom.us/" textContent={'Zoom'} />
                {', or '}
                <HyperLink
                    link="https://www.microsoft.com/en-us/microsoft-teams/log-in"
                    textContent={'Microsoft Teams'}
                />{' '}
                bot to a video meeting. The bot will then provide all useful
                information of the meeting back to the server. This includes,
                but is not limited too, the list of attendees, conversation
                recording, transcription, etc.
                <br></br>
                <br></br>
                Format the conversation data to Markdown by using an LLM (in
                this example{' '}
                <a href="https://platform.openai.com/docs/models">
                    OpenAI's gpt-3.5
                </a>
                ) and automatically fill in a Notion database with the captured,
                formatted information.
            </div>
            <div></div>
            <br></br>
        </div>
    )
}

const MeetingTranscriptionSummarizationNotionIntegration = () => {
    return (
        <main className="">
            <SEO
                title="Send Meeting Summaries to Notion with Code | Meeting Baas 🐟"
                description="Automate meeting transcription and summarization to Notion using: a simple Express JS server, the OpenAI, Notion and Meeting Baas 🐟 APIs. "
            />
            <div className="h-screen min-h-screen min-w-screen max-w-screen overflow-x-hidden bg-neutral-50 ">
                <Navbar />

                <CodeExampleHolder
                    content={<SendMeetingSummaryToNotion />}
                    titles={[
                        'Send transcript summaries',
                        ' to Notion with Code ',
                    ]}
                    codeFileExamples={['INDEX.TSX']}
                    buttonToShow={[
                        <Button
                            color="black"
                            name="View example on GitHub"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={() => {
                                window.open(
                                    'https://github.com/meeting-baas/meeting-bot-as-a-service/tree/main/apps/node-js-to-notion-llm-brief',
                                    '_blank',
                                )
                            }}
                        />,
                    ]}
                />

                <div className=" min-w-screen max-w-screen overflow-x-hidden bg-neutral-900">
                    <Footer />
                </div>
            </div>
        </main>
    )
}
export default MeetingTranscriptionSummarizationNotionIntegration
