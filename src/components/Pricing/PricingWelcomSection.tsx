import React from 'react'
import { PricingAsset } from '../../svg/PricingAsset'
import { registerRedirect } from '../../utils/router'

export const PricingWelcomSection = () => {
    return (
        <div
            id="top"
            className="snap-mandatory snap-y max-w-screen-xl  lg:max-w-screen-md 2xl:max-w-screen-lg mx-auto lg:px-[60px] w-full 2xl:max-h-screen items-center flex flex-col lg:flex-row justify-around gap-8 py-16 lg:py-32 mt-[60px]"
        >
            <div
                className="p-8 max-w-full w-[600px] cursor-pointer"
                onClick={registerRedirect}
            >
                <PricingAsset />
            </div>
        </div>
    )
}
