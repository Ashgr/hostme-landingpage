import React from 'react'
import { Box, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) =>({
    card: {
        width: '340px',
        height: '370px',
        margin: '2rem',
        boxShadow: '0 2px 10px rgb(50 50 93 / 10%)',
        backgroundColor: '#fff',
        borderRadius: '6px'
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    name: {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: 'rgb(68, 93, 110)'
    },
    position: {
        fontSize: '1.1rem',
        color: 'black'
    },
    content: {
        fontSize: '.9rem',
        color: '#445d6e',
        textAlign: 'center',
        marginInline:'0.4rem    '
    },
}))
const ReviewCard = ({image , name , role , company , content}) => {
    const classes = useStyles();
    return (
        <Box className={classes.card}>
            <Box display='flex' justifyContent='center' style={{ marginTop: '1rem' }}><Avatar className={classes.large} src={`/${image}`} ></Avatar></Box>
            <Box display='flex' justifyContent='center' style={{ marginTop: '.8rem' }}><Typography className={classes.name} >{name}</Typography></Box>
            <Box display='flex' justifyContent='center' style={{ marginTop: '.4rem' }}><Typography className={classes.position} >{role}</Typography></Box>
            <Box display='flex' justifyContent='center' style={{ marginTop: '.8rem' }}><img src={`/${company}`} width='80' height='30'></img></Box>
            <Box display='flex' justifyContent='center' style={{ marginTop: '1rem' }}><Typography className={classes.content} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iste repellendus et rem. Veniam ea corporis, quae voluptates magni facere eligendi minima similique fuga, officia mollitia quos maxime autem natus?</Typography></Box>
        </Box>
    )
}

export default ReviewCard
