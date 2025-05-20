import React from 'react'
import { HomeSpokeBot } from '../../svg/HomeSpokeBot'
import { registerRedirect } from '../../utils/router'
import { Button } from '../atoms/Button'

export const WelcomeSection = () => {
    return (
        <div
            id="top"
            className="snap-start max-w-screen-xl mx-auto py-[50px] px-[60px] w-full max-h-screen min-h-screen items-center flex flex-row justify-between"
        >
            <div className="flex flex-col gap-[16px] ">
                <div className="flex flex-col">
                    <div className="text-bold font-sansCondensed text-6xl uppercase font-black">
                        AI recording API
                    </div>
                    <div className="font-sansCondensed uppercase text-5xl font-bold">
                        For video meetings
                    </div>
                </div>
                <div className="flex flex-col text-[24px] max-w-[500px] h-[100px] text-neutral-500">
                    <div>
                        Bridge the gap between meetings and LLMs by running your
                        own meeting bots in 2 minutes.
                    </div>
                </div>
                <Button
                    color="green"
                    name="Start now"
                    onClick={registerRedirect}
                />
            </div>
            <HomeSpokeBot />
        </div>
    )
}
