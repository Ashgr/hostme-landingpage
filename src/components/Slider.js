import React from 'react'
import { Box, Typography, TextField, Button, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import ReviewCard from './ReviewCard';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    title: {
        textAlign: 'center',
        fontSize: '2.5rem',
        color: 'rgb(68, 93, 110)',
    },
}))
const Slider = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography className={classes.title}>Our Reviews</Typography>
            <Box display='flex' justifyContent='space-between'>
                <ReviewCard image = '7.jpg' name = {"Jan Doe"} role = {'Software Development Maneger'} company ={'google.png'} />
                <ReviewCard image = '8.jpg' name = {"John Doe"} role = {'Software Development Engineer'} company ={'amazon.png'} />
                <ReviewCard image = '7.jpg' name = {"Jan Doe"} role = {'Human Resources Specialist'} company ={'netflix.png'} />
            </Box>
        </Box>
    )
}

export default Slider
