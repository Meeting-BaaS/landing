import React, { useEffect } from 'react'

const PricingRedirect = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.location.replace('https://pricing.meetingbaas.com')
        }
    }, [])
    return null
}

export default PricingRedirect
