import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { ReactNode } from 'react'

import { SmoothCorners } from 'react-smooth-corners'
import { UseAllPictures } from '../hooks/UseAllPictures'

interface PictureProps {
    picture: any
    className?: string
    children?: ReactNode
    alt: string
    legend?: string
    useSmoothCorners?: boolean
    smoothBorder?: boolean
    smoothBorderColor?: string
    smoothBorderSize?: string
}

export const Picture: React.FC<PictureProps> = ({
    picture,
    className = '',
    children,
    alt,
    legend,
    useSmoothCorners = false,
    smoothBorder = false,
    smoothBorderColor = 'bg-white',
    smoothBorderSize = 'p-[2px]',
}) => {
    console.log('picture', picture)
    console.log('picture', picture)
    const image = getImage(UseAllPictures(picture)) // Assuming `UseAllPictures` is not needed

    const imageComponent = image && (
        <GatsbyImage
            objectFit="fill"
            alt={alt}
            draggable={false}
            image={image}
            className="w-full object-center bg-cover bg-no-repeat "
        >
            {children}
        </GatsbyImage>
    )

    return (
        <div
            className={`object-center grid content-center object-contain select-none overflow-x-clip overflow-y-visible ${className}`}
        >
            {image &&
                (useSmoothCorners ? (
                    <SmoothCorners
                        corners="12, 3"
                        borderRadius="12px"
                        className={`${smoothBorderColor} ${smoothBorder}  ${smoothBorderSize}`}
                    >
                        <SmoothCorners corners="12, 3" borderRadius="12px">
                            {imageComponent}
                        </SmoothCorners>
                    </SmoothCorners>
                ) : (
                    imageComponent
                ))}
            {legend && <p>{legend}</p>}
        </div>
    )
}
