import React from 'react'
import { Button } from '../../components/atoms/Button'
import Footer from '../../components/Layout/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { SEO } from '../../components/seo'

import { HyperLink } from '../../components/atoms/Hyperlink'
import { VerticalCodeExampleHolder } from '../../components/Examples/verticalCodeExampleHolder'
import { cloneOnGithub, registerRedirect } from '../../utils/router'

const OverviewBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">1. Overview</h2>
            This guide outlines the process to set up a{' '}
            <HyperLink link="https://make.com/" textContent="Make" /> workflow
            for automating video meeting tasks and summarizing meeting
            transcripts.
            <br />
            <br />
            It will:
            <ul className="list-disc list-inside mt-2">
                <li>
                    Record video meetings {'('}
                    <HyperLink
                        link="https://meet.google.com/"
                        textContent="Google Meet"
                    />
                    ,{' '}
                    <HyperLink
                        link="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software"
                        textContent="Microsoft Teams"
                    />{' '}
                    and <HyperLink link="https://zoom.us/" textContent="Zoom" />
                    {')'} with a bot using the Meeting Baas 🐟 API
                </li>
                <li>
                    Transcribe and summarize content with the{' '}
                    <HyperLink
                        link="https://openai.com/api/"
                        textContent="OpenAI API"
                    />{' '}
                </li>
                <li>
                    Sync insights to an Airtable database using{' '}
                    <HyperLink
                        link="https://make.com/"
                        textContent="Make.com"
                    />{' '}
                </li>
            </ul>
        </div>
    )
}

const PrerequisitesBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">2. Prerequisites</h2>
            Required accounts and access:
            <ul className="list-disc list-inside mt-2">
                <li>Make account</li>
                <li>Airtable account with a team plan</li>
                <li>Meeting Baas API access</li>
                <li>OpenAI API key</li>
            </ul>
        </div>
    )
}

const MakeSetupBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">3. Make Setup</h2>
            Make account setup:
            <ol className="list-decimal list-inside mt-2">
                <li>Save the workflow file below</li>
                <li>
                    If you don't have a Make account, create one at{' '}
                    <HyperLink
                        link="https://www.make.com/en/register"
                        textContent="make.com"
                    />
                </li>
                <li>From the dashboard, create a new scenario</li>
                <li>
                    Click the three horizontal dots and select 'Import
                    Blueprint'
                </li>
                <li>Upload the Airtable Scenario file and save</li>
                <li>Rename your workflow (e.g., "Integration Airtable")</li>
            </ol>
        </div>
    )
}

const AirtableConfigBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">
                4. Airtable Configuration
            </h2>
            Airtable setup steps:
            <ol className="list-decimal list-inside mt-2">
                <li>
                    Create an Airtable account at{' '}
                    <HyperLink
                        link="https://airtable.com/"
                        textContent="airtable.com"
                    />
                </li>
                <li>From the dashboard, click "Create" to start a new base</li>
                <li>
                    Choose "Start from scratch" and rename the base (e.g.,
                    "Meeting Baas")
                </li>
                <li>
                    Save the two provided CSV files below. We'll automatically
                    create "Data" and "Form Responses" tables with them. Rename
                    the two views accordingly (e.g., "Data" and "Invite Meeting
                    Bot Form").
                </li>
                <li>
                    Configure the "Data" table:
                    <ul className="list-disc list-inside ml-4">
                        <li>"Name", "Description": Single Line Text</li>
                        <li>
                            "Summary": Long Text (enable rich text formatting)
                        </li>
                        <li>"MeetingDate": Date</li>
                        <li>"Attendees": Long Text</li>
                    </ul>
                </li>
                <li>
                    Configure the "Form Responses" table:
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            "Meeting Bot Name", "Meeting URL", "Meeting Bot
                            Entry Message": Single Line Text
                        </li>
                        <li>"id": Auto Number</li>
                        <li>"Meeting Bot Image": Attachment</li>
                        <li>"Created Time": Created Time</li>
                        <li>"Created By": Created By</li>
                        <li>
                            Set default values:
                            <ul className="list-circle list-inside ml-4">
                                <li>Meeting Bot Name: Make Meeting Bot</li>
                                <li>
                                    Meeting Bot Entry Message: Hello - recording
                                    this meeting
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    Create a new form:
                    <ul className="list-disc list-inside ml-4">
                        <li>
                            Open the "Interfaces" tab and click "Start Building"
                        </li>
                        <li>
                            Select "Build a form" and choose the "Form
                            Responses" table. Here, you probably want to hide
                            the API key field with people you share the link
                            too. A simple way to do that is to show it
                            conditionally, for example based on the value of the
                            "Meeting Bot Name" field.
                        </li>
                        <li>
                            Rename the form (e.g., "Meeting Bot") and click
                            "Publish Form"
                        </li>
                        <li>
                            Select "Anyone on the web" for access and copy the
                            link
                        </li>
                    </ul>
                </li>
            </ol>
        </div>
    )
}

const MakeAirtableIntegrationBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">
                5. Make-Airtable Integration
            </h2>
            Connecting Make and Airtable:
            <ol className="list-decimal list-inside mt-2">
                <li>
                    In the Make dashboard, select the imported Airtable workflow
                </li>
                <li>
                    Click the Airtable (Watch Responses) node and create a new
                    webhook
                </li>
                <li>
                    Name the webhook (e.g., "Airtable webhook") and copy the
                    address
                </li>
                <li>In Airtable, open your base newly created form.</li>
                <li>
                    Select "Redirect to URL" from the settings panel on the
                    right. This is a paid feature.
                </li>
                <li>
                    Enter the webhook URL with {'`?record_id={record_id}`'}{' '}
                    appended and save
                </li>

                <li>
                    In the Airtable (Get A Record) node, add a connection
                    (OAuth, token, or key)
                </li>
                <li>
                    Name the connection (e.g., "Airtable OAuth connection") and
                    choose the base and table
                </li>
            </ol>
        </div>
    )
}

const WebhookSetupBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">6. Webhook Setup</h2>
            Webhook configuration:
            <ol className="list-decimal list-inside mt-2">
                <li>In the Make dashboard, create a new scenario</li>
                <li>Click the three dots and select 'Import Blueprint'</li>
                <li>Upload the Webhook Scenario file and save</li>
                <li>Rename the scenario (e.g., "Integration Webhook")</li>
                <li>Click the webhooks node and create a new webhook</li>
                <li>
                    Name the webhook (e.g., "Meeting Baas webhook") and copy the
                    address
                </li>
                <li>
                    In the Meeting Baas dashboard, navigate to the Webhook tab
                </li>
                <li>Paste the Make webhook URL</li>
            </ol>
        </div>
    )
}

const OpenAIConfigBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">7. OpenAI Configuration</h2>
            Setting up OpenAI integration:
            <ol className="list-decimal list-inside mt-2">
                <li>Locate and click the OpenRouter node in the workflow</li>
                <li>
                    Change the endpoint URL to{' '}
                    {'`https://api.openai.com/v1/chat/completions`'}
                </li>
                <li>
                    In the JSON payload, update the `model` field (e.g.,{' '}
                    {'`gpt-3.5-turbo`'} or {'`gpt-4`'})
                </li>
                <li>Click the add button below Credentials</li>
                <li>Set `Api Key Parameter Name` to "Authorization"</li>
                <li>
                    Type "Bearer" in the key field and paste your OpenAI API key
                </li>
                <li>Click "Create"</li>
            </ol>
        </div>
    )
}

const AirtableTokenSetupBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">8. Set Up Airtable Token</h2>
            <ol className="list-decimal list-inside mt-2">
                <li>Click the Airtable node in the workflow</li>
                <li>
                    Choose the connection used for the Airtable workflow (e.g.,
                    "Airtable OAuth connection")
                </li>
                <li>Click OK</li>
            </ol>
        </div>
    )
}

const SaveAndTestBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">9. Save and Test</h2>
            <ol className="list-decimal list-inside mt-2">
                <li>Save the workflow</li>
                <li>
                    Open the form, input the meeting URL and Meeting Baas API
                    key, and test the setup
                </li>
            </ol>
        </div>
    )
}

const ConclusionBlock = () => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Conclusion</h2>
            <p>
                Your Make workflow should now be connected to Meeting Baas and
                configured to use the OpenAI API. If you encounter issues, refer
                back to the steps or seek help on the Meeting Baas dashboard.
            </p>
        </div>
    )
}

const MakeMeetingTranscriptionSummarization = () => {
    return (
        <main>
            <SEO
                title="Make workflow for transcription and summarization | Meeting Baas 🐟"
                description="A workflow for transcribing and summarizing video meetings using Make, Airtable, OpenAI and the Meeting Baas API"
                imagePath="make-meeting-automation"
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
                        ['contents', 3],
                        ['code', 1],
                        ['buttons', 0],
                        ['contents', 4],
                        ['contents', 5],
                        ['code', 2],
                        ['buttons', 0],
                        ['contents', 6],
                        ['contents', 7],
                        ['contents', 8],
                        ['contents', 9],
                        ['images', 2],
                    ]}
                    contents={[
                        <OverviewBlock key="overview" />,
                        <PrerequisitesBlock key="prerequisites" />,
                        <MakeSetupBlock key="make-setup" />,
                        <AirtableConfigBlock key="airtable-config" />,
                        <MakeAirtableIntegrationBlock key="make-airtable-integration" />,
                        <WebhookSetupBlock key="webhook-setup" />,
                        <OpenAIConfigBlock key="openai-config" />,
                        <AirtableTokenSetupBlock key="airtable-token-setup" />,
                        <SaveAndTestBlock key="save-and-test" />,
                        <ConclusionBlock key="conclusion" />,
                    ]}
                    title={'Make workflow for transcription and summarization'}
                    subtitle={
                        'A workflow for transcribing and summarizing video meetings using Make, Airtable, OpenAI and the Meeting Baas API'
                    }
                    images={[
                        {
                            src: 'make-meeting-automation',
                            alt: 'make meeting automation',
                        },
                        {
                            src: 'transcript-seeker-interface',
                            alt: 'open source transcript seeker',
                        },
                        {
                            src: 'previewFeatures',
                            alt: 'preview features',
                        },
                    ]}
                    codeExamples={[
                        {
                            code: ['MAKE_GLOBAL_CONF.JSON'],
                            externalLink:
                                'https://github.com/Meeting-Baas/meeting-bot-as-a-service/blob/main/integrations-using-third-party-software/make-to-airtable-llm-brief/Workflows/Integration%20Airtable.json',
                            maxHeight: 35,
                        },
                        {
                            code: [
                                'AIRTABLE_DATA_GRID_VIEW.CSV',
                                'AIRTABLE_FORM_RESPONSES_VIEW.CSV',
                            ],
                            externalLink:
                                'https://github.com/Meeting-Baas/meeting-bot-as-a-service/blob/main/integrations-using-third-party-software/make-to-airtable-llm-brief/Workflows/Integration%20Airtable.json',
                            maxHeight: 35,
                        },
                        {
                            code: ['MAKE_WEBHOOK.JSON'],
                            externalLink:
                                'https://github.com/Meeting-Baas/transcript-seeker/',
                            maxHeight: 35,
                        },
                    ]}
                    buttonToShow={[
                        <Button
                            key="github"
                            color="green"
                            name="Download workflow files on GitHub"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={cloneOnGithub}
                        />,
                        <Button
                            key="live-example"
                            color="black"
                            name="Get your Meeting Baas API key"
                            buttonClass="flex max-w-fit mx-auto lg:mx-0"
                            onClick={registerRedirect}
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
export default MakeMeetingTranscriptionSummarization
