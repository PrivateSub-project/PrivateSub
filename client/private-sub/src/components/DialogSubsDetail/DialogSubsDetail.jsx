import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { Container, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RecipeReviewCard from '../CardDetailSub/CardDetailSub';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function FullScreenDialog({ module, setModule, data }) {
    const handleClose = () => {
        setModule(false);
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Grid>
                <Dialog
                    fullScreen
                    open={module}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <FontAwesomeIcon icon={faXmark} />
                            </IconButton>
                            <Typography
                                sx={{ ml: 2, flex: 1 }}
                                variant="h6"
                                component="div"
                            >
                                {data?.brand}
                            </Typography>
                            <Button
                                autoFocus
                                color="inherit"
                                onClick={handleClose}
                            >
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <Container maxWidth="sm">
                        <Grid container sx={12}>
                            <Grid item>
                                <RecipeReviewCard
                                    data={data}
                                    setModule={setModule}
                                />
                            </Grid>
                        </Grid>
                    </Container>
                </Dialog>
            </Grid>
        </ThemeProvider>
    );
}
