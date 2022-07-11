import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import { ContactlessTwoTone } from '@material-ui/icons';
import { IconButton } from '@mui/material';

// ES6 ARROW function (always use const until you need to use let)
// Can also use "function Header()"
const Header = () => {
    return (
        // BEM
        <div className='header'>
            <IconButton>
            <PersonIcon className='header__icon' fontSize='large'/>
            </IconButton>
            
            <img
                className='header__logo'
                src = "https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" 
                alt = "tinder logo"/>
            <IconButton>
            <MessageIcon className='header__icon' fontSize='large'/>
            </IconButton>
            
        </div>
    )
}

export default Header