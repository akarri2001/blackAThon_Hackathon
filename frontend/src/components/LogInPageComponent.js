import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { TextField
 } from '@mui/material'

import campusConnectLogo from '../assets/campusConnectLogo.jpg'
import SignUpMenu from './SignUpMenu'
import LoginMenu from './LoginMenu'

export default function LoginPageComponent(){
    
    const buttonStyle = {
        marginLeft: "30px",
        color: 'white',
        padding:'30px',
        borderRadius: '15px',
        backgroundColor: 'orange'
    }

    const [loginMenuActive, setLoginMenuActive] = useState(true)

    let loginSignInButtons = (
        <>
            <Button sx={buttonStyle} onClick={() => {setLoginMenuActive(true)}}>Login</Button>
            <Button sx={buttonStyle} onClick={() => {setLoginMenuActive(false)}}>Sign-Up</Button>
        </>
    )

    const loginMenu = (
        <>
            <LoginMenu></LoginMenu>
        </>
    )

    const signUpMenu = (
        <>
            <SignUpMenu></SignUpMenu>
        </>
    )

    return( 
        <div style = {{
            backgroundColor: "white"
        }}>
            <div style = {{
                display:'grid',
                gridTemplateColumns: "repeat(5, 1fr)",
                gridTemplateRows: "repeat(5, 1fr)",
                height: '100vh', 
            }}>
                <div style = {{
                    gridColumnStart: 2,
                    gridColumnEnd: 5,
                    gridRowStart:2,
                    griddRowEnd: 4
                }}>
                    <img src={campusConnectLogo} style={{
                        height:"auto",
                        maxWidth: "100%"
                    }}></img>
                </div>

                <div style = {{
                    gridColumnStart: 2,
                    gridColumnEnd: 5,
                    gridRowStart:4,
                    griddRowEnd: 6

                }}>
                    <div style={{
                        display: "flex",
                        flexFlow:"space-around",
                        flexDirection: 'column',
                        flexGrow:1,
                        width: "100%",
                        rowGap: "30px"
                    }}>
                        <div>{loginSignInButtons}</div>
                        {loginMenuActive ? loginMenu: signUpMenu}
                    </div>
                </div>
            </div>
        </div>
    )

}