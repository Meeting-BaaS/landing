import React from 'react'
import { registerRedirect } from '../../utils/router'
import { Button } from '../atoms/Button'
import CodeComponent from '../atoms/CodeComponent'

export const WelcomeSection = ({
    title1,
    title2,
    title3,
    subtitle1,
    subtitle2,
    buttonName,
    onButtonClick,
    secondButtonName,
    onSecondButtonClick,
}: {
    title1: string
    title2: string
    title3: string
    subtitle1: string
    subtitle2: string
    buttonName: string
    onButtonClick?: () => void
    secondButtonName?: string
    onSecondButtonClick?: () => void
}) => {
    return (
        <>
            <div
                className="snap-start pt-[50px] pb-0 gap-[24px] lg:py-[0px] px-[20px]  lg:px-[60px] w-full  items-center flex flex-col justify-center max-w-screen-xl mx-auto lg:justify-between lg:min-h-screen"
                id="top"
            >
                <div className="w-full lg:flex-row grid grid-cols-1 lg:grid-cols-2 place-content-center flex-grow gap-[24px] justify-center align-middle py-[80px]">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col lg:justify-between lg:mt-16 ">
                            <div className="text-bold font-sansCondensed text-3xl lg:text-6xl font-black uppercase text-center lg:text-left">
                                {title1}
                            </div>
                            <div className="text-bold font-sansCondensed text-3xl lg:text-6xl font-black uppercase text-center lg:text-left">
                                {title2}
                            </div>
                            <div className="font-sansCondensed uppercase text-xl lg:text-4xl font-bold text-center lg:text-left">
                                {title3}
                            </div>
                        </div>
                        <div className="flex flex-col text-lg lg:text-2xl max-w-[500px] text-neutral-500 text-center lg:text-left mx-auto lg:mx-0">
                            <div>{subtitle1}</div>
                            <div>{subtitle2}</div>
                        </div>

                        <div className="w-full flex flex-wrap gap-4 my-3">
                            {secondButtonName ? (
                                <>
                                    <Button
                                        color="green"
                                        name={secondButtonName}
                                        buttonClass="flex max-w-fit mx-auto lg:mx-0"
                                        onClick={
                                            onSecondButtonClick ??
                                            (() =>
                                                registerRedirect({
                                                    redirect: null,
                                                }))
                                        }
                                    />
                                    <Button
                                        color="black"
                                        name={buttonName}
                                        buttonClass="flex max-w-fit mx-auto lg:mx-0"
                                        onClick={
                                            onButtonClick ??
                                            (() =>
                                                registerRedirect({
                                                    redirect: null,
                                                }))
                                        }
                                    />
                                </>
                            ) : (
                                <Button
                                    color="green"
                                    name={buttonName}
                                    buttonClass="flex max-w-fit mx-auto lg:mx-0"
                                    onClick={
                                        onButtonClick ??
                                        (() =>
                                            registerRedirect({
                                                redirect: null,
                                            }))
                                    }
                                />
                            )}
                        </div>
                    </div>
                    <div className="w-full">
                        <CodeComponent
                            choices={[
                                'SDK_USAGE.TS',
                                'INVITE.SH',
                                'EXAMPLE_PYTHON',
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
