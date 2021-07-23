import React from 'react'
import { Box, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { RiServerFill } from 'react-icons/ri'
const useStyles = makeStyles({
  root: {
    padding: '1rem',
    height: '40px',
    width: 'auto',
    backgroundColor: 'rgb(54 52 119)',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
  },
  brand: {
    fontSize: '1.9rem',
    color: '#fff',
    fontFamily: 'monospace',
  },
  links:{
    color:'#fff',
    marginInline:'2rem',
    fontSize:'1.3rem',
    fontFamily: 'Helvetica',
  },
  purchase:{
    padding:'0.5rem',
    color:'#00284e',
    cursor:'pointer',
    backgroundColor: '#fffdf3',
    borderRadius:'10px',
    transition: 'background-color 0.6s ease',
    '&:hover': {
      backgroundColor: '#ebebeb',
    },
  },
  contact:{
    border:'2px solid white',
    padding:'0.5rem',
    color:'white',
    cursor:'pointer',
    borderRadius:'10px',
    transition: 'color 0.6s ease , background-color 0.6s ease',
    '&:hover': {
      color:'#00284e',
      backgroundColor: '#fffdf3',
    },
  }
});
const Navbar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box display='flex' alignItems='center'>
        <RiServerFill size='2.2rem' color='#fff' />
        <Typography className={classes.brand}>HostMe</Typography>
      </Box>
      <Box display = 'flex' justifyContent = 'space-between'>
        <Link href="#" className = {classes.links}>Home</Link>
        <Link href="#" className = {classes.links}>Plans</Link>
        <Link href="#" className = {classes.links}>About</Link>
      </Box>
      <Box display = 'flex' justifyContent = 'space-between' >
        <Box className = {classes.purchase} style ={{marginInline:'1.8rem'}} display='flex' alignItems='center'>
          <Typography>Buy Now</Typography>
        </Box>
        <Box className = {classes.contact}>
          <Typography>Contact Us</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
