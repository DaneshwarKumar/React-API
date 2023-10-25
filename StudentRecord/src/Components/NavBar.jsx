import React from 'react';
import { AppBar, Toolbar, styled , Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
    background: #111111;
`;

const Tab = styled(NavLink)`
  font-size: 25px;
  color:white;
  margin:11px;
  text-decoration:none
`;


const NavBar = () => {
  return (
    <div>
        <Header position='static'>
              <Toolbar>
                  <Tab to="/" style={{fontSize:"35px", color:"tomato"}}> CloudBlitz Technology </Tab>
                  <Tab to="/add" style={{marginLeft:"auto"}}> Add Students </Tab>
                  <Tab to="/all" >  All Students </Tab>
              </Toolbar>
        </Header>
    </div>
  )
}

export default NavBar;
