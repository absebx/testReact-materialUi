import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class NavBar extends Component {
  render(){
    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Módulo de clientes, aplicacion de ejemplo
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;