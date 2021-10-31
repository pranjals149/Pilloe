import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { db } from '../../firebase';
import firebase from "firebase"
import { useHistory } from 'react-router-dom';

function JoinButton({ sessionName, sessionId }) {

    const history = useHistory()

    const [open, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const joinSession = () => {
        if (!name.length) {
            toast.error("Please enter your name to continue")
            return;
        }

        if (!email.length) {
            toast.error("Please enter your email to continue")
            return;
        }

        if (!pass.length) {
            toast.error("Please enter the session passkey to continue")
            return;
        }

        db
            .collection("joinedSessions")
            .doc("pranjals149@gmail.com")
            .collection("joined")
            .add({
                "name": "Pranjal Srivastava",
                "email": "pranjals149@gmail.com",
                "sessionName": sessionName,
                "sessionId": sessionId,
                "time": firebase.firestore.FieldValue.serverTimestamp()
            })

        setName("")
        setEmail("")
        setPass("")

        toast.success(`Joined the session ${sessionName}`)
        history.push(`/dashboard/${sessionName}`)
    }

    return (
        <div>
            <Button onClick={handleClickOpen} color="primary" variant="contained" fullWidth>Enter into this session</Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Join this session</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Enter your Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        margin="dense"
                        id="name"
                        label="Enter your email"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        margin="dense"
                        id="name"
                        label="Enter the PassKey"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={joinSession}>Join Session</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default JoinButton
