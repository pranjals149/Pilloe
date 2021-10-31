import React from 'react'
import Calendar from 'rc-year-calendar';
import { useHistory } from 'react-router-dom';
import { Button } from "@material-ui/core"
import Sidebar from "../Sidebar/Sidebar"

function Calender() {
    const history = useHistory()

    return (
        <div className="calendar">

            <div style={{ display: "flex" }}>
                <Sidebar />
                <Calendar />
            </div>

            <div className="calendar__button" style={{
                textAlign: "center",
                marginTop: "40px"
            }}>
                <Button variant="contained" color="primary" onClick={() => history.push(`/dashboard/${localStorage.getItem("Name")}`)}>Go back to Dashboard</Button>
            </div>
        </div>
    )
}

export default Calender
