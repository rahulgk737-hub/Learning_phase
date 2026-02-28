import React from 'react'

import { useState } from 'react'
const Static =()=>{
    const [str,setStr] = useState(1)
    const [furniture,setFurniture] = useState({
        name : "chair",
        screw : 100,
        wheels : 50,
        seat : 50,
        available : true,
        price : 1000
    })
    console.log(furniture)
    function changeName(){
         setFurniture({
            ...furniture,
            wheels : 100
         })
    }
    
    return(
     
        
            <div>
                <h1>{str}</h1>
                <button className='btn_Static' onClick={changeName}>Click</button>
        </div>
    )
}
export default Static