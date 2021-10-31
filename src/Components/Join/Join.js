import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@material-ui/core'
import { Stack } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ReactTimeago from 'react-timeago'
import { db } from '../../firebase'

import "./Join.css"
import JoinButton from './JoinButton'

function Join() {

    const history = useHistory()

    const [sessions, setSessions] = useState([])

    useEffect(() => {
        db
            .collection("createdSessions")
            .orderBy("time", "desc")
            .onSnapshot((snapshot) => {
                setSessions(snapshot.docs.map((doc) => ({ id: doc.id, sessions: doc.data() })))
            })
    }, [])

    return (
        <div>
            <div>
                {/* Hero unit */}
                <Box
                    sx={{
                        color: "white",
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="white"
                            gutterBottom
                        >
                            Join a created session
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained" color="primary" onClick={() => history.push("/options")}>Want to Create a session ?</Button>
                        </Stack>
                    </Container>

                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {sessions.map((session) => (
                            <Grid item key={session} xs={12} sm={6} md={4} style={{ padding: "10px" }}>
                                <Card
                                    style={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        backgroundColor: "rgba(0,0,0,0.3)",
                                        color: "white",
                                        borderRadius: "20px"
                                    }}
                                >
                                    <CardContent sx={{
                                        flexGrow: 1,
                                        backgroundColor: "rgba(0,0,0,0.3)",
                                        color: "white",
                                    }}
                                    >
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <p>Name of the session - <strong>{session.sessions.sessionName}</strong></p>
                                        </div>

                                        <Typography gutterBottom variant="h5" component="h2">
                                            Session ID - <strong>{session.sessions.sessionId}</strong>
                                        </Typography>

                                        <div>
                                            <p>
                                                Name of the creator - <strong>{session.sessions.name}</strong>
                                            </p>
                                        </div>

                                        <div className="announce__lower">
                                            <Typography>
                                                Email of the creator - <strong>{session.sessions.email}</strong>
                                            </Typography>

                                            <Typography className="announce__time">
                                                <ReactTimeago
                                                    date={new Date(session.sessions.time?.toDate()).toUTCString()}
                                                />
                                            </Typography>
                                        </div>
                                    </CardContent>

                                    <JoinButton
                                        sessionName={session.sessions.sessionName}
                                        sessionId={session.sessions.sessionId}
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Join
