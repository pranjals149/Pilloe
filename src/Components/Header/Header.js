import { Avatar } from '@mui/material'
import React from 'react'

import "./Header.css"

function Header() {
    return (
        <div className="header">
            <div className="header__nameContainer">
                <img src="/images/p.png" alt="" />
                <h4>PILLOE</h4>
            </div>
            <Avatar />
        </div>
    )
}

export default Header
