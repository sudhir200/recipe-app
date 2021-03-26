import React, {Component} from 'react';
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

class Home extends Component {
    render() {
        return (
            <div>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start"  color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" >
                                News
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
            </div>
        );
    }
}

export default Home;
