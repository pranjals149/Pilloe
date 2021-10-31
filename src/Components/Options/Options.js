import React from 'react'
import { useHistory } from "react-router-dom"

import "./Options.css"

function Options() {

    const history = useHistory()

    return (
        <div className="options">
            <div class="options__card" onClick={() => history.push("/create")}>
                <img src="https://cdn.pixabay.com/photo/2018/03/30/22/05/teamwork-3276682_960_720.jpg" alt="Avatar" style={{ width: "100%" }} />
                <div class="options__container">
                    <h2><b>CREATE A SESSION</b></h2>
                </div>
            </div>

            <div class="options__card">
                <img src="https://cdn.pixabay.com/photo/2018/03/31/08/47/figure-3277570_960_720.jpg" alt="Avatar" style={{ width: "100%" }} />
                <div class="options__container">
                    <h2><b>JOIN A SESSION</b></h2>
                </div>
            </div>
        </div>
    )
}

export default Options
