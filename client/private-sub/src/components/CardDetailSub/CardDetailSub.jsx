import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Cards from 'react-credit-cards';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { green } from '@mui/material/colors';
import { Box, Chip, FormControl, Grid, TextField } from '@mui/material';
import { createTheme } from '@mui/system';
import deleteSubs from '../../API/deleteSubs';
import { ContextCommon4 } from '../../utils';

const ExpandMore = styled((props) => {
    const { ...other } = props;
    const { onClick } = props;
    return (
        <Chip
            onClick={onClick}
            variant="outlined"
            color="info"
            label="Edit"
            icon={
                <FontAwesomeIcon
                    {...other}
                    icon={faChevronUp}
                    style={{ marginLeft: '10px' }}
                />
            }
        />
    );
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard({ data, setModule, setPrice, price }) {
    const [expanded, setExpanded] = React.useState(false);
    const { setIssue } = React.useContext(ContextCommon4);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const deleteItem = (id) => {
        console.info(id);
        deleteSubs(id).then((value) => {
            console.info(value);
            setIssue(true);
            if (value) setModule(false);
        });
    };

    const handleDelete = () => {
        deleteItem(data._id);
    };
    const handleClick = () => {
        deleteItem(data._id);
    };
    const theme = createTheme({
        spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
    });

    const DateY = new Date(data.rawDate).getFullYear();
    const DateM = new Date(data.rawDate).getMonth();
    console.log(DateY.toString().slice(2) + '/' + DateM);
    const handleChange = (e) => {
        const { value } = e.target;
        setPrice(value);
    };
    return (
        <Grid
            container
            direction="column"
            spacing={2}
            sx={{ marginTop: theme.spacing(2) }}
        >
            <Grid item xs>
                <Card sx={{ maxWidth: 700 }}>
                    <Grid
                        container
                        spacing={4}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm={8}>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        sx={{ bgcolor: green[500] }}
                                        aria-label="recipe"
                                        src={data?.imgUrl}
                                    />
                                }
                                action={
                                    <IconButton aria-label="settings"></IconButton>
                                }
                                title={`${data?.brand} subscription`}
                                subheader="Expire at September 14, 2023"
                            />
                        </Grid>
                        <Grid item sm={4}>
                            <Chip
                                color="error"
                                label="Delete subscription"
                                variant="outlined"
                                onClick={handleClick}
                                onDelete={handleDelete}
                            />
                        </Grid>
                    </Grid>
                    <Cards
                        cvc={'523'}
                        expiry={DateY.toString().slice(2) + '/' + DateM}
                        name={data.user}
                        number={data.creditCard}
                        preview
                        issuer={'MasterCard'}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This is subscription information for {data?.brand}{' '}
                            brand with credit card number of ending{' '}
                            {data.creditCard.slice(-4)}
                        </Typography>
                    </CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Your Next Payment is on September 11, 2022
                    </Typography>
                    <CardActions disableSpacing>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        ></ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
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
                                                id="price"
                                                label="price"
                                                variant="filled"
                                                type="number"
                                                name="price"
                                                onChange={handleChange}
                                                value={price}
                                            ></TextField>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grid>
        </Grid>
    );
}
