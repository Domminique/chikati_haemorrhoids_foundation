import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import HomeIcon from '@material-ui/icons/Home'
import InfoIcon from '@material-ui/icons/Info'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { NavLink as NavRouterLink } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import Divider from '@material-ui/core/Divider'
import { useForm } from 'react-hook-form'

import Nav from './Nav/Navbar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.main,
  },
  list: {
    color: theme.palette.primary.contrastText,
  },
  active: {
    backgroundColor: theme.palette.primary.dark,
  },
}))

function NavBar() {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)

  const [loginOpen, setLoginOpen] = useState(false)

  const { register, handleSubmit, reset, errors, clearErrors } = useForm({
    mode: 'onChange',
  })

  const handleLoginSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
    clearErrors()
    setLoginOpen(false)
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <Nav />
    </>
  )
}

export default NavBar
