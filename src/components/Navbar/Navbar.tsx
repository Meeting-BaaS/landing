import React, { useState } from 'react'

import { Link } from 'gatsby'
import { joinDiscord, loginRedirect } from '../../utils/router'
import { Button } from '../atoms/Button'
import { DropdownList, NavLinkDropdown } from '../atoms/NavLinkDropdown'

import { MeetingBaasIcon } from '../../svg/MeetingBaasIcon'
import { NavLink } from './components/NavLink'

export const Navbar = (props: { className?: string }) => {
    console.log('Navbar', props)
    const [isOpen, setIsOpen] = useState(false)
    const genericHamburgerLine = ` w-8 h-1 bg-neutral-500 my-1 border border-black rounded-full bg-secondary-200 transition ease transform duration-300`

    const OpenSourceLinks: DropdownList[] = [
        {
            id: '/ai-chat',
            text: 'AI Chat - Natural Language Interface',
        },
        {
            id: '/examples/oss-transcript-seeker',
            text: 'Transcript Seeker - a complete service',
        },
        {
            id: '/examples/speaking-bots',
            text: 'Speaking Bots - AI Meeting Participants',
        },
        {
            id: '/examples/mcp-tools',
            text: 'MCP Tools - MeetingbaaS AI integration',
        },
        {
            id: '/examples/meeting-transcription-summarization-notion-integration',
            text: 'Notion Integration - Meeting Summaries',
        },
        {
            id: '/examples/open-source-transcript-player-with-options',
            text: 'Simple Transcript player in React',
        },
        {
            id: '/examples/make-meeting-transcription-summarization',
            text: 'Make.com + Airtable Meeting summarization',
        },

    ]

    const APILinks: DropdownList[] = [
        {
            id: '/examples/apis',
            text: 'APIs - Meeting Intelligence Platform',
        },
        {
            id: '/examples/calendars-api',
            text: 'Calendars API - Calendar Integrations',
        },
        {
            id: '/examples/bots-api',
            text: 'Bots API - Deploy Meeting Bots',
        },
        {
            id: '/examples/speaking-bots-api',
            text: 'Speaking Bots API - Conversational Agents',
        },
        {
            id: '/examples/webhooks-api',
            text: 'Webhooks API - Event Notifications',
        },
        {
            id: '/examples/typescript-sdk',
            text: 'TypeScript SDK - Open Source + Hosted Tools',
        },
    ]

    return (
        <nav
            className={`${props.className} z-50 fixed w-screen  mx-auto lg:py-[4px] 2xl:py-[10px] lg:mx-auto bg-neutral-50`}
        >
            <div className="hidden lg:flex  w-full justify-between items-center max-w-full 2xl:max-w-screen-2xl mx-auto lg:px-10 h-[60px]">
                <Link
                    to="/"
                    className=" flex justify-center w-24 lg:w-36 2xl:mr-9 sm:w-30"
                    style={{ cursor: 'pointer' }}
                >
                    <MeetingBaasIcon />
                </Link>
                <div className="flex flex-row gap-x-2 lg:gap-x-4 2xl:gap-x-8 items-center">
                    <NavLinkDropdown
                        linkName={'Open-Source'}
                        links={OpenSourceLinks}
                    />
                    <NavLinkDropdown linkName="APIs" links={APILinks} />

                    <NavLink linkName="Docs" to="/docs" />
                    <NavLink linkName="Use cases" to="/use-cases" />
                    <NavLink linkName="Pricing" to="/pricing" />
                    <Button
                        name="Talk to us"
                        color="white"
                        onClick={() => {
                            openDemo()
                        }}
                    />
                    <Button
                        name="Join our Discord"
                        color="green"
                        onClick={() => {
                            joinDiscord()
                        }}
                    />
                    <Button
                        name="Login"
                        color="black"
                        //TODO: redirect to the good page
                        onClick={() => {
                            loginRedirect({ redirect: window.location.href })
                        }}
                    />
                </div>
            </div>
            <div className="overflow-y-hidden overflow-x-hidden fixed lg:hidden top-6 left-6 z-50 justify-center items-center  lg:inset-0 transition ease transform duration-300">
                <button
                    title="Open main menu"
                    className="flex flex-col h-12 w-12 border bg-neutral-50  rounded-lg justify-center items-center group"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div
                        className={`${genericHamburgerLine} ${
                            isOpen
                                ? 'rotate-45 translate-y-3 group-hover:opacity-100'
                                : 'group-hover:opacity-70'
                        }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${
                            isOpen ? 'opacity-0' : 'group-hover:opacity-70'
                        }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${
                            isOpen
                                ? '-rotate-45 -translate-y-3 group-hover:opacity-100'
                                : 'group-hover:opacity-70'
                        }`}
                    />
                </button>
            </div>
            {isOpen && (
                <div className="overflow-y-hidden h-screen w-screen bg-neutral-50 overflow-x-hidden fixed lg:hidden p-6 pt-20 gap-6 top-0 right-0 left-0 z-40 items-center lg:inset-0 transition ease transform duration-300 flex flex-col">
                    <NavLink linkName="Home" to="/" />
                    <div className="font-sansCondensed lg:block w-full lg:min-w-fit text-slate-900 flex flex-row font-bold justify-center cursor-pointer text-base lg:text-lg 2xl:text-xl">
                        <details className="w-full group">
                            <summary className="uppercase flex flex-row w-full lg:w-fit px-2 xl:px-3 py-2 outline-none list-none">
                                <span className="ml-2 mr-2 my-auto text-xs rotate-[-90deg] group-open:rotate-0">
                                    ▼
                                </span>
                                APIs
                            </summary>
                            <div className="pl-4 flex flex-col gap-2 mt-2">
                                {APILinks.map((link) => (
                                    <Link
                                        key={link.id}
                                        to={link.id}
                                        className="flex ml-5 font-semibold items-center gap-2 py-1 hover:underline hover:underline-offset-4"
                                    >
                                        {link.icon}
                                        <span>{link.text}</span>
                                    </Link>
                                ))}
                            </div>
                        </details>
                    </div>
                    <div className="font-sansCondensed lg:block w-full lg:min-w-fit text-slate-900 flex flex-row font-bold justify-center cursor-pointer text-base lg:text-lg 2xl:text-xl">
                        <details className="w-full group">
                            <summary className="uppercase flex flex-row w-full lg:w-fit px-2 xl:px-3 py-2 outline-none list-none">
                                <span className="ml-2 mr-2 my-auto text-xs rotate-[-90deg] group-open:rotate-0">
                                    ▼
                                </span>
                                Open-Source
                            </summary>
                            <div className="pl-4 flex flex-col gap-2 mt-2">
                                {OpenSourceLinks.map((link) => (
                                    <Link
                                        key={link.id}
                                        to={link.id}
                                        className="flex ml-5 font-semibold items-center gap-2 py-1 hover:underline hover:underline-offset-4"
                                    >
                                        {link.icon}
                                        <span>{link.text}</span>
                                    </Link>
                                ))}
                            </div>
                        </details>
                    </div>

                    <NavLink isDisabled={true} linkName="Docs" to="/docs" />
                    <NavLink linkName="Use cases" to="/use-cases" />
                    <NavLink linkName="Pricing" to="/pricing" />
                    <NavLink
                        linkName="Discord"
                        isDisabled={true}
                        onClick={() => {
                            window.open(
                                'https://discord.com/invite/dsvFgDTr6c',
                                '_blank',
                            )
                        }}
                    />
                    <NavLink
                        linkName="GitHub"
                        isDisabled={true}
                        onClick={() => {
                            window.open(
                                'https://github.com/meeting-baas/meeting-bot-as-a-service',
                                '_blank',
                            )
                        }}
                    />
                    <Button
                        name="Talk to us"
                        color="white"
                        buttonClass="min-w-full"
                        onClick={() => {
                            openDemo()
                        }}
                    />
                    <Button
                        name="Login"
                        color="black"
                        buttonClass="min-w-full"
                        onClick={() => {
                            loginRedirect({ redirect: window.location.href })
                        }}
                    />
                </div>
            )}
        </nav>
    )
}

export function openOnboarding() {
    window.location.href = window.location.origin + '/register_onboarding'
}

export function openDemo() {
    console.log('openDemo')
    console.log(window.location.href, window.location.origin)
    window.location.href = window.location.origin + '/talk-to-us'
}
