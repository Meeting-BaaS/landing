import React from 'react'

export const NoTalkIllustration = (props: {
    firstLine: string
    secondLine: string
    fontSize?: number
}) => {
    const { firstLine, secondLine, fontSize = 96 } = props

    return (
        <svg
            width="958"
            height="568"
            viewBox="0 0 958 568"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M241.896 521.621L794.706 202.456C837.929 177.502 852.739 122.232 827.784 79.0088C802.829 35.7855 747.559 20.9761 704.336 45.9311L151.526 365.096C108.303 390.051 93.4933 445.32 118.448 488.544C143.403 531.767 198.673 546.576 241.896 521.621Z"
                fill="#9904FF"
                stroke="black"
                strokeMiterlimit="10"
            />
            <path
                d="M180.434 196.363L642.518 521.362C678.648 546.774 728.538 538.085 753.949 501.954C779.361 465.824 770.672 415.935 734.541 390.523L272.458 65.5241C236.327 40.1125 186.438 48.8017 161.026 84.9319C135.615 121.062 144.304 170.952 180.434 196.363Z"
                fill="#FFC219"
                stroke="black"
                strokeMiterlimit="10"
            />
            <path
                d="M803.9 137.049H153.81C69.4543 137.049 1.07031 205.433 1.07031 289.789C1.07031 374.145 69.4543 442.529 153.81 442.529H803.9C888.256 442.529 956.64 374.145 956.64 289.789C956.64 205.433 888.256 137.049 803.9 137.049Z"
                fill="#06DBA7"
                stroke="black"
                strokeMiterlimit="10"
            />
            <text
                fill="black"
                xmlSpace="preserve"
                fontFamily="Sofia Sans Condensed"
                fontSize={fontSize}
                fontWeight="900"
                letterSpacing="0px"
                textAnchor="middle" // Centers the text
                x="50%" // Sets the starting point to the middle of the SVG's width
                y="289.709"
            >
                <tspan>{firstLine}</tspan>
            </text>
            <text
                fill="black"
                xmlSpace="preserve"
                fontFamily="Sofia Sans Condensed"
                fontSize="48"
                fontWeight="bold"
                letterSpacing="0px"
                textAnchor="middle" // Centers the text
                x="50%" // Sets the starting point to the middle of the SVG's width
            >
                <tspan y="360.709">{secondLine}</tspan>
            </text>
        </svg>
    )
}
