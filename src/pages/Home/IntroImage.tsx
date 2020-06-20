import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { intro } from '../../stub/data';
import Image from 'material-ui-image'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    info: {
        padding: theme.spacing(2),
        textAlign: 'justify',
        color: theme.palette.text.secondary,
    },
}));

export default function IntroImage() {
    const classes = useStyles();
    console.log('INTRO');
    return (
        <Container maxWidth="lg" component="main">
            <Grid container spacing={3} alignItems="flex-end">
                <Grid item md={6}>
                    <Image
                        src={intro.imageUrl}
                    />
                </Grid>
                <Grid item md={6} justify="flex-start">
                    <Typography component="h6" variant="h6" color="textPrimary" className={classes.info}>
                        ${intro.info}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );

}
