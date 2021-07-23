import React from 'react'
import { Box, Typography, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: { // 1368 550
        height: '555px',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        opacity: '0.9'
    },
    intro: {
        position: 'absolute',
        left: '60%',
        top: '25%',
        transform: 'translate(-50 %, -50 %)',
    },
    welcome: {
        color: '#fff',
        fontSize: '1.3rem',
        fontFamily: 'monospace',
    },
    head: {
        height: '50px',
        width: '28vw',
        padding: '0.7rem',
        backgroundColor: 'rgb(54 52 119)',
        borderRadius: '8px',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    body: {
        height: 'auto',
        width: '28vw',
        padding: '0.7rem',
        backgroundColor: '#ebebeb',
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
    },
    sign: {
        color: '#00284e',
        fontSize: '1.1rem',
        textAlign: 'center'
    },

})
const Intro = () => {
    const classes = useStyles();
    return (
        <Box style={{ position: 'relative' }}>
            <img src='/2.jpg' className={classes.root} alt = 'ashgr'/>
            <Box className={classes.intro}>
                <Box className={classes.head}>
                    <Typography className={classes.welcome}>Become a client !</Typography>
                </Box>
                <Box className={classes.body} display='flex' flexDirection='column' justifyContent = 'center'>
                    <Typography className={classes.sign}>Host your website using our powerful servers</Typography>
                    <TextField label="Name" variant="outlined" style={{ marginTop: '0.8rem' }} />
                    <TextField label="Email" variant="outlined" color='primary' style={{ marginTop: '0.8rem' }} />
                    <Button variant="contained" color="secondary"  style={{ marginTop: '0.8rem' ,color:'#fff',backgroundColor:'rgb(54 52 119)'}}>
                        Join
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}

export default Intro
