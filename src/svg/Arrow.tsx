import React from 'react'

interface ArrowProps {
    key?: React.Key
}

const Arrow: React.FC<ArrowProps> = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="18"
            viewBox="0 0 26 18"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.5838 10.0048C26.1387 9.44988 26.1387 8.55012 25.5838 7.99516L18.0048 0.416217C17.4499 -0.138739 16.5501 -0.138739 15.9952 0.416217C15.4402 0.97117 15.4402 1.87093 15.9952 2.42589L21.1482 7.57895L1.84211 7.57895C1.05728 7.57895 0.421055 8.21517 0.421055 9C0.421055 9.78482 1.05728 10.4211 1.84211 10.4211L21.1482 10.4211L15.9952 15.5741C15.4402 16.1291 15.4402 17.0288 15.9952 17.5838C16.5501 18.1387 17.4499 18.1387 18.0048 17.5838L25.5838 10.0048Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default Arrow
