import React from 'react'

export const SampleItem = (props: {
    title: string
    description: string
    additionalItems?: { label: string; content: string }[]
    children?: React.ReactNode
}) => {
    return (
        <div className="flex flex-row gap-[16px]">
            <div className="relative flex-shrink-0 w-[8px]">
                <div className="absolute top-0 left-0 w-[8px] h-[8px] rounded-full bg-neutral-900"></div>
                <div className="absolute top-[6px] left-0 w-[8px] bottom-[6px] bg-neutral-900"></div>
                <div className="absolute bottom-0 left-0 w-[8px] h-[8px] rounded-full bg-neutral-900"></div>
            </div>
            <div className="flex flex-col py-1">
                {/* <div className="text-lg lg:text-xl font-semibold lg:text-xl"> */}
                <div className="text-lg lg:text-lg xl:text-2xl font-semibold">
                    {props.title}
                </div>
                <div className="text-xs lg:text-xs xl:text-base">
                    {props.description}
                </div>

                <div className="text-xs lg:text-xs xl:text-base">
                    {props.children && props.children}
                </div>

                {props.additionalItems && (
                    <ul className="mt-2 list-disc list-inside lg:text-sm text-xs lg:text-xs xl:text-base">
                        {props.additionalItems.map((item, index) => (
                            <li key={index} className="ml-4">
                                <span className="font-bold ">{item.label}</span>{' '}
                                {item.content}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
