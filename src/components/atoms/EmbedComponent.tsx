import React from 'react'

interface EmbedComponentProps {
    url: string
    width?: string
    height?: string
}

// export const EmbedComponent: React.FC<EmbedComponentProps> = ({ url, width = '100%', height = '500px' }) => {
//   return (
//     <div
//       dangerouslySetInnerHTML={{
//         __html: `<iframe src="${url}" width="${width}" height="${height}" frameborder="0" allowfullscreen></iframe>`,
//       }}
//     />
//   );
// };
// export const EmbedComponent: React.FC<EmbedComponentProps> = ({ url, width = '100%', height = '500px' }) => {
//   return (
//     <iframe
//       src={url}
//       width={width}
//       height={height}
//       frameBorder="0"
//       allowFullScreen
//       loading="lazy"
//       sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
//     />
//   );
// };

interface EmbedComponentProps {
    url: string
    title: string
    description: string
    imageUrl: string
}

export const EmbedComponent: React.FC<EmbedComponentProps> = ({
    url,
    title,
    description,
    imageUrl,
}) => {
    return (
        <div className="embed-preview">
            <img
                src={imageUrl}
                alt={title}
                className="w-full h-40 object-cover"
            />
            <h3 className="text-lg font-bold mt-2">{title}</h3>
            <p className="text-sm mt-1">{description}</p>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
            >
                Visit {new URL(url).hostname}
            </a>
        </div>
    )
}
