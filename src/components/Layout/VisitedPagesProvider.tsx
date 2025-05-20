import React, { createContext, useContext, useEffect, useState } from 'react'

const VisitedPagesContext = createContext<{
    visitedPages: string[]
    addVisitedPage: (page: string) => void
}>({
    visitedPages: [],
    addVisitedPage: () => {},
})

export const VisitedPagesProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [visitedPages, setVisitedPages] = useState<string[]>([])

    useEffect(() => {
        const storedPages = localStorage.getItem('visitedPages')
        if (storedPages) {
            setVisitedPages(JSON.parse(storedPages))
        }
    }, [])

    const addVisitedPage = (page: string) => {
        setVisitedPages((prev) => {
            const newPages = [...new Set([...prev, page])]
            localStorage.setItem('visitedPages', JSON.stringify(newPages))
            return newPages
        })
    }

    return (
        <VisitedPagesContext.Provider value={{ visitedPages, addVisitedPage }}>
            {children}
        </VisitedPagesContext.Provider>
    )
}

export const useVisitedPages = () => useContext(VisitedPagesContext)
