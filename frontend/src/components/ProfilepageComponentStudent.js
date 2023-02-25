import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { fontSize } from "@mui/system";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SidebarStudent from "./SidebarStudent";
import {useParams} from 'react-router-dom'
import axios from 'axios'

export default function ProfilePageComponentStudent(props){


    let [profileData, setProfileData] = useState({
        firstName: ' ',
        lastName: ' ',
        email: ' ',
    })

    let [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    let {studentMongoId} = useParams()

    console.log(studentMongoId)

    useEffect(() => {
    async function getData(){

        loading = setLoading(true)

        const response = await axios.get('http://localhost:5000/users/' + String(studentMongoId));

        // After fetching data stored it in posts state.
        // studentData = setStudentData(await response.json());
        // await console.log(response.data)

        let status = await response.status
        
        console.log(status)

        if (status === 'ok' || status == 200){
            // Closed the loading page
            let dataReturn = await response.data
            console.log(dataReturn)
            let dataReturn2 = await dataReturn.data
            console.log('dr2', dataReturn2)
            let dataReturn3 = await dataReturn2['data']
            profileData = setProfileData({...dataReturn3})
            setLoading(false)          

            console.log('the status is good')
            
           
            
            

            
        }

        
    }

    getData()
    }, []); 


    


    // let firstName = 'Akash'
    // let lastName = 'Karri'
    // let fullName = 'Akash Karri'
    // let initials = firstName[0] + lastName[0]
    // let email = 'arkarri@ncsu.edu'
    return (
        <>
        { !(loading) ? (
        <div id="outer-container">
            <SidebarStudent pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id="page-wrap"></div>
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
                <Avatar sx={{ height: '20vh', width:"auto" ,fontSize:"10em", background: "#CC0000", margin:'auto'}}>{profileData.firstName[0] + profileData.lastName[0]}</Avatar>
                <h1 style={{fontSize: "10vh", margin:'auto', textAlign: "center"}}>{profileData.firstName + " " + profileData.lastName}</h1>
                <h2 style={{fontSize: "2vh", margin:'auto', textAlign: "center"}}>{profileData.email}</h2>
                <h2 style={{fontSize: "3vh", color:'gray', margin:'auto', textAlign: "center"}}>NC State University</h2>
                <Button variant='outlined' style={{fontSize: "6vh", margin:'auto'}}>View My Polls</Button>
                <Button variant='outlined' style={{fontSize: "6vh", margin:'auto'}} onClick = {() => {navigate('/pollTest')}}>See My Feed</Button>
                </div>
        </div>
        ) : (<h1> Loading </h1>) }
        </>
    )
    

}