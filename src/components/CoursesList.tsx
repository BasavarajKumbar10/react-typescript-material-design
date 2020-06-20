import React from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { courses } from '../stub/data';
import { English } from '../constants/AppStrings';
import { makeStyles } from '@material-ui/core/styles';
import CourseCard from './CourseCard';

const useStyles = makeStyles((theme) => ({
    title: {
        padding: theme.spacing(10),
        textAlign: 'center',
    },
    listItem: {
        marginTop: theme.spacing(2),
    }
}));

export default function CoursesList() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Grid>
                <Grid item alignItems="center" justify="center">
                    <Typography component="h6" variant="h4" color="textPrimary" className={classes.title}>
                        {English.labelsAndTitles.COURSES}
                    </Typography>
                </Grid>
            </Grid>
            <Container maxWidth="lg" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {courses.map((item, index) => {
                        return (
                            <Grid key={index} xs={12} sm={12} md={4} className={classes.listItem}>
                                <CourseCard course={item}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </Container>
    );
}
