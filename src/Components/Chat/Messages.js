import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import "./Chat.css"
import ReactTimeago from 'react-timeago';

function Messages() {

    const [messages, setMessages] = useState([])

    useEffect(() => {
        db
            .collection("Messages")
            .orderBy("time", "asc")
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => ({ id: doc.id, messages: doc.data() })))
            })
    }, [])

    return (
        <div className="messages">
            <div className="messages__header">
                <p>COMMUNITY CHAT</p>
            </div>

            <div className="messages__message">
                {messages.map((message) => (
                    <>
                        <div className="messages__messageContainer">
                            <KeyboardArrowRightIcon />
                            <p>{message.messages.message}</p>
                        </div>
                        <p className="messages__sent">Sent by- Pranjal Srivastava</p>
                        <div className="messages__time">
                            <ReactTimeago
                                date={new Date(message.messages.time?.toDate()).toUTCString()}
                            />
                        </div>
                    </>
                ))}
            </div>

        </div>
    )
}

export default Messages
