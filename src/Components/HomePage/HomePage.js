import { Button } from '@material-ui/core'
import React from 'react'

import "./HomePage.css"

function HomePage() {
    return (
        <div className="home">
            <div className="home__heading">
                <h1>WELCOME TO PILLOE</h1>
            </div>

            <div className="home__buttonContainer">
                <Button color="primary" variant="contained">Sign In to get started</Button>
            </div>
        </div>
    )
}

export default HomePage
