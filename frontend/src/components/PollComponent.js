import React, { useState } from 'react'
import { LeafPoll, Result } from 'react-leaf-polls'
import 'react-leaf-polls/dist/index.css'
import uniqid from 'uniqid'

export default function PollComponent(props) {
    
    let {questionText, optionsSet} = {...props}

    
    let [votedBool, setVotedBool] = useState(false)

    let [optionSelected, setOptionSelected] = useState(Array(optionsSet.size).fill(0))


    function optionSelectedFunction(optionIndex){
        if (optionSelected[optionIndex] !== 1){ //already selected
            optionSelected = setOptionSelected(optionSelected.map((value, index) => {
                if (index === optionIndex){
                    return 1
                }
                else{
                    return 0
                }
            }))
        }
        else{
            optionSelected = setOptionSelected(Array(optionsSet.size).fill(0))
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
                backgroundColor:['white','blue'][optionSelected[index]]
                }}
            onClick={() => {optionSelectedFunction(index)}}
            >
                {key}
                
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
            border:"1px solid black",
            backgroundImage: "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))",
        }}>
            <h2>{questionText}</h2>
            <div style={{
                display: 'flex',
                flexDirection:'column',
                gap: "10px",
                width: "100%" 
            }}>
                {optionSectionButtons}
            </div>
        </div>
        </>
    )
}