import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setUserLoginDetails } from '../../features/user/userSlice';
import { auth, provider } from '../../firebase';

import "./HomePage.css"

function HomePage() {

    const history = useHistory()
    const dispatch = useDispatch()

    const googleAuth = () => {
        auth.signInWithPopup(provider)
            .then((res) => {
                history.push('/options')
                dispatch(
                    setUserLoginDetails({
                        id: res.user.uid,
                        name: res.user.displayName,
                        email: res.user.email,
                        photo: res.user.photoURL
                    })
                )

            })
            .catch((err) => toast.error(err));
    }

    return (
        <div className="home">
            <div className="home__heading">
                <h1>WELCOME TO PILLOE</h1>
            </div>

            <div className="home__buttonContainer">
                <Button color="primary" variant="contained" onClick={googleAuth}>Sign In to get started</Button>
            </div>
        </div>
    )
}

export default HomePage
