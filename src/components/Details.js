import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CountUp from "react-countup";
import { FaUser } from 'react-icons/fa'
import {RiWindowFill} from 'react-icons/ri';
import { ImStatsBars }  from 'react-icons/im';
const useStyles = makeStyles({
    root: {
        height: '300px',
        width: 'auto',
        backgroundColor: 'rgb(54 52 119)',
        margin: '0',
        padding: '0',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    meta: {
        color: '#fff',
        fontSize: '2.5rem',
        textAlign: 'center'
    },
    data:{
        border:'2px solid white',
        padding:'3rem',
        borderRadius:'8px'
    },

})

const Details = () => {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.root}>
                <Box className = {classes.data} display='flex' flexDirection='column' justifyContent='center' >
                    <Typography className={classes.meta}><CountUp end={173} duration={3} delay={1} /></Typography>
                    <Box display='flex' alignItems = 'center' justifyContent = 'space-between'>
                        <FaUser size='2em' color='#fff' style={{ marginRight: '0.4rem' }} />
                        <Typography className={classes.meta}>Users</Typography>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='center' alignItems = 'center'>
                    <ImStatsBars size='2em' color='#fff' style={{ marginRight: '0.4rem' }}/>
                    <Typography className={classes.meta}>Our statistics</Typography>
                </Box>
                <Box className = {classes.data} display='flex' flexDirection='column' justifyContent='center' >
                    <Typography className={classes.meta}><CountUp end={243} duration={4} delay={1} /></Typography>
                    <Box display='flex' alignItems = 'center' justifyContent = 'space-between'>
                        <RiWindowFill size='2em' color='#fff' style={{ marginRight: '0.4rem' }} />
                        <Typography className={classes.meta}>Websites</Typography>
                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default Details
