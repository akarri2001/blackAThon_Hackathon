import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import axios from 'axios'

export default function SignUpMenu(){

    let [formData, setFormData] = useState({
        UserName: '',
        Password: ''
    })

    let [isSubmitting, setIsSubmitting] = useState(false)

    function onTextChange(e){
        let tempTarget = e.target.id
        let tempValue = e.target.value
        let tempData = {...formData, 
            [tempTarget]: tempValue}
        formData = setFormData(tempData)
    }

    async function submitForm(){
        console.log(formData)
        const response = await axios.post(
            'http://localhost:5000/login',
            '',
            {
                params: {
                    'username': formData['UserName'],
                    'password': formData['Password']
                },
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/x-www-form-urlencoded'
                }
            }
        );
        
        await console.log(response.data)
        let loginData = await response.data
        let status = await response.data.status
        if (status == 'ok'){
            let idVal = loginData.data._id
            window.location = '/studentProfile/' + idVal
        }
        else{
            alert('Something went wrong with logging you in!')
        }
    }


    return(
        <>
            

            <TextField id="UserName" label="User Name" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <TextField id="Password" label="Password" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <Button variant='contained' onClick={() => submitForm()}>Enter The App!</Button>
        </>
        )

}