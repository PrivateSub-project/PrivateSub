import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, FormControl, Grid, TextField } from '@mui/material';

export default function AddSubModel({ setModel, model }) {
    const handleClose = () => {
        setModel(false);
    };

    return (
        <>
            <Dialog
                fullWidth
                maxWidth={'md'}
                open={model}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {'Adding subscription list'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Box component="form" noValidate autoComplete="off">
                            <Grid
                                container
                                sx={12}
                                spacing={2}
                                flexDirection="column"
                            >
                                <Grid item sx={12}>
                                    <FormControl
                                        fullWidth
                                        sx={{ m: 1 }}
                                        variant="filled"
                                    >
                                        <TextField
                                            id="brand"
                                            label="brand"
                                            variant="filled"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item sx={12}>
                                    <FormControl
                                        fullWidth
                                        sx={{ m: 1 }}
                                        variant="filled"
                                    >
                                        <TextField
                                            id="creditCard"
                                            label="creditCard"
                                            variant="filled"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item sx={12}>
                                    <FormControl
                                        fullWidth
                                        sx={{ m: 1 }}
                                        variant="filled"
                                    >
                                        <TextField
                                            id="price"
                                            label="price"
                                            variant="filled"
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} autoFocus>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
