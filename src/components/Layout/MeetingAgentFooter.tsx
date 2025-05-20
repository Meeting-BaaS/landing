import { navigate } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { RoundNumberedButton } from '../atoms/Button'

export const MeetingAgentFooter: React.FC<{ path: string }> = ({ path }) => {
    const pages = [
        { number: 0, path: '/meeting-agents' },
        { number: 1, path: '/meeting-agents-dial' },
        // { number: 2, path: '/white-labelling-features' },
        // { number: 2, path: '/creating-conversation-recordings' },
        // { number: 3, path: '/analyzing-conversation-recordings' },
        // { number: 4, path: '/integrating-conversation-recordings' },
        // { number: 5, path: '/our-partnership' },
    ]

    const [currentPageNumber, setCurrentPageNumber] = useState(
        pages.find((page) => page.path === path)?.number || 1,
    )

    const [visitedPages, setVisitedPages] = useState<string[]>([])

    useEffect(() => {
        // Load visited pages from localStorage
        const storedPages = localStorage.getItem('visitedPages')
        if (storedPages) {
            setVisitedPages(JSON.parse(storedPages))
        }

        // Mark current page as visited
        addVisitedPage(path)
    }, [path])

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

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') {
                setCurrentPageNumber((prevNumber) => {
                    const nextNumber =
                        prevNumber < pages.length ? prevNumber + 1 : 1
                    const nextPage = pages.find(
                        (page) => page.number === nextNumber,
                    )
                    if (nextPage) {
                        navigate(nextPage.path)
                        addVisitedPage(nextPage.path)
                    }
                    return nextNumber
                })
            } else if (event.key === 'ArrowLeft') {
                setCurrentPageNumber((prevNumber) => {
                    const nextNumber =
                        prevNumber > 1 ? prevNumber - 1 : pages.length
                    const nextPage = pages.find(
                        (page) => page.number === nextNumber,
                    )
                    if (nextPage) {
                        navigate(nextPage.path)
                        addVisitedPage(nextPage.path)
                    }
                    return nextNumber
                })
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [pages])

    const handleButtonClick = (targetPath: string, number: number) => {
        setCurrentPageNumber(number)
        addVisitedPage(targetPath)
        navigate(targetPath)
    }

    return pages.map(({ number, path: targetPage }) => (
        <RoundNumberedButton
            key={number}
            number={number}
            color={number === currentPageNumber ? 'black' : 'white'}
            size="md"
            targetPage={targetPage}
            currentPage={path}
            isActive={number === currentPageNumber}
            onClick={() => handleButtonClick(targetPage, number)}
        />
    ))
}
