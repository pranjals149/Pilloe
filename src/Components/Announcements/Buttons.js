import { Button } from '@material-ui/core'
import React from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    height: "50%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Buttons({ announcement, name, email, subject }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button color="primary" variant="contained" fullWidth onClick={handleOpen}>View Announcement</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Subject - {subject}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Announcement - <strong>{announcement}</strong>
                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Name - <strong>{name}</strong>
                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Email - <strong>{email}</strong>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Buttons
