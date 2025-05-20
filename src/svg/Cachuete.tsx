import React from 'react'

export const Cachuete = (props: { color: string; id: string }) => {
    return (
        <div className={`text-${props.color}-500`} id={props.id}>
            <svg
                width="147"
                height="108"
                viewBox="0 0 147 108"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M25 24.7051C36.4095 49.2553 71.9787 94.9393 122.98 81.2736"
                    stroke={`url(#Degrad-${props.id})`}
                    strokeWidth="48"
                    strokeLinecap="round"
                />

                <defs>
                    <linearGradient
                        id={`Degrad-${props.id}`}
                        x1="25"
                        y1="64"
                        x2="105"
                        y2="64"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="currentColor" />
                        <stop
                            offset="1"
                            stopColor="currentColor"
                            stopOpacity="0.7"
                        />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}
