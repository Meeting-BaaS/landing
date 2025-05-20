//import 'highlight.js/styles/atom-one-dark-reasonable.css'

import React, { useEffect, useState } from 'react'

import { Listbox } from '@headlessui/react'
import hljs from 'highlight.js'
import language from 'react-syntax-highlighter/dist/esm/languages/hljs/1c'
import ArrowStroke from '../../svg/ArrowStroke'
import { ArrowTopRightIcon } from '../../svg/ArrowTopRightIcon'
import { CheckSimple } from '../../svg/CheckSimple'
import { CopyIcon } from '../../svg/CopyIcon'
import gladiaIndex from '../codeSnippets/gladiaIndex.py'
import gladiaOptions from '../codeSnippets/gladiaOptions.py'

import assemblyAiIndex from '../codeSnippets/assemblyAiIndex.py'
import assemblyAiOptions from '../codeSnippets/assemblyAiOptions.py'
import summarizeToNotion from '../codeSnippets/index.py'

import airtable from '../codeSnippets/integration_airtable.py'
import makeGlobalConf from '../codeSnippets/make_global_conf.py'
import makeWebhook from '../codeSnippets/make_webhook.py'

import airtableDataGridView from '../codeSnippets/airtable_data_grid_view.py'
import airtableFormResponsesView from '../codeSnippets/airtable_form_responses_view.py'
import calendarsApi from '../codeSnippets/calendars_api.py'
import examplePython from '../codeSnippets/invite_bot.py'
import exampleBash from '../codeSnippets/invite_bot.sh'
import launchRun from '../codeSnippets/launch_run.sh'
import launchRunPlayer from '../codeSnippets/launch_run_player.sh'
import mcpConfigRaw from '../codeSnippets/mcp_config.json'
import run from '../codeSnippets/run.sh'
import runPlayer from '../codeSnippets/run_player.sh'
import sdkInstall from '../codeSnippets/sdk_install.sh'
import sdkUsageContent from '../codeSnippets/sdk_usage.ts'
import speakingBot from '../codeSnippets/speaking_bot.py'
import speakingBotBash from '../codeSnippets/speaking_bot.sh'
import transcriptPlayer from '../codeSnippets/transcript.py'
import transcriptPlayerApp from '../codeSnippets/transcript_player_app.py'
import transcriptPlayerRenderer from '../codeSnippets/transcript_player_renderer.py'
import transcriptPlayerTypes from '../codeSnippets/transcript_player_types.py'
import transcriptPlayerVideo from '../codeSnippets/transcript_player_video.py'
import webhookEventsRaw from '../codeSnippets/webhook_events.json'
import { Button } from './Button'

const mcpConfig = JSON.stringify(mcpConfigRaw, null, 2)
const webhookEvents = JSON.stringify(webhookEventsRaw, null, 2)

export type CodeLanguageOption =
    | 'INVITE.SH'
    | 'INDEX.TSX'
    | 'EXAMPLE_PYTHON'
    | 'TRANCRIPT.TSX'
    | 'AIRTABLE_WEBHOOK_CONF.JSON'
    | 'MAKE_GLOBAL_CONF.JSON'
    | 'MAKE_WEBHOOK.JSON'
    | 'RUN.SH'
    | 'GLADIA_OPTIONS'
    | 'GLADIA_INDEX'
    | 'ASSEMBLYAI_INDEX'
    | 'ASSEMBLYAI_OPTIONS'
    | 'RUN_PLAYER.SH'
    | 'LAUNCH_RUN.SH'
    | 'LAUNCH_RUN_PLAYER.SH'
    | 'AIRTABLE_DATA_GRID_VIEW.CSV'
    | 'AIRTABLE_FORM_RESPONSES_VIEW.CSV'
    | 'TRANSCRIPT_PLAYER_APP.TSX'
    | 'TRANSCRIPT_PLAYER_VIDEO.TSX'
    | 'TRANSCRIPT_PLAYER_RENDERER.TSX'
    | 'TRANSCRIPT_PLAYER_TYPES.TSX'
    | 'SPEAKING_BOT.PY'
    | 'SPEAKING_BOT.SH'
    | 'CALENDARS_API.PY'
    | 'MCP_CONFIG.JSON'
    | 'WEBHOOK_EVENTS.JSON'
    | 'SDK_INSTALL.SH'
    | 'SDK_USAGE.TS'
    | 'PROMPT_EXAMPLE_0'
    | 'PROMPT_EXAMPLE_1'
    | 'PROMPT_EXAMPLE_2'
    | 'PROMPT_EXAMPLE_3'
    | 'PROMPT_EXAMPLE_4'
    | 'PROMPT_EXAMPLE_5'
    | 'BSL_LICENSE'

type language = 'bash' | 'typescript' | 'python' | 'json'

