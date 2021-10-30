import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import SendIcon from '@mui/icons-material/Send';
import firebase from "firebase"

import "./Chat.css"
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import Messages from './Messages';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Chat() {

    const [msg, setMsg] = useState("")

    const handleSend = (e) => {

        e.preventDefault();

        if (!msg.length) {
            toast.error("Please enter a message to send")
            return;
        }

        db.collection("Messages").add({
            "name": "Pranjal Srivastava",
            "email": "pranjals149@gmail.com",
            "message": msg,
            "time": firebase.firestore.FieldValue.serverTimestamp()
        })

        setMsg("");
    }

    return (
        <div className="chat">
            <Sidebar />

            <div className="chat__container">
                {/* Left Side */}
                <div className="chat__leftSide">
                    <p>COMMUNITY CHAT</p>

                    <div className="chat__people">
                        <h4>PEOPLE IN THE CHAT</h4>
                        <p><ArrowRightAltIcon /> Person 1</p>
                        <p><ArrowRightAltIcon /> Person 2</p>
                        <p><ArrowRightAltIcon /> Person 3</p>
                        <p><ArrowRightAltIcon /> Person 4</p>
                        <p><ArrowRightAltIcon /> Person 5</p>
                        <p><ArrowRightAltIcon /> Person 6</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="chat__rightSide">
                    <div className="chat__rightChats">
                        <Messages />
                    </div>

                    <form className="chat__form">
                        <input type="text" placeholder="Type your message" value={msg} onChange={(e) => setMsg(e.target.value)} />

                        <SendIcon style={{ cursor: "pointer", marginLeft: "10px" }} onClick={handleSend} />
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Chat
