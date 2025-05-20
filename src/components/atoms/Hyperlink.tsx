import React from 'react'

type TailwindColor = 'primary' | 'neutral' | 'warning'

export const HyperLink = (props: {
    link: string
    textContent: string
    newWindow?: boolean
    key?: React.Key
    style?: React.CSSProperties
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    linkBrand?: boolean
    color?: TailwindColor
}) => {
    const defaultClassName =
        'underline text-blue-600 hover:text-blue-800 visited:text-purple-600'
    const brandClassName = props.color 
        ? `text-${props.color}-500 cursor-pointer hover:underline hover:text-${props.color}-700`
        : 'text-primary-500 cursor-pointer hover:underline'

    return (
        <a
            href={props.link}
            className={props.linkBrand ? brandClassName : defaultClassName}
            target={props.newWindow ? '_blank' : undefined}
            rel={props.newWindow ? 'noopener noreferrer' : undefined}
            style={
                props.linkBrand
                    ? {
                          fontSize: 'inherit',
                          fontWeight: 'inherit',
                          lineHeight: 'inherit',
                          ...props.style,
                      }
                    : props.style
            }
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
        >
            {props.textContent}
        </a>
    )
}
