import React from 'react'

// Adjusting the component to accept a className prop
const ArrowStroke = ({ size = 24, className = '' }) => {
    const height = size * (16 / 24) // Maintain aspect ratio

    return (
        <svg
            className={className} // Apply the className prop
            width={size} // You can still control the size directly
            height={height}
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.4702 1.33438C24.1546 1.98855 24.1792 3.07369 23.525 3.75813L13.2393 14.5198C12.9158 14.8582 12.4681 15.0496 12 15.0496C11.5319 15.0496 11.0842 14.8582 10.7607 14.5198L0.475008 3.75813C-0.179154 3.07369 -0.154613 1.98855 0.52982 1.33438C1.21426 0.68022 2.2994 0.70476 2.95357 1.3892L12 10.8543L21.0464 1.3892C21.7006 0.704761 22.7857 0.680221 23.4702 1.33438Z"
                fill="currentColor" // Use currentColor to make fill color inherit from parent
            />
        </svg>
    )
}

export default ArrowStroke
