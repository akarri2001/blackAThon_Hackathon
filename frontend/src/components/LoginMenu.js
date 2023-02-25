import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'

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

    function submitForm(){
        console.log(formData)
        // alert(JSON.stringify(formData))
    }

    return(
        <>
            

            <TextField id="UserName" label="User Name" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <TextField id="Password" label="Password" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <Button variant='contained' onClick={() => submitForm()}>Enter The App!</Button>
        </>
        )

}