type CodeExample = [CodeLanguageOption, string, language]

export const codeOptions: CodeExample[] = [
    ['SDK_USAGE.TS', sdkUsageContent, 'typescript'],
    ['INVITE.SH', exampleBash, 'bash'],
    ['EXAMPLE_PYTHON', examplePython, 'python'],
    ['INDEX.TSX', summarizeToNotion, 'typescript'],
    ['TRANCRIPT.TSX', transcriptPlayer, 'typescript'],
    ['AIRTABLE_WEBHOOK_CONF.JSON', airtable, 'json'],
    ['MAKE_GLOBAL_CONF.JSON', makeGlobalConf, 'json'],
    ['MAKE_WEBHOOK.JSON', makeWebhook, 'json'],
    ['RUN.SH', run, 'bash'],
    ['GLADIA_OPTIONS', gladiaOptions, 'typescript'],
    ['GLADIA_INDEX', gladiaIndex, 'typescript'],
    ['ASSEMBLYAI_OPTIONS', assemblyAiOptions, 'typescript'],
    ['ASSEMBLYAI_INDEX', assemblyAiIndex, 'typescript'],
    ['RUN_PLAYER.SH', runPlayer, 'bash'],
    ['LAUNCH_RUN.SH', launchRun, 'bash'],
    ['LAUNCH_RUN_PLAYER.SH', launchRunPlayer, 'bash'],
    ['AIRTABLE_DATA_GRID_VIEW.CSV', airtableDataGridView, 'json'],
    ['AIRTABLE_FORM_RESPONSES_VIEW.CSV', airtableFormResponsesView, 'json'],
    ['TRANSCRIPT_PLAYER_APP.TSX', transcriptPlayerApp, 'typescript'],
    ['TRANSCRIPT_PLAYER_VIDEO.TSX', transcriptPlayerVideo, 'typescript'],
    ['TRANSCRIPT_PLAYER_RENDERER.TSX', transcriptPlayerRenderer, 'typescript'],
    ['TRANSCRIPT_PLAYER_TYPES.TSX', transcriptPlayerTypes, 'typescript'],
    ['SPEAKING_BOT.PY', speakingBot, 'python'],
    ['SPEAKING_BOT.SH', speakingBotBash, 'bash'],
    ['CALENDARS_API.PY', calendarsApi, 'python'],
    ['MCP_CONFIG.JSON', mcpConfig, 'json'],
    ['WEBHOOK_EVENTS.JSON', webhookEvents, 'json'],
    ['SDK_INSTALL.SH', sdkInstall, 'bash'],
    ['PROMPT_EXAMPLE_0', 'Create a bot for my Zoom meeting at https://zoom.us/j/123456789 starting in 10 minutes', 'typescript'],
    ['PROMPT_EXAMPLE_1', "Find all mentions of 'quarterly budget' in my meetings from last week", 'typescript'],
    ['PROMPT_EXAMPLE_2', 'Help me set up OAuth to integrate my Google Calendar with Meeting BaaS', 'typescript'],
    ['PROMPT_EXAMPLE_3', 'Show me the documentation for creating speaking bots', 'typescript'],
    ['PROMPT_EXAMPLE_4', 'Why did my bot not join the Google Meet at 3pm yesterday? Show logs.', 'typescript'],
    ['PROMPT_EXAMPLE_5', 'Use the MCP transcript search tool to find all action items from last week.', 'typescript'],
    ['BSL_LICENSE', `Business Source License 1.1\n\nLicensor: SAS SPOKE\nLicensed Work: Meeting BaaS (https://meetingbaas.com)\nChange Date: 1 year from the date of each code release\nChange License: Apache 2.0\n\nUse Limitation: The Licensed Work may only be used for non-commercial purposes, or for your own internal business operations. You may not use the Licensed Work, or any part of it, to provide a commercial service or product to third parties, including as a hosted or SaaS offering, without explicit written permission from the Licensor.\n\nFeature Delay: Any new features or changes in the closed-source version will be released under this license after a 1-week delay.\n\nOn or after the Change Date, this license will automatically convert to the Apache 2.0 License, and you may use the Licensed Work for any purpose, including commercial use.\n`, 'typescript'],
]

type CodeComponentProps = {
    choices: CodeLanguageOption[]
    externalLink?: string
    maxHeight?: number
}

