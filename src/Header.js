import React from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ContactlessTwoTone } from '@material-ui/icons';
import { IconButton } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
// ES6 ARROW function (always use const until you need to use let)
// Can also use "function Header()"
function Header ({backButton}) {
    const history = useHistory();
    return (
        // BEM
        <div className='header'>
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIcon fontSize='large' wclassName = "header__icon"/>
                </IconButton>
                
            ) : (
                <IconButton>
                    <PersonIcon className='header__icon' fontSize='large'/>
                </IconButton>
            )}
            

            <Link to = "/">
                <img
                className='header__logo'
                src = "https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" 
                alt = "tinder logo"/>
            </Link>
            
            <Link to = '/chat'>
                <IconButton>
                <MessageIcon className='header__icon' fontSize='large'/>
                </IconButton>
            </Link>
            
            
        </div>
    )
}

export default Header