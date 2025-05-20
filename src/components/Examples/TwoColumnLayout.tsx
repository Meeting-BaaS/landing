import React from 'react'
import { CenteredImage } from '../atoms/CenteredImage'
import CodeComponent, { CodeLanguageOption } from '../atoms/CodeComponent'
import { EmbedComponent } from '../atoms/EmbedComponent'

type ElementType =
    | 'title'
    | 'subtitle'
    | 'contents'
    | 'images'
    | 'code'
    | 'buttons'
    | 'audioIframe'
    | 'embed'

export interface ColumnContent {
    type: ElementType
    index: number
}

interface TwoColumnLayoutProps {
    title: string
    subtitle: string
    pageTitle?: string
    pageSubtitle?: string
    contents: React.JSX.Element[]
    // images can now also render React component, in this case we'll
    // use it for SVG components such as MultiplePeopleWithBass
    images: { src: string; alt: string; component?: React.ReactNode }[]
    codeExamples: {
        code: CodeLanguageOption[]
        externalLink?: string
        maxHeight?: number
    }[]
    buttonToShow: React.ReactNode[]
    leftColumn: ColumnContent[]
    rightColumn: ColumnContent[]
    roundedButtons?: React.ReactNode[]
    audioPlayer?: React.ReactNode
    embeds?: {
        url: string
        title: string
        description: string
        imageUrl: string
    }[]
}

export const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = (props) => {
    const renderElement = (type: ElementType, index: number) => {
        switch (type) {
            case 'title':
                return props.title ? (
                    <h1 className="text-3xl font-bold mb-2 ">{props.title}</h1>
                ) : null
            case 'subtitle':
                return props.subtitle ? (
                    <h2 className="text-xl text-gray-600 mb-3">
                        {props.subtitle}
                    </h2>
                ) : null
            case 'contents':
                return props.contents && props.contents[index] ? (
                    <div className="prose max-w-none mb-1">
                        {props.contents[index]}
                    </div>
                ) : null
            case 'images':
                return props.images && props.images[index] ? (
                    <div className="flex justify-center items-center h-full w-full">
                        {props.images[index].component ? (
                            <>{props.images[index].component}</>
                        ) : (
                            <CenteredImage
                                picture={props.images[index].src}
                                alt={props.images[index].alt}
                            />
                        )}
                    </div>
                ) : null
            case 'code':
                return props.codeExamples && props.codeExamples[index] ? (
                    <div className="mb-1">
                        <CodeComponent
                            choices={props.codeExamples[index].code}
                            externalLink={
                                props.codeExamples[index].externalLink
                            }
                            maxHeight={props.codeExamples[index].maxHeight}
                        />
                    </div>
                ) : null
            case 'buttons':
                return (
                    <div className="w-full flex flex-wrap gap-4 mb-1">
                        <div className="ml-auto w-fit">
                            <br></br>
                            {props.buttonToShow[index]}
                        </div>
                    </div>
                )
            case 'audioIframe':
                return props.audioPlayer ? (
                    <div className="w-full mb-1">{props.audioPlayer}</div>
                ) : null
            case 'embed':
                return props.embeds && props.embeds[index] ? (
                    <div className="mb-4">
                        <EmbedComponent
                            url={props.embeds[index].url}
                            title={props.embeds[index].title}
                            description={props.embeds[index].description}
                            imageUrl={props.embeds[index].imageUrl}
                        />
                    </div>
                ) : null
        }
    }

    return (
        <div className="relative snap-start lg:max-h-full lg:h-full w-full pt-[90px] lg:pt-[20px] flex bg-neutral-50">
            <div className="w-full lg:my-auto lg:h-[60vh] flex flex-col-reverse lg:flex-col gap-8 lg:gap-16">
                {/* <div className="flex-grow flex flex-col"> */}
                <div className="max-w-full w-full lg:h-full lg:min-h-full mx-auto px-8 lg:px-16 flex flex-col 00">
                    <div className="mb-8 ">
                        {props.pageTitle && (
                            <h1 className="font-sansCondensed font-bold italic text-2xl lg:text-3xl xl:text-5xl lg:px-[2vw] xl:px-[4vw] leading-none mb-2 text-neutral-500">
                                {props.pageTitle}
                            </h1>
                        )}
                        {props.pageSubtitle && (
                            <h2 className="font-sansCondensed font-black text-3xl lg:text-4xl xl:text-6xl  lg:px-[2vw] xl:px-[4vw] leading-none">
                                {props.pageSubtitle}
                            </h2>
                        )}
                    </div>
                    <div className="flex-grow w-full">
                        <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 h-full h-full max-h-full max-w-full justify-between">
                            <div className="w-full flex flex-col justify-center h-full lg:px-[5vw] xl:px-[8vw]">
                                {props.leftColumn.map((element, index) => (
                                    <React.Fragment key={index}>
                                        {renderElement(
                                            element.type,
                                            element.index,
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>
                            <div className="w-full flex flex-col justify-center h-full items-center lg:px-[1vw] xl:px-[3vw]">
                                <div className="w-full">
                                    {props.rightColumn.map((element, index) => (
                                        <React.Fragment key={index}>
                                            {renderElement(
                                                element.type,
                                                element.index,
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}

                {props.roundedButtons && props.roundedButtons.length > 0 && (
                    <div className="flex flex-wrap  w-full max-w-full mx-auto px-8 gap-2 justify-between items-center">
                        {props.roundedButtons.map((button, index) => (
                            <div
                                key={index}
                                className="flex-1 flex justify-center"
                            >
                                {button}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
