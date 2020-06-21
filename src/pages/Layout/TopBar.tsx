import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar/AppBar';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { English } from '../../constants/AppStrings';
import { RouteNames } from '../../navigation/RoutesNames';

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
}));

export default function TopBar() {
    const classes = useStyles();

    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Link variant="h6" color="textPrimary" href={RouteNames.home} className={classes.toolbarTitle}>
                    {English.labelsAndTitles.HIG}
                </Link>
                <nav>
                    <Link variant="button" color="textPrimary" href={RouteNames.courses} className={classes.link}>
                        {English.labelsAndTitles.COURSES}
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        {English.labelsAndTitles.MINDSET}
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>
                        {English.labelsAndTitles.ABOUT_US}
                    </Link>
                </nav>
                <Button href="#" color="primary" variant="outlined" className={classes.link}>
                    {English.labelsAndTitles.LOGIN}
                </Button>
            </Toolbar>
        </AppBar>
    );
}
