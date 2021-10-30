import React from 'react'
import { useHistory } from 'react-router-dom'

import "./Sidebar.css"

function Sidebar() {
    const history = useHistory()

    return (
        <div className="sidebar">
            <img onClick={() => history.push("/whiteboard")} className="sidebar__image" src="https://cdn.pixabay.com/photo/2020/02/24/16/06/whiteboard-4876651_960_720.jpg" alt="" title="Whiteboard" />

            <img className="sidebar__image" src="https://cdn.pixabay.com/photo/2017/12/23/23/28/businessman-3036181_960_720.jpg" alt="" title="Announcements" onClick={() => history.push("/announcements")} />

            <img className="sidebar__image" src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png" alt="" title="Upload Files" onClick={() => history.push("/files")} />

            <img className="sidebar__image" src="https://cdn.pixabay.com/photo/2016/03/31/18/39/icons-1294536_960_720.png" alt="" title="Task Management" onClick={() => history.push("/tasks")} />

            <img className="sidebar__image" src="https://cdn.pixabay.com/photo/2021/10/10/18/59/online-6698352_960_720.png" alt="" title="Community Chat" onClick={() => history.push("/chat")} />

            <a href="https://meet.google.com/new" target="_blank" rel="noreferrer" style={{
                color: "white",
                textDecoration: "none"
            }}><img className="sidebar__image" src="https://cdn.pixabay.com/photo/2017/09/28/22/14/speech-icon-2797263_960_720.png" alt="" title="Google Meet" /></a>

            <img className="sidebar__image" src="https://cdn.pixabay.com/photo/2017/06/10/06/39/calender-2389150_960_720.png" alt="" title="View Calendar" onClick={() => history.push("/calender")} />

            <img className="sidebar__image" src="https://cdn.pixabay.com/photo/2018/01/31/05/43/web-3120321_960_720.png" alt="" title="Dashboard" onClick={() => history.push("/dashboard")} />

        </div>
    )
}

export default Sidebar