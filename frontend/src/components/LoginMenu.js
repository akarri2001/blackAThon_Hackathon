import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import axios from 'axios'

export default function SignUpMenu(){

    let [formData, setFormData] = useState({
        UserName: '',
        Password: ''
    })

    function onTextChange(e){
        let tempTarget = e.target.id
        let tempValue = e.target.value
        let tempData = {...formData, 
            [tempTarget]: tempValue}
        formData = setFormData(tempData)
    }

    async function submitForm(){
        console.log(formData)
        
    }

    return(
        <>
            

            <TextField id="UserName" label="User Name" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <TextField id="Password" label="Password" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <Button variant='contained' onClick={() => submitForm()}>Enter The App!</Button>
        </>
        )

}