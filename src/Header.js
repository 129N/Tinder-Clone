import React from 'react'
import Person3Icon from '@mui/icons-material/Person3';
//import ForumIcon from '@mui/icons-material/Forum';
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { styled } from "@mui/material/styles";
import { Icon } from '@iconify/react';


import "./Header.css";
import { Link, useNavigate  } from 'react-router-dom';


function Header({ backButton }){
    const navigate  = useNavigate ();

    const WhiteRippleIconButton = styled(IconButton)({
        "& .MuiTouchRipple-root": {
          color: "white",
        },
      });


    return(
        <div class = "header">
            {backButton ? (
                <IconButton  sx={{ backgroundColor: '', "&:hover": { backgroundColor: 'lightgray' } }} onClick={ () =>  navigate(backButton)}>
                <ArrowBackIosIcon fontSize='large' className='header__icon' />
                </IconButton>
            ) : (

                <Link to="/PersonIconPage">
                <IconButton  sx={{ backgroundColor: '', "&:hover": { backgroundColor: 'lightgray' } }} > 
                <Icon icon="ci:user-02"  className='Icon-User' />
           </IconButton>
           </Link>
            )}
            


           <Link to="/">
           <img  
           className="header__logo"
           src="/Windows-New-Logo.png"
           alt="tinder logo"/>
            </Link>

           
          

           <Link to="/chats">

           <IconButton  sx={{ backgroundColor: '', "&:hover": { backgroundColor: 'lightgray' } }} >
           <Icon icon="ci:chat-circle-dots"  className='Icon-Chat' />
          
           </IconButton>
         
       
           </Link>


            
        </div>
    );
}

export default Header

/**
 * 
 * 
            <Link to="/PersonIconPage">
           <IconButton>
            <Person3Icon className="header__icon" fontSize = "large"/>
            </IconButton>
           </Link>
 */