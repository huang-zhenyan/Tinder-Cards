import React from 'react';
import './SwipeButtons.css';

import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const SwipeButtons = () => {
    return (
        <div className = 'swipeButtons'>
            <h1>
                <ReplayIcon fontSize = 'large' />
                <CloseIcon fontSize = 'large' />
                <StarRateIcon fontSize = 'large' />
                <FavoriteIcon fontSize = 'large' />
                <FlashOnIcon fontSize = 'large' />
            </h1>
        </div>
    )
}

export default SwipeButtons