import React from 'react'
import { HyperLink } from '../../atoms/Hyperlink'

export const NavLink = (props: {
    onClick?: () => void
    linkName?: string
    to?: string
    isDisabled?: boolean
    isExternal?: boolean
}) => {
    const linkStyle: React.CSSProperties = {
        textTransform: 'uppercase',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: '0.5rem 0.75rem',
        color: 'inherit',
    }

    const activeStyle: React.CSSProperties = props.isDisabled
        ? {}
        : {
              textDecorationLine: 'none',
              // textUnderlineOffset: '40px',
          }

    return (
        <div className="font-sansCondensed lg:block w-full lg:min-w-fit text-slate-900 flex flex-row font-bold hover:underline hover:underline-offset-4 justify-center cursor-pointer text-base lg:text-md xl:text-lg 2xl:text-xl">
            <HyperLink
                // onClick={props.onClick}
                textContent={props.linkName ?? ''}
                link={`${props.to ?? ''}`}
                style={{ ...linkStyle, ...activeStyle }}
                newWindow={props.isExternal}
            />
        </div>
    )
}
