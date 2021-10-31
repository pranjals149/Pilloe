import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import { db } from '../../firebase';
import { Button } from "@material-ui/core"
import "./Create.css"
import { toast } from 'react-toastify';
import firebase from "firebase"

const Create = () => {

    const history = useHistory();

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    const createSession = e => {
        e.preventDefault();

        if (!id.length) {
            toast.error("Please enter the Session ID to continue")
            return;
        }

        if (!name.length) {
            toast.error("Please enter the Session Name to continue")
            return;
        }

        if (!pass.length) {
            toast.error("Please enter the Session Password to continue")
            return;
        }

        db
            .collection("createdSessions")
            .add({
                "sessionId": id,
                "sessionName": name,
                "sessionPass": pass,
                "name": "Pranjal Srivastava",
                "email": "pranjals149@gmail.com",
                "time": firebase.firestore.FieldValue.serverTimestamp(),
            })

        localStorage.setItem("ID", id)
        localStorage.setItem("Name", name)

        setId("")
        setName("")
        setPass("")
        toast.success("Session created successfully");

        history.push(`/dashboard/${name}`);
    }

    return (
        <div className="create">
            <div className='create__container'>
                <h1>CREATE A SESSION</h1>

                <form>
                    <h5>Create a Session ID</h5>
                    <input type='text' value={id} onChange={e => setId(e.target.value)} />

                    <h5>Name of the session</h5>
                    <input type='text' value={name} onChange={e => setName(e.target.value)} />

                    <h5>Create a Passkey</h5>
                    <input type='password' value={pass} onChange={e => setPass(e.target.value)} />

                    <Button color="primary" variant="contained" fullWidth onClick={createSession}>Create</Button>
                </form>
            </div>
        </div>
    )
}

export default Create