import React, { useEffect } from "react";
import { Avatar } from "@mui/material";
import { fontSize } from "@mui/system";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SidebarGov from './SidebarGov';

export default function ProfilePageComponentGov(props){

    const navigate = useNavigate()

    let firstName = 'Akash'
    let lastName = 'Karri'
    let fullName = 'Akash Karri'
    let initials = firstName[0] + lastName[0]
    let email = 'arkarri@ncsu.edu'

    
    return (
        <div id="outer-container">
            <SidebarGov pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id="page-wrap">
                <div 
                style= {{
                    display: 'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    height: '100vh',
                    flexDirection:'column',
                    gap: "10px",
                    border: "3px solid gray",
                    marginLeft: '20%',
                    marginRight: '20%'
                }}>
                <Avatar sx={{ height: '10vh', width:"auto" ,fontSize:"10em", background: "#CC0000", margin:'auto'}}>{initials}</Avatar>
                <h1 style={{fontSize: "10vh", margin:'auto', textAlign: "center"}}>{fullName}</h1>
                <h2 style={{fontSize: "2vh", margin:'auto', textAlign: "center"}}>{email}</h2>
                <h2 style={{fontSize: "3vh", color:'gray', margin:'auto', textAlign: "center"}}>NC State University</h2>
                <Button variant='outlined' style={{fontSize: "2vh", margin:'auto'}}>View My Polls</Button>
                <Button variant='outlined' style={{fontSize: "2vh", margin:'auto'}} onClick = {() => {navigate('/pollTest')}}>See My Feed</Button>
                <Button variant='outlined' style={{fontSize: "2vh", margin:'auto'}} onClick = {() => {navigate('/createPollTest')}}>Create a Poll</Button>
            </div>
        </div>


       
        </div>
    )
    

}