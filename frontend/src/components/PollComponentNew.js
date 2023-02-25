import { textAlign } from '@mui/system'
import React, { useState } from 'react'
import uniqid from 'uniqid'

export default function PollComponentNew(props) {
    
    let {questionText, optionsSet} = {...props}

    
    let [votedBool, setVotedBool] = useState(false)

    let [optionSelected, setOptionSelected] = useState(Array(optionsSet.size).fill(0))


    function optionSelectedFunction(optionIndex){
        if (optionSelected[optionIndex] !== 1){ //not already selected
            optionSelected = setOptionSelected(optionSelected.map((value, index) => {
                if (index === optionIndex){
                    return 1
                }
                else{
                    return 0
                }
            }))
            votedBool = setVotedBool(true)
        }
        else{ //reset 
            optionSelected = setOptionSelected(Array(optionsSet.size).fill(0))
            votedBool = setVotedBool(false)
        }
    }

    let optionSectionButtons = [...optionsSet].map((key, index) => {
        
        return(
            <div key={uniqid()}
            style={{
                border:"1px solid black",
                display:'flex',
                justifyContent:'center',
                fontSize:'5vh',
                backgroundColor:['white','gray'][optionSelected[index]]
                }}
            onClick={() => {optionSelectedFunction(index)}}
            >
                {votedBool ? String(key) + ': number': key}
            </div>
        )
    })

    return(
        <>

        <div style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            width: "100%"
        }}>
            <div style={{
                border:"4px solid #CC0000",
                width: "60%" ,
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0, .25))",
                margin:'auto'
            }}>
                <h2 style={{
                    textAlign:'center'
                }}>{questionText}</h2>
                <div style={{
                    display: 'flex',
                    flexDirection:'column',
                    gap: "10px",
                    marginLeft: '10%',
                    marginRight: '10%',
                    marginBottom: '5%'
                    // border:"4px solid blue",
                }}>
                    {optionSectionButtons}
                </div>
            </div>
        </div>
        </>
    )
}