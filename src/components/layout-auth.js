//this is a react component called LayoutAuth
// it is the layout a user will see when they are logged in.
// it will  MUI components.
// it will have an app bar, a drawer, and a main content area.
// a HOC will control dark mode, but the dark mode switch will be in the app bar.
// the drawer will have a list of links to navigate to different pages.
// the main content area will be a react router switch.
// the main content area will have a route for each page.
// the app bar will have a menu icon that will open the drawer.
// the app bar will have a profile icon that will open a menu with a logout button.
// within the profile menu, the user will see their name and email and role. 
// If a user has more than one role, they will see a dropdown to switch roles.
// use the arrow syntax for functions
// I will be using AWS cognito for authentication.


import React, { useEffect } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Switch, FormControlLabel, FormGroup, Drawer, List, ListItem, ListItemIcon, ListItemText, CssBaseline, Paper } from '@mui/material'
import { Menu as MenuIcon, AccountCircle, Inbox, Mail, Brightness4, Brightness7 } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const LayoutAuth = ({mode, setMode, user}) => {

    const storeUserSetPreference = (pref) => {
        localStorage.setItem("mode", pref)
    }

    const getUserSetPreference = () => {
        return localStorage.getItem("mode")
    }


    const toggleMode = () => {
        // setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
        const newMode = mode === "light" ? "dark" : "light"
        setMode(newMode)
        storeUserSetPreference(newMode)
    }

    useEffect(() => {
        const userPreference = getUserSetPreference()
        console.log(userPreference)
        if(userPreference) {
            setMode(userPreference)
        }
    }, [])

    return (
        <>
            <CssBaseline />



            <AppBar position="static">
                <Toolbar>
                    <IconButton

                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        // onClick={handleProfileMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Button color="inherit">Logout</Button>
                    <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
                        {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                </Toolbar>
            </AppBar>

            
            <Typography variant='h3'>Authenticated Layout</Typography>
            <Paper>Current Mode: {mode}</Paper>

        </>
    )
}

export default LayoutAuth


