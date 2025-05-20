import React from 'react'
import { CheckSimple } from '../../svg/CheckSimple'

export const PricingDetails = () => {
    return (
        <div
            id="DetailedFeatures"
            className=" snap-start max-w-screen-xl mx-auto w-full  px-4 py-8 lg:py-28 mt-[60px] items-center flex flex-row"
        >
            <div className="flex overflow-x-scroll rounded-lg mx-auto">
                <table className="min-w-full divide-y table-fixed ">
                    <thead className="bg-neutral-900 font-sansCondensed text-md md:text-xl lg:text-xl 2xl:text-3xl">
                        <tr>
                            <th
                                scope="col"
                                className="p-4 text-left font-medium text-primary-500 text-md md:text-xl lg:text-xl 2xl:text-3xl uppercase "
                            >
                                Features
                            </th>
                            <th
                                scope="col"
                                className="p-4 text-center font-medium text-primary-500 text-md md:text-xl lg:text-xl 2xl:text-3xl uppercase "
                            >
                                Flat $0.69 / hour
                            </th>
                            <th
                                scope="col"
                                className="p-4 text-center font-medium text-primary-500 text-md md:text-xl lg:text-xl 2xl:text-3xl uppercase "
                            >
                                Partner Plans
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-neutral-700 ">
                        <TableRow
                            feature="Pricing / hour"
                            payAsYouGo="0.69"
                            customContract="Starting at $0.5"
                        />
                        <TableRow
                            feature="Compatibility with Zoom, Microsoft Teams, and Google Meet"
                            payAsYouGo={true}
                            customContract={true}
                        />
                        <TableRow
                            feature="Transcription - powered by Gladia"
                            payAsYouGo={true}
                            customContract="Optional"
                        />
                        <TableRow
                            feature="Summarization - powered by Gladia"
                            payAsYouGo={true}
                            customContract="Optional"
                        />
                        <TableRow
                            feature="Custom bot display name"
                            payAsYouGo={true}
                            customContract={true}
                        />
                        <TableRow
                            feature="Custom bot image"
                            payAsYouGo={true}
                            customContract={true}
                        />
                        <TableRow
                            feature="Custom bot chat message"
                            payAsYouGo={true}
                            customContract={true}
                        />
                        <TableRow
                            feature="Recording file after the call"
                            payAsYouGo={true}
                            customContract={true}
                        />
                        <TableRow
                            feature="Meeting metadata: Title, Participants, ..."
                            payAsYouGo={true}
                            customContract={true}
                        />
                        <TableRow
                            feature="Outlook and Google Calendar integration for your end-users"
                            payAsYouGo={false}
                            customContract={true}
                        />
                        <TableRow
                            feature="99.9% SLA"
                            payAsYouGo={true}
                            customContract={true}
                        />
                        <TableRow
                            feature="Rate limit"
                            payAsYouGo="5 concurrent bots"
                            customContract="Custom"
                        />
                        <TableRow
                            feature="Platform Fee"
                            payAsYouGo="$0"
                            customContract="$300"
                        />
                        <TableRow
                            feature="Signed DPA"
                            payAsYouGo={false}
                            customContract={true}
                        />
                        <TableRow
                            feature="Support & Co-Development"
                            payAsYouGo={false}
                            customContract={true}
                        />
                        <TableRow
                            feature="Use your own transcription API"
                            payAsYouGo={false}
                            customContract={true}
                        />
                        <TableRow
                            feature="Whisper Transcription with Language Recognition"
                            payAsYouGo="Not available."
                            customContract="From $0.19 / hour"
                        />

                        <TableRow
                            feature="Optional: use our servers to store your recordings."
                            payAsYouGo="Not available."
                            customContract="Additional $0.1 / hour"
                        />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// const wrapGladiaWithLink = (text: string) => {
//     if (text.includes('Gladia')) {
//         return (
//             <a
//                 href="https://www.gladia.io/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-primary-500 hover:underline"
//             >
//                 {text}
//             </a>
//         )
//     }
//     return text
// }
// const wrapGladiaWithLink = (text: string) => {
//     const words = text.split(/(\s+)/)
//     return words.map((word, index) => {
//         if (word.toLowerCase().trim() === 'gladia') {
//             return (
//                 <a
//                     key={index}
//                     href="https://www.gladia.io/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-primary-500 hover:underline"
//                 >
//                     {word}
//                 </a>
//             )
//         }
//         return word
//     })
// }
// const wrapGladiaWithLink = (text: string) => {
//     const words = text.split(/(\s+)/)
//     return words.map((word, index) => {
//         if (word.toLowerCase().trim() === 'gladia') {
//             return (
//                 <a
//                     key={index}
//                     href="https://www.gladia.io/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-primary-500 hover:underline"
//                 >
//                     {'  )a' + word}
//                 </a>
//             )
//         }
//         return word
//     })
// }

// result.push(words[i - 1].concat('‎ '))

// const lowerString(text:string) {}
// TODOthis function exists but fuck it faster to code
export const wrapWordsWithLinks = (text: string) => {
    const words = text.split(/(\s+)/)
    const result = []

    for (let i = 0; i < words.length; i++) {
        const lowerCaseWord = words[i].toLowerCase()
        if (
            lowerCaseWord === 'gladia' ||
            (lowerCaseWord === 'api' && words[i - 2].toLowerCase() === 'our')
        ) {
            // Add the previous space if it exists
            if (i > 0 && words[i - 1].trim() === '') {
                result.push(words[i - 1].concat('‎ '))
            }

            const href =
                lowerCaseWord === 'gladia'
                    ? 'https://www.gladia.io/'
                    : 'https://doc.meetingbaas.com/api-reference#bots-meeting_data'

            result.push(
                <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:underline"
                >
                    {/* {if } */}
                    {/* {words[i - 2] + words[i].concat(' ').concat('‎ ')} */}
                    {words[i].concat(' ').concat('‎ ')}
                </a>,
            )

            // Add the following space if it exists
            if (i < words.length - 1 && words[i + 1].trim() === '') {
                result.push(words[i + 1])
                i++ // Skip the next iteration since we've handled the space
            }
        } else {
            result.push(words[i])
        }
    }

    return result
}

const TableRow = (props: {
    feature: string
    payAsYouGo: boolean | string
    customContract: string | boolean
}) => {
    return (
        <tr className="bg-neutral-500 even:bg-neutral-700 text-neutral-50">
            <td className="p-2 text-xs lg:text-base flex items-center font-medium pl-6">
                {/* <div
                    className="hidden lg:block w-1 h-1 m-2 my-auto  bg-neutral-50 rounded-full"
                    aria-hidden="true"
                ></div> */}
                {/* {props.feature} */}
                {wrapWordsWithLinks(props.feature)}
            </td>
            <td className="p-2 text-xs lg:text-base text-center  whitespace-nowrap">
                {props.payAsYouGo === true ? (
                    <div className="w-7 mx-auto">
                        <CheckSimple />
                    </div>
                ) : (
                    props.payAsYouGo || '-'
                )}
            </td>
            <td className="p-2 text-xs lg:text-base text-center flex-row whitespace-nowrap">
                {props.customContract === true ? (
                    <div className="w-7 mx-auto">
                        <CheckSimple />
                    </div>
                ) : (
                    props.customContract || '-'
                )}
            </td>
        </tr>
    )
}
