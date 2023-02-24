import React from 'react'
import Button from '@mui/material/Button'

export default function LoginPageComponent(){
    
    const buttonStyle = {
        margin: "30px",
        color: 'orange'
    }


    
    return( 
        <div style = {{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height: "150vh",
            
        }}>
            <Button sx={buttonStyle}>Login</Button>
            <Button sx={buttonStyle}>Sign-Up</Button>
        </div>
    )

}