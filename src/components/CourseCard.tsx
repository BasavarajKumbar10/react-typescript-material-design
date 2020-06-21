import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ICourse } from '../stub/data';
import Rating from '@material-ui/lab/Rating';
import { Box, Button } from '@material-ui/core';
import { English } from '../constants/AppStrings';
import './CourseCard.css'

interface IProps {
    course: ICourse;
}

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    review: {
        color: theme.palette.primary.light
    },
    buy: {
        margin: theme.spacing(1),
        width: '100%',
    },
}));

export default function CourseCard(props: IProps) {
    const {course} = props;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title={course.title}
                subheader={course.createdAt}
            />
            <CardMedia
                className={classes.media}
                image={course.imageUrl}
                title={course.title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" className="description">
                    {course.description}
                </Typography>
                <Box component="span" m={1} borderColor="transparent">
                    <Typography variant="body2" className={classes.review}>{course.review.total} Reviews</Typography>
                    <Rating name="read-only" value={course.rating} readOnly/>
                </Box>
            </CardContent>
            <CardActions disableSpacing>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.buy}
                    endIcon={<ShoppingCartIcon/>}
                >
                    {`\u20B9 ${course.price}`}
                </Button>
            </CardActions>
        </Card>
    );
}
