import React, { useEffect, useState } from 'react'

export const Button = ({
    name,
    onClick,
    buttonClass = '',
    color,
    textColor,
    flatbutton = false,
}: {
    name: string
    onClick: () => void
    buttonClass?: string
    color?: 'green' | 'black' | 'white'
    textColor?: string
    flatbutton?: boolean
}) => {
    const [isClicked, setIsClicked] = useState(false)

    const toggleAnimation = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div
            className={`${buttonClass} z-10 relative font-sansCondensed overflow-y-visible min-w-fit min-h-fit h-fit`}
        >
            <button
                onClick={() => {
                    onClick()
                    toggleAnimation()
                }}
                className={`hover:cursor-pointer font-bold min-w-fit text-base lg:text-lg 2xl:text-xl px-4 lg:px-5 xl:px-6 2xl:px-7 max-h-fit py-[4px] 2xl:py-[10px] font-sansCondensed flex flex-row gap-2 items-center text-md xl:text-lg justify-center w-full rounded-full border ${
                    color === 'green'
                        ? 'bg-primary-500 text-neutral-700 border-primary-700'
                        : color === 'black'
                          ? 'bg-neutral-700 text-primary-500 border-primary-500'
                          : 'bg-neutral-50 text-neutral-700 border-neutral-400' // New 'white' option
                } ${
                    isClicked && !flatbutton
                        ? 'duration-100 translate-y-[6px]'
                        : 'hover:translate-y-[4px] transition-transform duration-300 ease-in-out'
                }
${flatbutton && 'hover:scale-105'}`}
            >
                <span>{name}</span>
            </button>

            {!flatbutton && (
                <div
                    className={`absolute top-[6px] -z-20 w-full h-full rounded-full overflow-hidden border ${
                        color === 'white'
                            ? 'border-primary-700'
                            : 'border-primary-500'
                    } block ${
                        color === 'white' ? 'bg-slate-700' : 'bg-slate-700'
                    }`}
                >
                    <div
                        className={`w-full h-full ${
                            color === 'white'
                                ? 'bg-primary-700'
                                : 'bg-primary-700'
                        } p-4 flex`}
                    ></div>
                </div>
            )}
        </div>
    )
}
export const RoundNumberedButton = ({
    number,
    targetPage,
    currentPage,
    buttonClass = '',
    color = 'black',
    size = 'md',
    isActive = false,
    onClick,
}: {
    number: number
    targetPage: string
    currentPage: string
    buttonClass?: string
    color?: 'green' | 'black' | 'white'
    size?: 'sm' | 'md' | 'lg'
    isActive?: boolean
    onClick?: () => void
}) => {
    const [visitedPages, setVisitedPages] = useState<string[]>([])

    const sizeClasses = {
        sm: 'w-8 h-8 text-sm',
        md: 'w-12 h-12 text-base',
        lg: 'w-16 h-16 text-lg',
    }

    const isCurrentPage = targetPage === currentPage
    const hasBeenVisited = visitedPages.includes(targetPage)

    useEffect(() => {
        const storedPages = localStorage.getItem('visitedPages')
        if (storedPages) {
            setVisitedPages(JSON.parse(storedPages))
        }
        if (isCurrentPage && storedPages && storedPages.includes(targetPage)) {
            addVisitedPage(currentPage)
        }
    }, [])

    const addVisitedPage = (page: string) => {
        setVisitedPages((prev) => {
            if (!prev.includes(page)) {
                const newPages = [...prev, page]
                localStorage.setItem('visitedPages', JSON.stringify(newPages))
                return newPages
            }
            return prev
        })
    }

    const commonProps = {
        name: number.toString(),
        buttonClass: `${buttonClass} ${
            sizeClasses[size]
        } rounded-full p-0 flex items-center justify-center 
    ${isActive ? 'bg-black text-white' : ''}
        `,
        color: color,
        flatbutton: isCurrentPage || hasBeenVisited,
    }

    return (
        <Button
            {...commonProps}
            onClick={() => {
                addVisitedPage(targetPage)
                onClick && onClick()
            }}
        />
    )
}

// export const RoundNumberedButton = ({
//     number,
//     targetPage,
//     currentPage,
//     buttonClass = '',
//     color = 'black',
//     size = 'md',
// }: {
//     number: number
//     targetPage: string
//     currentPage: string
//     buttonClass?: string
//     color?: 'green' | 'black' | 'white'
//     size?: 'sm' | 'md' | 'lg'
// }) => {
//     const [visitedPages, setVisitedPages] = useState<string[]>([])

//     const sizeClasses = {
//         sm: 'w-8 h-8 text-sm',
//         md: 'w-12 h-12 text-base',
//         lg: 'w-16 h-16 text-lg',
//     }

//     const isCurrentPage = targetPage === currentPage
//     const hasBeenVisited = visitedPages.includes(targetPage)

//     useEffect(() => {
//         const storedPages = localStorage.getItem('visitedPages')
//         if (storedPages) {
//             setVisitedPages(JSON.parse(storedPages))
//         }
//         if (isCurrentPage && storedPages && storedPages.includes(targetPage)) {
//             addVisitedPage(currentPage)
//         }
//     }, [])

//     const addVisitedPage = (page: string) => {
//         setVisitedPages((prev) => {
//             if (!prev.includes(page)) {
//                 const newPages = [...prev, page]
//                 localStorage.setItem('visitedPages', JSON.stringify(newPages))
//                 return newPages
//             }
//             return prev
//         })
//     }

//     const commonProps = {
//         name: number.toString(),
//         buttonClass: `${buttonClass} ${
//             sizeClasses[size]
//         } rounded-full p-0 flex items-center justify-center
//     ${isCurrentPage ? 'ring-2 ring-primary-500 ' : ''}

//         `,
//         color: color,
//         flatbutton: isCurrentPage || hasBeenVisited,
//     }

//     if (isCurrentPage) {
//         return <Button {...commonProps} onClick={() => {}} />
//     } else {
//         return (
//             <Link to={targetPage} onClick={() => addVisitedPage(targetPage)}>
//                 <Button {...commonProps} onClick={() => {}} />
//             </Link>
//         )
//     }
// }
