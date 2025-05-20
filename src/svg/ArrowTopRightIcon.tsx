import React from 'react'

export const ArrowTopRightIcon = (props: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 37 37"
            fill="none"
            className={props.className}
        >
            <path
                d="M10.7109 26.0117L25.7109 11.0117"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M10.7109 11.0117H25.7109V26.0117"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
