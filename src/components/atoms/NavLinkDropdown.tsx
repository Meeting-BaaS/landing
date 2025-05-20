import { useI18next } from 'gatsby-plugin-react-i18next'
import React, { useState } from 'react'
import { HyperLink } from './Hyperlink'

export type DropdownList = {
    id: string
    icon?: JSX.Element
    text: string
    lng?: string
}

export const NavLinkDropdown = (props: {
    linkName: string
    links: DropdownList[]
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useI18next()
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <div
            className="lg:relative lg:block lg:text-left lg:min-w-fit w-full justify-between"
            onMouseOver={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div
                className="font-sansCondensed lg:block w-full lg:min-w-fit neutral-700  flex flex-row  hover:underline hover:underline-offset-4 justify-center cursor-pointer text-base lg:text-lg 2xl:text-xl"
                onMouseOver={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <HyperLink
                    link={`${props.links[1].id}`}
                    textContent={props.linkName}
                    style={{
                        textTransform: 'uppercase',
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        padding: '0.5rem 0.75rem',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        color: 'inherit',
                    }}
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                />

                <div
                    className={`lg:pt-2 pr-2 lg:pr-0 lg:absolute lg:origin-center lg:z-10 lg:mt-0 focus:outline-none cursor-pointer lg:flex-grow ${
                        !isOpen ? 'hidden' : ''
                    }`}
                >
                    <div className="min-w-fit w-full lg:w-80 lg:rounded-lg lg:bg-neutral-50 lg:ring-1 ring-neutral-400 focus:outline-none">
                        <div
                            className="p-1 flex flex-col gap-4 lg:gap-2 max-h-96 overflow-y-scroll"
                            role="none"
                        >
                            {props.links.map((link, i) => (
                                <HyperLink
                                    key={i}
                                    link={`${link.id}`}
                                    textContent={t(link.text)}
                                    style={{
                                        textDecoration: 'none',
                                        // color: hoveredIndex === i ? '#fff' : 'inherit',
                                        // backgroundColor: hoveredIndex === i ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                                        backgroundColor:
                                            hoveredIndex === i
                                                ? 'rgba(0, 0, 0, 0.1)'
                                                : 'transparent',
                                        display: 'flex',
                                        padding: '0.5rem 0.75rem',
                                        fontSize: '1.125rem',
                                        borderRadius: '0.5rem',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        transition:
                                            'background-color 0.3s, color 0.3s',
                                        color: 'inherit',
                                    }}
                                    onMouseEnter={() => setHoveredIndex(i)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
