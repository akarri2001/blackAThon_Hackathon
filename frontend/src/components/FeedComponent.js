import React, { useState } from 'react'
import PollComponent from './PollComponent'
import PollComponentNew from './PollComponentNew'

export default function FeedComponent() {
    let optionSet = new Set(['Op1', 'Op2', 'Op3'])
    return(
        <div style={{
            display:'flex',
            flexDirection:'column',
            gap: "20px" 

        }}>
            <PollComponentNew questionText ='Test Question' optionsSet = {optionSet}></PollComponentNew>
            <PollComponentNew questionText ='Test Question' optionsSet = {optionSet}></PollComponentNew>
            <PollComponentNew questionText ='Test Question' optionsSet = {optionSet}></PollComponentNew>
            <PollComponentNew questionText ='Test Question' optionsSet = {optionSet}></PollComponentNew>
             
        </div>
    )
}