import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'

export default function SignUpMenu(){

    let [formData, setFormData] = useState({
        UserName: '',
        NCSU_Email: '',
        Password: '',
        Repeat_Password:''
    })

    function onTextChange(e){
        let tempTarget = e.target.id
        let tempValue = e.target.value
        let tempData = {...formData, 
            [tempTarget]: tempValue}
        formData = setFormData(tempData)
    }

    function submitForm(){
        console.log(formData)
        // alert(JSON.stringify(formData))
    }

    return(
        <>
            <TextField id="UserName" label="Set User Name" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <TextField id="NCSU Email" label="NCSU Email" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <TextField id="Password" label="Create Password" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <TextField id="Repeat Password" label="Repeat Password" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <Button variant='contained' onClick={() => submitForm()}>Make an Account!</Button>
        </>
        )
}