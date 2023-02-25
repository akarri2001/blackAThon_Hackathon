import React, { useEffect, useState } from 'react'
import PollComponent from './PollComponent'
import PollComponentNew from './PollComponentNew'
import axios from 'axios'
import uniqid from 'uniqid'
import SidebarStudent from './SidebarGov'

export default function FeedComponent() {
    // let optionSet = new Set(['Op1', 'Op2', 'Op3'])

    let [loading, setLoading] = useState(false)


    let [pollObjectArray, setPollObjectArray] = useState([])

    useEffect(() => {
        async function getData(){
    
            loading = setLoading(true)
    
            const response = await await axios.get('http://localhost:5000/polls', {
                headers: {
                    'accept': 'application/json'
                }
            })
                
            let status = await response.status
            
            console.log(status)
    
            if (status === 'ok' || status == 200){
                // Closed the loading page
                let dataReturn = await response.data
                console.log(dataReturn)

                let dataReturn2 = await dataReturn.data
                
                console.log(dataReturn2, 'dr2')
                
                pollObjectArray = setPollObjectArray(dataReturn2)
                setLoading(false)
            }
    
            
        }
    
        getData()
        }, []); 

    return(

        <div id="outer-container">
            <SidebarStudent pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <div id="page-wrap"></div>
                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        gap: "20px" 

                    }}>
                        {
                        (loading) ? (<h1> Loading</h1>) : 
                        (<>
                            {pollObjectArray.map((el) => {
                                return (
                                    <PollComponentNew questionText = {el.questionString} optionsSet = {el.options} key={uniqid()}></PollComponentNew>
                                )
                            })}
                            
                        </>)
                        }
                    </div>
            </div>

    )
}