import React from 'react'
import Button from '@mui/material/Button'

export default function LoginPageComponent(){
    
    return( 
        <div style = {{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            height: "150vh"
        }}>
            <Button>Login</Button>
            <Button>Sign-Up</Button>
        </div>
    )

}