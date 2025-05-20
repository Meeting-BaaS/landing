import React from 'react'
import { CenteredImage } from '../atoms/CenteredImage'
import CodeComponent, { CodeLanguageOption } from '../atoms/CodeComponent'

type ElementType =
    | 'title'
    | 'subtitle'
    | 'contents'
    | 'images'
    | 'code'
    | 'buttons'

interface VerticalCodeExampleHolderProps {
    title: string
    subtitle: string
    contents: React.JSX.Element[]
    images: { src: string; alt: string }[]
    codeExamples: {
        code: CodeLanguageOption[]
        externalLink?: string
        maxHeight?: number
    }[]
    buttonToShow: React.ReactNode[]
    order: [ElementType, number][] // [type, contentIndex]
}

export const VerticalCodeExampleHolder: React.FC<
    VerticalCodeExampleHolderProps
> = (props) => {
    const renderElement = (type: ElementType, index: number) => {
        switch (type) {
            case 'title':
                return props.title ? (
                    <h1 className="text-3xl font-bold mb-2 id={props.index}">
                        {props.title}
                    </h1>
                ) : null
            case 'subtitle':
                return props.subtitle ? (
                    <h2 className="text-xl text-gray-600 mb-4">
                        {props.subtitle}
                    </h2>
                ) : null
            case 'contents':
                return props.contents && props.contents[index] ? (
                    <div className="prose max-w-none mb-8">
                        {props.contents[index]}
                    </div>
                ) : null
            case 'images':
                return props.images && props.images[index] ? (
                    <div>
                        {props.images[index] && (
                            <div className="pb-6">
                                <CenteredImage
                                    key={index}
                                    picture={props.images[index].src}
                                    alt={props.images[index].alt}
                                    className="border-primary-700 border"
                                />
                            </div>
                        )}
                    </div>
                ) : null
            case 'code':
                return props.codeExamples && props.codeExamples[index] ? (
                    <div className="mb-8">
                        <CodeComponent
                            choices={props.codeExamples[index].code}
                            externalLink={
                                props.codeExamples[index].externalLink
                                    ? props.codeExamples[index].externalLink
                                    : undefined
                            }
                            maxHeight={
                                props.codeExamples[index].maxHeight
                                    ? props.codeExamples[index].maxHeight
                                    : undefined
                            }
                        />
                    </div>
                ) : null
            case 'buttons':
                return (
                    <div className="flex flex-wrap gap-4 mb-8 justify-end id={props.index}">
                        {props.buttonToShow}
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 mt-[60px] lg:mt-[64px]">
            {props.order.map((elementType, index) => (
                <React.Fragment key={index}>
                    {renderElement(elementType[0], elementType[1])}
                </React.Fragment>
            ))}
        </div>
    )
}
