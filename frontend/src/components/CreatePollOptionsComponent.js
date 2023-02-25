import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function CreatePollOptionsComponent(props) {

    let {optionList, onOptionChange, deleteOption} = {...props}
    
    let options = optionList.map((optionText, index) => {
        let optionId = 'optionNumber' + String(index)
        let optionLabel = 'Option #' + String(index+1)
        return(
            <div style={{
                width:"80%",
                display:'flex',
                justifyContent:'space-around',
                minHeight:'5%',
                margin: "auto auto",

            }}>
            <TextField  fullWidth id={optionId} label={optionLabel} variant="outlined" onChange={(e) => onOptionChange(e)}/>
            <DeleteOutlineOutlinedIcon onClick = {() => {deleteOption(index)}}color = 'error' fontSize = 'large' sx={{minWidth:"5%", padding: 1 }}></DeleteOutlineOutlinedIcon>
            </div>
        )
        })
    
    return(
        {options}
    )
}