import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CreatePollOptionsComponent from './CreatePollOptionsComponent';
import uniqid from 'uniqid'

export default function CreatePollComponent(props) {

    let [formData, setFormData] = useState({
        QuestionText:'',
        options: []
    })


    let [optionAnswers, setOptionAnswer] = useState([])


    


    function onTextChangeQuestion(e){
        let tempTarget = e.target.id
        let tempValue = e.target.value
        let tempData = {...formData, 
            [tempTarget]: tempValue}
        formData = setFormData(tempData)
    }


    function onOptionChange(e){
        let tempValue = e.target.value
        let indexOfInterest = parseInt(e.target.id.slice(12))
        let tempArr = formData.options.map((el, index) => {
            if (index === indexOfInterest){
                return tempValue
            }
            else{
                return el
            }
        })
        let tempData = {...formData, 
            options: tempArr}
        formData = setFormData(tempData)
    }

    function submitForm(){
        console.log(formData)
        alert(JSON.stringify(formData))
    }

    const questionTextSyle = {
        width: "80%"
    }
    

    
    function deleteOption(indexSelected, e){
        
        indexSelected = (indexSelected-1 < 0) ? indexSelected-1 : indexSelected

        console.log(formData.options, indexSelected)

        let tempArr = formData.options.filter((el, index) => index !== indexSelected)
        console.log(tempArr)
        let tempData = {...formData, 
            options: tempArr}
        // formData = setFormData(tempData)
        formData = setFormData(tempData)
        // onOptionChange(e)
        
        // optionTextBoxes = optionTextBoxes.filter((el) => {
        //     if (el.key !== e.parentid){
        //         return true
        //     }
        //     else{
        //         return false
        //     }
        // })
        
    }

    

    // let optionTextBoxes = <CreatePollOptionsComponent optionList = {formData.options? formData.options: []} onOptionChange = {onOptionChange} deleteOption = {deleteOption}></CreatePollOptionsComponent>


    function addOption(){
        let tempValue = ''
        let tempArr = [...formData.options, tempValue]
        let tempData = {...formData, 
            options: tempArr}
        formData = setFormData(tempData)
        // createOptionTextBoxes()
    }


    
    let optionTextBoxes = formData.options.map((optionText, index) => {
        let optionId = 'optionNumber' + String(index)
        let optionLabel = 'Option #' + String(index+1)
        return(
            <div style={{
                width:"80%",
                display:'flex',
                justifyContent:'space-around',
                minHeight:'5%',
                margin: "auto auto",
                
            }}
            key = {optionLabel}>
            <TextField  fullWidth id={optionId} label={optionLabel} variant="outlined" onChange={(e) => onOptionChange(e)}/>
            <DeleteOutlineOutlinedIcon parentid = {optionLabel} onClick = {(e) => {deleteOption(index, e)}}color = 'error' fontSize = 'large' sx={{minWidth:"5%", padding: 1 }}></DeleteOutlineOutlinedIcon>
            </div>
        )
        })
    
    

    return(
        <>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth:'100%',
                gap: '20px',
                alignItems:'center'
            }}>
                <h2> <u>Poll Question</u> </h2>
                <TextField sx ={questionTextSyle} id="QuestionText" label="Enter Poll Question" variant="outlined" onChange={(e) => onTextChangeQuestion(e)}/>
                <h2> <u>Options</u> </h2>
                {optionTextBoxes}
                <Button variant='contained' onClick={() => addOption()}>Add Option</Button>
                <Button variant='contained' onClick={() => submitForm()}>Publish Poll</Button>
            </div>
        </>
        )
}