import React, { useState } from 'react'
import PollComponent from './PollComponent'

export default function FeedComponent() {
    let optionSet = new Set(['Op1', 'Op2', 'Op3'])
    return(
        <div style={{
            display:'flex',
            flexDirection:'column',
            gap: "20px" 

        }}>
            <PollComponent questionText ='Test Question' optionsSet = {optionSet}></PollComponent>
            <PollComponent questionText ='Test Question' optionsSet = {optionSet}></PollComponent>
            <PollComponent questionText ='Test Question' optionsSet = {optionSet}></PollComponent>
            <PollComponent questionText ='Test Question' optionsSet = {optionSet}></PollComponent>
        </div>
    )
}