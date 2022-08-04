import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@mui/material/Select';
import {
    Avatar,
    Box,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    TextField,
} from '@mui/material';
import jwtDecode from 'jwt-decode';
import getCardNumAPI from '../../API/GetAllCCUser';
import { useEffect } from 'react';
import getBrandAPI from '../../API/GetBrandAPI';
import PostSubsList from '../../API/PostSubsList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContextCommon4 } from '../../utils';

export default function AddSubModel({ setModel, model }) {
    const [allInputs, setAllInput] = React.useState({});
    const [disabled, setDisabled] = React.useState(true);
    const [CCNumState, setCCNum] = React.useState([]);
    const [status, setStatus] = React.useState('');
    const { setIssue } = React.useContext(ContextCommon4);
    const [logoData, setLogo] = React.useState({
        logo: null,
        domain: null,
        name: null,
    });
    const [allSubmit, setAllSubmit] = React.useState();

    const [user, setUser] = React.useState('');
    const handleClose = () => {
        setModel(false);
    };

    React.useEffect(() => {
        if (allInputs?.price && allInputs?.brand && allInputs?.creditCard)
            setDisabled(false);
        else setDisabled(true);
    }, [allInputs]);

    React.useEffect(() => {
        const nameData = jwtDecode(localStorage.getItem('token'));
        const name = nameData?.username?.split('@')[0];
        if (nameData)
            getCardNumAPI(name)
                .then((value) => {
                    if (value.data) {
                        setUser(value.data[0]?.user);
                        console.log(value);
                        const CCNum = [];
                        value.data?.forEach((value) => {
                            const { number, typeOfCard, expiry } = value;
                            CCNum.push({ number, typeOfCard, expiry });
                            setCCNum(CCNum);
                        });
                    }
                })
                .catch((err) => console.log(err));
    }, [getCardNumAPI]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'brand') {
            getBrandAPI(value)
                .then((value) => {
                    setLogo(value);
                })
                .catch(() => setLogo({ logo: null }));
        }
        setAllInput({ ...allInputs, [name]: value });
    };
    const handleSubmit = () => {
        console.log('user => ', user);
        console.log('status => ', status);
        console.log('domain => ', logoData.domain);
        console.log('imageURL => ', logoData.logo);
        console.log('logoData => ', logoData);
        setAllSubmit({
            ...allInputs,
            price: parseInt(allInputs.price, 10),
            user,
            status: '2023/11/05',
            imgUrl: logoData['logo'],
            url: logoData['domain'],
        });
        if (!logoData['logo']) {
            toast.error('No Brand Domain Available', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }
        setIssue(true);
        setModel(false);
    };

    useEffect(() => {
        console.log('allSubmit', allSubmit);
        if (allSubmit?.imgUrl && !model) {
            PostSubsList(allSubmit)
                .then((value) => {
                    console.log(value);
                })
                .catch((err) => console.log('err' + err.message));
        }
    }, [allSubmit, model]);

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
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
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
                                    {console.log(logoData.logo)}
                                    <Avatar
                                        alt="Logo"
                                        src={`${
                                            logoData.logo
                                                ? logoData.logo
                                                : '../../assets/No_image_available.svg.png'
                                        }`}
                                        sx={{ width: 56, height: 56 }}
                                    />

                                    <FormControl
                                        fullWidth
                                        sx={{ m: 1 }}
                                        variant="filled"
                                    >
                                        <TextField
                                            id="brand"
                                            label="brand"
                                            variant="filled"
                                            name="brand"
                                            onChange={handleChange}
                                            value={allInputs.brand}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item sx={12}>
                                    <FormControl
                                        fullWidth
                                        sx={{ m: 1 }}
                                        variant="filled"
                                    >
                                        <InputLabel id="creditCard">
                                            Credit Card
                                        </InputLabel>
                                        <Select
                                            labelId="creditCard"
                                            id="demo-simple-select-filled"
                                            onChange={handleChange}
                                            name="creditCard"
                                            value={allInputs.creditCard}
                                        >
                                            {CCNumState.length > 0 &&
                                                CCNumState?.map((value, i) => (
                                                    <MenuItem
                                                        key={i}
                                                        value={`${value.number}`}
                                                        onClick={() =>
                                                            setStatus(
                                                                value.expiry
                                                            )
                                                        }
                                                    >
                                                        {value.number} -
                                                        <span className="text-xs ml-1">
                                                            {value.typeOfCard}
                                                        </span>
                                                    </MenuItem>
                                                ))}
                                        </Select>
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
                                            type="number"
                                            name="price"
                                            onChange={handleChange}
                                            value={allInputs.price}
                                        ></TextField>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        onClick={handleSubmit}
                        autoFocus
                        disabled={disabled}
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
