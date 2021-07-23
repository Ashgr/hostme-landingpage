import React from 'react'
import { Box, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { RiServerFill } from 'react-icons/ri'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '270px',
        backgroundColor: 'rgb(54 52 119)',
        marginTop: '60px',
        display: 'grid',
        gridTemplateColumns: '35% auto auto'
    },
    brand: {
        marginLeft: '.2rem',
        fontSize: '1.9rem',
        color: '#fff',
        fontFamily: 'monospace',
    },
    descirbtion: {
        marginTop: '.6rem',
        fontSize: '1rem',
        color: '#fff',
        padding: '.6rem'
    },
    social: {
        padding: '0.7rem',
        backgroundColor: '#fff',
        borderRadius: '4px'
    }
}))
const Footer = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box>
                <Box display='flex' alignItems='center' style={{ marginTop: '2rem' }}>
                    <RiServerFill size='2.2rem' color='#fff' style={{ marginLeft: '.5rem', }} />
                    <Typography className={classes.brand}>HostMe</Typography>
                </Box>
                <Typography className={classes.descirbtion}>Lorem cing elit.ecessitatibus quia suscipit modi quis cumque dolor voluptas eaque animi velit magni fugiat provident rerum labore eveniet ratione?</Typography>
                <Box display='flex' justifyContent='space-evenly' style={{ marginTop: '1rem' }}>
                    <Box className={classes.social}>
                        <a href='https://www.facebook.com/abdurahman.ashgr/'><FaFacebookF size='1.2em' color='rgb(54 52 119)' /></a>
                    </Box>
                    <Box className={classes.social}>
                        <a href='https://github.com/Ashgr'><FaGithub size='1.2em' color='rgb(54 52 119)' /></a>
                    </Box>
                    <Box className={classes.social}>
                        <a href='https://www.linkedin.com/in/aashgr/'><FaLinkedinIn size='1.2em' color='rgb(54 52 119)' /></a>
                    </Box>
                    <Box className={classes.social}>
                        <a href='https://www.instagram.com/i_ashgr/' target='_blank'><FaInstagram size='1.2em' color='rgb(54 52 119)' /></a>
                    </Box>
                </Box>
            </Box>
            <Box display='flex' flexDirection='column' justifyContent='space-evenly' alignItems='center'>
                <Typography style={{ fontSize: '1.2rem', color: '#fff' }}>Products</Typography>
                <Typography style={{ fontSize: '1.2rem', color: '#fff' }}>Plans</Typography>
                <Typography style={{ fontSize: '1.2rem', color: '#fff' }}>Contact Us</Typography>
                <Typography style={{ fontSize: '1.2rem', color: '#fff' }}>About</Typography>
            </Box>
            <Box display='flex' flexDirection='column' justifyContent='space-evenly' alignItems='center'>
                <Typography style={{ fontSize: '1.2rem', color: '#fff' }}>Products</Typography>
                <Typography style={{ fontSize: '1.2rem', color: '#fff' }}>Plans</Typography>
                <Typography style={{ fontSize: '1.2rem', color: '#fff' }}>Contact Us</Typography>
                <Typography style={{ fontSize: '1.2rem', color: '#fff' }}>About</Typography>
            </Box>


        </Box>
    )
}

export default Footer
