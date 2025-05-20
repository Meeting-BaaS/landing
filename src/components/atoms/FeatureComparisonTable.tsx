import React from 'react'
import { CheckSimple } from '../../svg/CheckSimple'

const featureComparisonData = [
    { feature: 'Zoom support', meetingBaas: true, recall: true },
    { feature: 'Microsoft Teams support', meetingBaas: true, recall: true },
    { feature: 'Google Meet support', meetingBaas: true, recall: true },
    { feature: 'Webex support', meetingBaas: false, recall: true },
    { feature: 'Slack support', meetingBaas: false, recall: true },
    // { feature: 'Real-time transcription', meetingBaas: true, recall: true },
    // { feature: 'Speaker diarization', meetingBaas: true, recall: true },
    // { feature: 'Multi-language support', meetingBaas: true, recall: false },
    // { feature: 'Custom vocabulary', meetingBaas: true, recall: false },
    // { feature: 'AI-powered summarization', meetingBaas: true, recall: false },
    // { feature: 'Access to meeting transcripts', meetingBaas: true, recall: true },
    { feature: 'Bot image display', meetingBaas: true, recall: true },
    { feature: 'Bot audio playback', meetingBaas: true, recall: true },
    { feature: 'SOC 2 compliance', meetingBaas: false, recall: true },
    { feature: 'HIPAA compliance', meetingBaas: false, recall: true },
    { feature: 'On-Premises deployment', meetingBaas: true, recall: false },
    { feature: 'Bot image display', meetingBaas: true, recall: true },
    { feature: 'Bot audio playback', meetingBaas: true, recall: true },
    { feature: 'Bot audio playback', meetingBaas: true, recall: true },
    { feature: 'Live video/audio streaming', meetingBaas: true, recall: true },
    { feature: 'Video/audio recording', meetingBaas: true, recall: true },
    { feature: 'Access to meeting chat', meetingBaas: true, recall: true },
    { feature: 'Programmatic chat messaging', meetingBaas: true, recall: true },
    { feature: 'Participant information', meetingBaas: true, recall: true },
    { feature: 'Current speaker detection', meetingBaas: true, recall: true },
    { feature: 'Join/leave event tracking', meetingBaas: true, recall: true },
    { feature: 'Screenshare event tracking', meetingBaas: true, recall: true },
    { feature: 'Open-source components', meetingBaas: true, recall: false },
]

interface ComparisonTableProps {
    data: Array<{
        feature: string
        [key: string]: boolean | string
    }>
    columns: Array<{
        key: string
        title: string
    }>
}
const ComparisonTable: React.FC<ComparisonTableProps> = ({ data, columns }) => {
    return (
        <div className="overflow-x-auto">
            <table
                className="w-full divide-y table-fixed bg-white"
                aria-labelledby="featureComparisonTitle"
            >
                <caption className="sr-only">
                    Feature Comparison between Meeting Baas and Recall.ai
                </caption>
                <thead className="bg-neutral-900 font-sansCondensed text-md md:text-xl lg:text-xl 2xl:text-3xl">
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.key}
                                scope={column.key === 'feature' ? 'col' : 'col'}
                                className="p-4 text-center font-medium text-primary-500 uppercase"
                            >
                                {column.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-neutral-700">
                    {data.map((item, index) => (
                        <tr
                            key={index}
                            className="bg-neutral-500 even:bg-neutral-700 text-neutral-50"
                        >
                            {columns.map((column, colIndex) =>
                                colIndex === 0 ? (
                                    <th
                                        key={column.key}
                                        scope="row"
                                        className="p-2 text-xs lg:text-base text-left"
                                    >
                                        <div className="flex items-center font-medium pl-6">
                                            {item[column.key]}
                                        </div>
                                    </th>
                                ) : (
                                    <td
                                        key={column.key}
                                        className="p-2 text-xs lg:text-base text-center"
                                    >
                                        <div className="flex justify-center">
                                            {typeof item[column.key] ===
                                            'boolean' ? (
                                                item[column.key] ? (
                                                    <div
                                                        className="w-7"
                                                        aria-label="Yes"
                                                    >
                                                        <CheckSimple />
                                                    </div>
                                                ) : (
                                                    <span aria-label="No">
                                                        ❌
                                                    </span>
                                                )
                                            ) : (
                                                item[column.key]
                                            )}
                                        </div>
                                    </td>
                                ),
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

const FeatureComparisonTable: React.FC = () => {
    const columns = [
        { key: 'feature', title: 'Feature' },
        { key: 'meetingBaas', title: 'Meeting Baas' },
        { key: 'recall', title: 'Recall.ai' },
    ]

    return (
        <div className="w-full  overflow-y-auto">
            <ComparisonTable data={featureComparisonData} columns={columns} />
        </div>
    )
}

export default FeatureComparisonTable
