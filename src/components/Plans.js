import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { FcCheckmark } from 'react-icons/fc'
const useStyles = makeStyles({
    root: {
        backgroundColor: '#ebebeb',
        width: 'auto',
        height: '650px',
        textAlign: 'center'
    },

    title: {
        color: 'rgb(68, 93, 110)',
        fontSize: "3rem"
    },
    card: {
        width: '33%',
        height: '250px',
        margin:'2rem',
    },
    head: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        height: '50px',
        backgroundColor: '#00284e',
        borderRadius: '8px',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    },
    body: {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        height: 'auto',
        padding: '0.7rem',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    },
    welcome: {
        color: '#fff',
        fontSize: '1.3rem',
        fontFamily: 'monospace',
    },

})

const Plans = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root} >
            <Typography className={classes.title}>Choose a plan !</Typography>
            <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box className={classes.card}>
                    <Box className={classes.head} style={{ backgroundColor: 'rgb(54 52 119)' }}><Typography className={classes.welcome}>Basic</Typography></Box>
                    <Box className={classes.body}>
                        <Typography style={{ fontSize: '1.6rem' }}>Free</Typography>
                        <Box style={{ borderRadius: '5px', fontFamily: 'Helvetica', boxShadow: '0 2px 4px rgb(50 50 93 / 20%)', fontSize: '0.9rem', width: '8rem', position:'relative',left:'30%', padding: '0.5rem', color: '#445d6e', fontWeight: '600',marginBottom:'0.8rem' }}>1 YEAR ACCESS</Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.4rem' }}>
                            <FcCheckmark size='1.3rem' color='#00284e' />
                            <Typography style={{ marginLeft: '0.4rem' }}>Offer 1 host</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <FcCheckmark size='1.3rem' color='#00284e' />
                            <Typography style={{ marginLeft: '0.4rem' }}>2 GB storage limit</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <FcCheckmark size='1.3rem' color='#00284e' />
                            <Typography style={{ marginLeft: '0.4rem' }}>1 CPU</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <img src='multiply.png' width='15' height='15' />
                            <Typography style={{ marginLeft: '0.4rem' }}>Email domains</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <img src='multiply.png' width='15' height='15' />
                            <Typography style={{ marginLeft: '0.4rem' }}>24/7 Support</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <img src='multiply.png' width='15' height='15' />
                            <Typography style={{ marginLeft: '0.4rem' }}>Seperate image server</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <img src='multiply.png' width='15' height='15' />
                            <Typography style={{ marginLeft: '0.4rem' }}>Database hosting</Typography>
                        </Box>
                        <Button style={{ backgroundColor: 'rgb(54 52 119)', width: '50%', position:'relative',left:'27%', color: '#fff',marginTop:'1.3rem' }}>Select</Button>

                    </Box>
                </Box>
                <Box className={classes.card}>
                    <Box className={classes.head} style={{ backgroundColor: '#890023' }}><Typography className={classes.welcome}>Advanced</Typography></Box>
                    <Box className={classes.body}>
                        <Typography style={{ fontSize: '1.6rem' }}>$ 50</Typography>
                        <Box style={{ borderRadius: '5px', fontFamily: 'Helvetica', boxShadow: '0 2px 4px rgb(50 50 93 / 20%)', fontSize: '0.9rem', width: 'fit-content', position:'relative',left:'30%', padding: '0.5rem', color: '#445d6e', fontWeight: '600',marginBottom:'0.8rem' }}>1 YEAR ACCESS</Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.4rem' }}>
                            <FcCheckmark size='1.3rem' color='#00284e' />
                            <Typography style={{ marginLeft: '0.4rem' }}>Offer 5 host</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <FcCheckmark size='1.3rem' color='#00284e' />
                            <Typography style={{ marginLeft: '0.4rem' }}>4 GB storage limit</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <FcCheckmark size='1.3rem' color='#00284e' />
                            <Typography style={{ marginLeft: '0.4rem' }}>2 CPU</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <FcCheckmark size='1.3rem' color='#00284e' />
                            <Typography style={{ marginLeft: '0.4rem' }}>Email domains</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <FcCheckmark size='1.3rem' color='#00284e' />
                            <Typography style={{ marginLeft: '0.4rem' }}>24/7 Support</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <img src='multiply.png' width='15' height='15' />
                            <Typography style={{ marginLeft: '0.4rem' }}>Seperate image server</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <img src='multiply.png' width='15' height='15' />
                            <Typography style={{ marginLeft: '0.4rem' }}>Database hosting</Typography>
                        </Box>
                        <Button style={{ backgroundColor: '#890023', width: '50%',  position:'relative',left:'27%', color: '#fff', marginTop:'1.3rem' }}>Select</Button>
                    </Box>
                </Box>
                <Box className={classes.card}>
                    <Box className={classes.head} style={{ backgroundColor: '#f37f1b' }}><Typography className={classes.welcome}>Epic</Typography></Box>
                    <Box className={classes.body}>
                        <Typography style={{ fontSize: '1.6rem' }}>$ 75</Typography>
                        <Box style={{ borderRadius: '5px', fontFamily: 'Helvetica', boxShadow: '0 2px 4px rgb(50 50 93 / 20%)', fontSize: '0.9rem', width: 'fit-content', position:'relative',left:'30%', padding: '0.5rem', color: '#445d6e', fontWeight: '600',marginBottom:'0.8rem' }}>1 YEAR ACCESS</Box>

                        <Box display='flex' alignItems='center' style={{ marginTop: '0.4rem' }}>
                            <FcCheckmark size='1.3rem' color='#00284e' />
                            <Typography style={{ marginLeft: '0.4rem' }}>Offer 10 host</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <FcCheckmark size='1.3rem' color='#00284e' />
                            <Typography style={{ marginLeft: '0.4rem' }}>8 GB storage limit</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <FcCheckmark size='1.3rem' color='#00284e' />
                            <Typography style={{ marginLeft: '0.4rem' }}>4 CPU</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <FcCheckmark size='1.3rem' color='#00284e' />
                            <Typography style={{ marginLeft: '0.4rem' }}>Email domains</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <FcCheckmark size='1.3rem' color='#00284e' />
                            <Typography style={{ marginLeft: '0.4rem' }}>24/7 Support</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <FcCheckmark size='1.3rem' color='#00284e' />
                            <Typography style={{ marginLeft: '0.4rem' }}>Seperate image server</Typography>
                        </Box>
                        <Box display='flex' alignItems='center' style={{ marginTop: '0.8rem' }}>
                            <FcCheckmark size='1.3rem' color='#00284e' />
                            <Typography style={{ marginLeft: '0.4rem' }}>Database hosting</Typography>
                        </Box>
                        <Button style={{ backgroundColor: '#f37f1b', width: '50%',  position:'relative',left:'27%', color: '#fff' ,marginTop:'1.3rem'}}>Select</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Plans

{/* <img src = 'multiply.png' width = '15' height = '15'/> */ }