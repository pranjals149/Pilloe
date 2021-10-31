import React, { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Sidebar from '../Sidebar/Sidebar';
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import { storage } from "../../firebase"

import "./Files.css"


export default function Files() {

    const history = useHistory()

    const [show, setShow] = useState(false)
    const [file, setFile] = useState(null)
    const [data, setData] = useState([])

    const uploadFile = () => {
        if (file === null) {
            toast.error("No File is selected")
            return;
        }

        storage
            .ref(`files/${file?.name}`)
            .put(file)
            .on("state_changed", toast.success("File upload successfully"))

        setFile("")

    }

    useEffect(() => {
        storage.ref().child('files/').listAll()
            .then(res => {
                res.items.forEach((item) => {
                    setData(arr => [...arr, item.name]);
                })
            })
            .catch(err => {
                toast.error(err.message);
            })
    }, [file])

    return (
        <div className="files">
            <Sidebar />

            <div className="files__container">

                <div className="files__main">
                    {/* Hero unit */}
                    <Box
                        sx={{
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                gutterBottom
                                style={{ color: "white" }}
                            >
                                View and Upload Files
                            </Typography>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                                <Button variant="contained" onClick={() => setShow(!show)}>
                                    Upload a File
                                </Button>

                                <Button color="primary" variant="contained" onClick={() => history.push(`/dashboard/${localStorage.getItem("Name")}`)}>Go Back to Dashboard</Button>
                            </Stack>

                            {show === true && (
                                <>
                                    <div className="files__uploadFile">
                                        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                                    </div>

                                    <div className="files__uploadButton">
                                        <Button color="primary" variant="contained" onClick={uploadFile}>Upload File</Button>
                                    </div>
                                </>
                            )}
                        </Container>
                    </Box>
                    <Container sx={{ py: 8 }} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {data.map((ele) => (
                                <Grid item key={ele} xs={12} sm={6} md={4}>
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
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {ele}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary" variant="contained" fullWidth>View</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            </div>
        </div>
    );
}