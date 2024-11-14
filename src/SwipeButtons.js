import React from "react";
import "./SwipeButtons.css";
//import ReplayIcon from '@mui/icons-material/Replay';
//import CloseIcon from '@mui/icons-material/Close';
//import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
//import FlashOnIcon from '@mui/icons-material/FlashOn';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import WorkIcon from '@mui/icons-material/Work';
import { Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';


const SwipeButtons = () => {
    //className="swipe_button_x"

    return (
        <div className="SwipeButtons">
           

            <IconButton   sx={{ backgroundColor: 'gray', "&:hover": { backgroundColor: 'lightgray' } }}  className="swipe_button_x" > 
            <Icon icon="ci:shopping-bag-02"  className="Icon-work"/>
            </IconButton> 
            
            <IconButton className="swipe_ChatBubbleIcon">  
            <Icon icon="ci:chat"  className='Icon-Chat' />
            </IconButton>

            <IconButton className="swipe_button_heart"> 
            <Icon icon="ci:heart-01"    className='Icon-Heart' />
            </IconButton>

           
          
        </div>
    );
};

export default SwipeButtons;

/*
 <IconButton className="swipe_button_repeat"> 
            <ReplayIcon fontSize ="large" />
            </IconButton>

            <IconButton className="swipe_button_x" > 
            <CloseIcon fontSize="large"/>
            </IconButton>


<IconButton className="swipe_button_star"> 
            <StarRateIcon fontSize="large"/>
            </IconButton>

             <IconButton className="swipe_button_lightning">
            <FlashOnIcon fontSize="large"/>
            </IconButton>

*/