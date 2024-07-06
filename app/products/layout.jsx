"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

const Layout = ({ children }) => {
    const path = usePathname()
    return (
        <div>
            <h1>path = {path}</h1>
            {children}
        </div>
    )
}

export default Layout