const CodeComponent = (props: CodeComponentProps) => {
    const languages: CodeExample[] = codeOptions.filter(([option]) =>
        props.choices.includes(option),
    )

    const containerStyleHeight: React.CSSProperties = {
        maxHeight: props.maxHeight ? `${props.maxHeight}vh` : '80vh',
    }

    const [currentLanguage, setCurrentLanguage] = useState(languages[0])
    const [copySuccess, setCopySuccess] = useState(false)

    const copyToClipboard = (code: string) => {
        console.log('COPY', code)
        navigator.clipboard.writeText(code).then(
            () => {
                setCopySuccess(true)
                setTimeout(() => setCopySuccess(false), 1100) // Affiche "Copied!" pendant 2 secondes
            },
            () => alert('Failed to copy'), // Utilisez une alerte ou une autre méthode pour signaler l'échec
        )
    }
    useEffect(() => {
        hljs.highlightAll()
    }, [currentLanguage])

    // <pre className="w-full rounded-xl bg-transparent mt-2 h-full ">
    // <pre className="w-full rounded-xl bg-transparent mt-2 h-[80vh] overflow-hidden">
    return (
        <pre className="w-full rounded-xl bg-transparent mt-2 overflow-hidden">
            <div
                className="relative rounded-xl bg-neutral-900 lg:px-[24px] lg:py-[16px] w-full flex flex-col flex-grow overflow-auto text-sm"
                style={containerStyleHeight}
            >
                <div className="flex flex-row justify-between items-center gap-4 ">
                    <div
                        className="flex  min-w-18  hover:underline underline-offset-4 text-neutral-50 cursor-pointer hover:text-neutral-100"
                        onClick={() => {
                            window.open(
                                props.externalLink
                                    ? props.externalLink
                                    : 'https://github.com/meeting-baas/meeting-bot-as-a-service',
                                '_blank',
                            )
                        }}
                    >
                        {props.externalLink ? (
                            <>
                                <div className="flex min-w-18 text-neutral-50 hover:text-neutral-100">
                                    {'View on GitHub'}
                                </div>
                                <div className="w-[16px]">
                                    <ArrowTopRightIcon />
                                </div>
                            </>
                        ) : (
                            <div className="flex min-w-18 text-neutral-50 hover:text-neutral-100">
                                {''}
                            </div>
                        )}
                    </div>
                    <div className="relative flex justify-end items-center min-w-24 rounded-md ">
                        <Listbox
                            value={currentLanguage}
                            onChange={setCurrentLanguage}
                        >
                            <Listbox.Button
                                className="text-left flex-grow flex gap-4 items-center justify-between text-neutral-50 hover:text-neutral-300 hover:cursor-pointer lowercase"
                                id={`listbox-button-${props.choices[0]}`}
                            >
                                {currentLanguage[0]}
                                {props.choices.length > 1 && (
                                    <ArrowStroke size={12} />
                                )}
                            </Listbox.Button>
                            <Listbox.Options className="absolute rounded-md shadow-lg max-h-60 bg-neutral-700 overflow-auto w-28 top-8 -left-2 lowercase">
                                {languages
                                    .filter((x) => x[0] !== currentLanguage[0])
                                    .map((language) => (
                                        <Listbox.Option
                                            key={language[0]}
                                            value={language}
                                            className={`text-neutral-50 hover:text-neutral-300 cursor-pointer select-none  p-2 hover:bg-gray-600 bg-[#282c34] ${
                                                currentLanguage[0] ===
                                                language[0]
                                                    ? 'font-medium'
                                                    : ''
                                            }`}
                                        >
                                            <span className="block truncate">
                                                {language[0]}
                                            </span>
                                        </Listbox.Option>
                                    ))}
                            </Listbox.Options>
                        </Listbox>{' '}
                        <div className="w-[24px] ml-2 flex justify-end min-w-18">
                            {copySuccess ? (
                                <div className="w-[24px] text-primary-500">
                                    <CheckSimple />
                                </div>
                            ) : (
                                <button
                                    className="w-[16px] hover:text-primary-500 text-neutral-50 flex justify-center items-center" // Ensure the button itself is also a flex container to center the icon
                                    onClick={() =>
                                        copyToClipboard(currentLanguage[1])
                                    }
                                >
                                    <CopyIcon />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <code
                    className={`language-${currentLanguage[2]} block p-3 background-transparent`}
                    style={{ background: 'transparent' }}
                >
                    {currentLanguage[1]}
                </code>
            </div>
        </pre>
    )
}

export const CodeComponentButton = (props: {
    choices: CodeLanguageOption[]
}) => {
    return (
        <>
            <div
                className="flex flex-col gap-1 items-end"
                style={{ maxHeight: '80vh' }}
            >
                <Button
                    color="black"
                    name="View on Github"
                    buttonClass="flex max-w-fit mx-auto lg:mx-0"
                    onClick={() => {
                        window.open(
                            'https://github.com/Meeting-Baas/Meeting-Bot-As-A-Service',
                            '_blank',
                        )
                    }}
                />
                <CodeComponent choices={props.choices}></CodeComponent>
            </div>
        </>
    )
}

export default CodeComponent
