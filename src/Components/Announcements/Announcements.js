import React, { useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { db } from "../../firebase";
import firebase from "firebase"

import "./Announcements.css"
import { toast } from 'react-toastify';
import ReactTimeago from 'react-timeago';
import Buttons from './Buttons';
import { useHistory } from 'react-router-dom';

const theme = createTheme();

function Announcements() {

    const history = useHistory()

    const [open, setOpen] = React.useState(false);
    const [msg, setMsg] = React.useState("");
    const [announcements, setAnnouncements] = React.useState([]);
    const [subject, setSubject] = React.useState("")

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        db
            .collection("announcements")
            .orderBy("time", "desc")
            .onSnapshot((snapshot) => {
                setAnnouncements(snapshot.docs.map((doc) => ({ id: doc.id, announcements: doc.data() })))
            })
    }, [])

    const handleAnnounce = () => {
        if (!subject.length) {
            toast.error("Please enter your subject to continue")
            return;
        }

        if (!msg.length) {
            toast.error("Please enter your announcement to continue")
            return;
        }

        db.collection("announcements").add({
            "name": "Pranjal Srivastava",
            "email": "pranjals149@gmail.com",
            "subject": subject,
            "announcement": msg,
            "time": firebase.firestore.FieldValue.serverTimestamp()
        })

        setMsg("")
        handleClose()
    }

    return (
        <div className="announcements">
            <Sidebar />

            <div className="announcements__container">
                <ThemeProvider theme={theme}>

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
                                    View or make announcements
                                </Typography>
                                <Stack
                                    sx={{ pt: 4 }}
                                    direction="row"
                                    spacing={2}
                                    justifyContent="center"
                                >
                                    <Button variant="contained" onClick={handleClickOpen}>Make an Announcement</Button>
                                    <Button variant="contained" onClick={() => history.push(`/dashboard/${localStorage.getItem("Name")}`)}>Go Back to Dashboard</Button>
                                </Stack>
                            </Container>

                            <Dialog open={open} onClose={handleClose}>
                                <DialogTitle>Make an Announcement</DialogTitle>
                                <DialogContent>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Subject of Announcement"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />

                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Your announcement"
                                        type="text"
                                        fullWidth
                                        variant="standard"
                                        value={msg}
                                        onChange={(e) => setMsg(e.target.value)}
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                    <Button onClick={handleAnnounce}>Announce</Button>
                                </DialogActions>
                            </Dialog>

                        </Box>
                        <Container sx={{ py: 8 }} maxWidth="md">
                            <Grid container spacing={4}>
                                {announcements.map((announcement) => (
                                    <Grid item key={announcement} xs={12} sm={6} md={4} style={{ padding: "10px" }}>
                                        <Card
                                            sx={{
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                backgroundColor: "rgba(0,0,0,0.3)",
                                                color: "white",
                                                borderRadius: "20px"
                                            }}
                                        >
                                            <CardContent sx={{ flexGrow: 1 }}>
                                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                    <p>{announcement.announcements.name}</p>
                                                </div>

                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {announcement.announcements.subject}
                                                </Typography>

                                                <div>
                                                    <p>
                                                        Announcement - <strong>{announcement.announcements.announcement}</strong>
                                                    </p>
                                                </div>

                                                <div className="announce__lower">
                                                    <Typography>
                                                        Email - <strong>{announcement.announcements.email}</strong>
                                                    </Typography>

                                                    <Typography className="announce__time">
                                                        <ReactTimeago
                                                            date={new Date(announcement.announcements.time?.toDate()).toUTCString()}
                                                        />
                                                    </Typography>
                                                </div>
                                            </CardContent>

                                            <Buttons
                                                announcement={announcement.announcements.announcement}
                                                name={announcement.announcements.name}
                                                email={announcement.announcements.email}
                                                subject={announcement.announcements.subject}
                                            />
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </div>
                </ThemeProvider>
            </div>

        </div>
    )
}

export default Announcements
