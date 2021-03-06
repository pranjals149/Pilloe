import React from 'react'
import { useHistory } from 'react-router-dom';
import Sidebar from "../Sidebar/Sidebar"

import "./Dashboard.css";

function Dashboard() {

    const history = useHistory()

    return (
        <div className="dashboard">

            <Sidebar />

            <div className="dashboard__contain">
                <div className="dashboard__upper">
                    <div class="dashboard__card" onClick={() => history.push("/whiteboard")}>
                        <img src="https://cdn.pixabay.com/photo/2020/02/24/16/06/whiteboard-4876651_960_720.jpg" alt="Avatar" style={{ width: "100%" }} />
                        <div class="dashboard__container">
                            <p><b>WHITEBOARD</b></p>
                        </div>
                    </div>

                    <div class="dashboard__card" onClick={() => history.push("/announcements")}>
                        <img src="https://cdn.pixabay.com/photo/2017/12/23/23/28/businessman-3036181_960_720.jpg" alt="Avatar" style={{ width: "100%" }} />
                        <div class="dashboard__container">
                            <p><b>ANNOUNCEMENTS</b></p>
                        </div>
                    </div>

                    <div class="dashboard__card" onClick={() => history.push("/files")}>
                        <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png" alt="Avatar" style={{ width: "100%" }} />
                        <div class="dashboard__container">
                            <p><b>UPLOAD FILES</b></p>
                        </div>
                    </div>

                    <div class="dashboard__card" onClick={() => history.push("/tasks")}>
                        <img src="https://cdn.pixabay.com/photo/2016/03/31/18/39/icons-1294536_960_720.png" alt="Avatar" style={{ width: "100%" }} />
                        <div class="dashboard__container">
                            <p><b>TASK MANAGEMENT</b></p>
                        </div>
                    </div>
                </div>

                <div className="dashboard__lower">
                    <div class="dashboard__card" onClick={() => history.push("/chat")}>
                        <img src="https://cdn.pixabay.com/photo/2021/10/10/18/59/online-6698352_960_720.png" alt="Avatar" style={{ width: "100%" }} />
                        <div class="dashboard__container">
                            <p><b>COMMUNITY CHAT</b></p>
                        </div>
                    </div>

                    <div class="dashboard__card">
                        <a href="https://meet.google.com/new" target="_blank" rel="noreferrer" style={{
                            color: "white",
                            textDecoration: "none"
                        }}>
                            <img src="https://cdn.pixabay.com/photo/2017/09/28/22/14/speech-icon-2797263_960_720.png" alt="Avatar" style={{ width: "100%" }} />
                            <div class="dashboard__container">
                                <p><b>GOOGLE MEET</b></p>
                            </div>
                        </a>
                    </div>

                    <div class="dashboard__card" onClick={() => history.push("/calender")}>
                        <img src="https://cdn.pixabay.com/photo/2017/06/10/06/39/calender-2389150_960_720.png" alt="Avatar" style={{ width: "100%" }} />
                        <div class="dashboard__container">
                            <p><b>CALENDER</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
