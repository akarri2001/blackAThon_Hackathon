import React, { useEffect, useState } from "react";
import axios from 'axios'


export default function TestComponent(){

    
    
    

    useEffect(() => {
        
            
  
            // Await make wait until that 
            // promise settles and return its result
        
        
        async function getData(){
            const response = await axios.get('http://localhost:5000/students/63fa063a016a0b93067deb81');

            // After fetching data stored it in posts state.
            // studentData = setStudentData(await response.json());
            await console.log(response.data)

            // Closed the loading page
            
        }

        getData()
        }, []); 
    

    

    return(
        <>
        <p>Test</p>
        </>
    )


}