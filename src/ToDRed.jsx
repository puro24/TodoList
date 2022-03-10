import React, { useReducer, useState } from 'react'
import './index.css'
import { reducer } from './Reducer'

const ToDRed = (props) => {
 
const initvalue={
    data:[],
    display:[],
    edit_index:'',
    localocalStore:[],
    
}

const Add=()=>{
 
     dispatch({type:'DISPLAY'})
     //localStorage=localStorage.setItem(['storeData',state.localocalStore])
     
}

const del=(val)=>{

    dispatch({type:'DEL',payload:val})
}
const edit=(index,val)=>{
    
    dispatch({type:'EDIT',payload:index,data:val})
    setaddEditbutton(false)  

}

const saveEdit=()=>{
    
    dispatch({type:'SAVE_EDIT'})
}

const[state,dispatch]=useReducer(reducer,initvalue)
 const[addEditbutton,setaddEditbutton]=useState(true)

    return (
        <div>
             
             <input type='text' onChange={(e)=>dispatch({type:'ADD',payload:e.target.value})} value={state.data}></input>    
        
{/* 
            {
                addEditbutton ? true | false
            }     */}
        
              <button id="addBtn" onClick={Add}>Add</button>
              <button id="addBtn" onClick={saveEdit}>Save</button>
                {
                state.display.map((e,index)=>{
                   
                       return <div className="mapdiv" style={{color:'white',display:'flex',backgroundColor:'black',textAlign:'center',justifyContent:'center',marginTop:'5px'}} >
                             <p>{e}</p>
                             <br/>
                             <button className="crossbtn" onClick={()=>del(index)}>X</button><br/>
                             <div>
                        
                             <button style={{color:'Red'}} onClick={(()=>edit(index,e))}> Edit </button>
                             </div>
                            </div>
                                    
                                      })
              
              } 
     
              </div>
       
    )
}

export default ToDRed
