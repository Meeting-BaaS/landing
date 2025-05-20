// components/LinkPreview.tsx
import React from 'react'

interface LinkPreviewProps {
    url: string
    title: string
    description: string
    imageUrl?: string
}

const LinkPreview: React.FC<LinkPreviewProps> = ({
    url,
    title,
    description,
    imageUrl,
}) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-lg p-4 hover:shadow-lg transition-shadow"
        >
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-32 object-cover mb-2 rounded"
                />
            )}
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </a>
    )
}

export default LinkPreview
