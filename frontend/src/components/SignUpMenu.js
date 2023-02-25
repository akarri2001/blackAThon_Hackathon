import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import axios from 'axios'

export default function SignUpMenu(){

    let [formData, setFormData] = useState({
        UserName: '',
        NCSU_Email: '',
        Password: '',
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
            'http://localhost:5000/students',
            // '{\n  "firstName": "testfirstName",\n  "lastName": "testLastName",\n  "email": "emailString",\n  "username": "string",\n  "password": "string",\n  "role": "STUDENT",\n  "studentID": "string",\n  "pollsAnswered": {}\n}',
            {
                'firstName': formData['First_Name'],
                'lastName': formData['last_Name'],
                'email': formData['NCSU_Email'],
                'username': formData['UserName'],
                'password': formData['Password'],
                'role': 'STUDENT',
                'studentID': formData['studentId'],
                'pollsAnswered': {}
            },
            {
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        );
        
        let loginData = await console.log(response.data)
        let status = await response.data.status
        if (status == 'ok'){
            window.location = '/profilePageTest'
        }
        else{
            alert('Something went wrong with signing you up!')
        }
    }



    return(
        <>
            <TextField id="UserName" label="Set User Name" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <TextField id="NCSU_Email" label="NCSU Email" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <TextField id="Password" label="Create Password" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <TextField id="First_Name" label="First Name" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <TextField id="last_Name" label="Last Name" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <TextField id="studentId" label="Student ID" variant="outlined" onChange={(e) => onTextChange(e)}/>
            <Button variant='contained' onClick={() => submitForm()}>Make an Account!</Button>
        </>
        )
}