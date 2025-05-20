import React from 'react'
import { VisitedPagesProvider } from './src/components/Layout/VisitedPagesProvider'
import './src/styles/global.css'

export const wrapRootElement = ({ element }) => (
    <VisitedPagesProvider>{element}</VisitedPagesProvider>
)
