import React, { useState } from 'react';
import './index.css'

const Todo= ()=>{

const[inputFill,setInput]=useState()

const[display,Setdisplay]=useState([])

const aDD=()=>{
 
      console.log("Add is clicked")

      if(inputFill==="")
{
       
         alert("Please Enter What to do")

}
else{

      console.log(display) 
      Setdisplay([...display,inputFill])
      console.log(display)
      setInput("")
      
}
}
const del=(val)=>{

       console.log("Delete is fired")
       console.log(val)
       Setdisplay(display.filter((arrElem,index)=>{
       return index !==val
       }))

        
 }

 

    return <>
           
              <h1> *** To do list***</h1>
              <input type="text" onChange={((e)=>setInput(e.target.value))} value={inputFill}></input>
               <button id="addBtn" onClick={aDD}>Click To Add</button>
               <hr></hr>
               
          <div >
                
                {
                      
                      display.map((val,index)=>{
                            return <>
                                     <div className="mapdiv" key={index} >
                                     <p>{val}</p>
                                     <button className="crossbtn" onClick={(()=>del(index))}> X </button>
                                    
                                     </div>
                                     
                                     </>
                               
                  })
                     
                  }

</div>

                </>
            }

export default Todo