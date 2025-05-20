import CodeComponent, { CodeLanguageOption } from '../atoms/CodeComponent'

import React from 'react'

export const CodeExampleHolder = (props: {
    content: React.JSX.Element
    titles: [string, string]
    codeFileExamples: CodeLanguageOption[]
    buttonToShow: React.ReactNode[]
    externalLink?: string
}) => {
    return (
        <div className=" py-[50px] px-[20px] gap-[24px] lg:px-[60px] w-full pt-[100px] items-center flex flex-col justify-center max-w-screen-xl mx-auto lg:justify-between lg:flex-row lg:max-h-fit lg:min-h-screen">
            <div className="flex flex-col gap-[16px]">
                <div className="flex flex-col">
                    <div className="text-bold font-sansCondensed text-2xl lg:text-4xl font-black uppercase text-center lg:text-left">
                        {props.titles[0]}
                    </div>
                    <div className="text-bold font-sansCondensed text-2xl lg:text-4xl font-black uppercase text-center lg:text-left">
                        {props.titles[1]}
                    </div>
                </div>
                <div className="flex flex-col text-lg max-w-[500px] lg:placeholder:h-[100px] text-neutral-500 text-justify lg:text-left">
                    {props.content}
                </div>

                <div className="flex flex-row justify-end space-x-2">
                    {props.buttonToShow}
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                {props.externalLink ? (
                    <CodeComponent
                        choices={props.codeFileExamples}
                        externalLink={props.externalLink}
                    />
                ) : (
                    <CodeComponent choices={props.codeFileExamples} />
                )}
            </div>
        </div>
    )
}
