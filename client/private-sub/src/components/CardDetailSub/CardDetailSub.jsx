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
import { Chip, Grid } from '@mui/material';
import { createTheme } from '@mui/system';

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

export default function RecipeReviewCard({ data }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    const theme = createTheme({
        spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
    });
    console.log(data);
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
                                title="Youtube subscription"
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
                        expiry={'05/23'}
                        name={'Kamyab Rouhifar'}
                        number={'XXXX XXXX XXXX 5236'}
                        preview
                        issuer={'MasterCard'}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This is subscription information for {data?.brand}{' '}
                            brand with credit card number of starting '5236'
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        ></ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent></CardContent>
                    </Collapse>
                </Card>
            </Grid>
        </Grid>
    );
}
