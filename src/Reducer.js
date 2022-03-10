export const reducer=(state,action)=>{

   switch (action.type)  {

    case 'ADD':{
            
            console.log('ADD')  
            console.log('payload:'+action.payload)
            console.log('data:'+state.data)
            return {
                   ...state,
                    data:action.payload ,
                //    localStore: [...state.localStore,state.data]
                   }
                     
   }

    case 'DISPLAY' :{
               
             console.log('DISPLAY')
             console.log('data:' +state.display)
             return{
                ...state,
                 display:[...state.display,state.data],
                 data:[]

                 //  ...state.display
             }      
            
    }

    case 'DEL':{

                return{
                    ...state,
                    display: state.display.filter((e,index)=>{
                    return (index!== action.payload)
                    })
                } 
    }

    case 'EDIT':{
               
        console.log("EDIT")
        console.log(state.display)
        console.log(action.payload)
                     return{
                         ...state,
                         data:state.display.find((e,index)=>{
                            
                             return (index === action.payload)
                          
                         }),
                         edit_index: action.payload

                     }
    }
    case 'SAVE_EDIT':{
        console.log("Save Edit Clicked")
        console.log(state.edit_index)
        console.log(state)
        console.log(state.display)
                     return{
                         ...state,
                         display:state.display.map((e,index)=>{
                                   
                                    console.log('Index:'+index)

                                    if (index===state.edit_index){
                                        return [state.data]
                                    }
                                   else{
                                       return [e]
                                   }
                         }),
                         data:[]

                        
                         
                     }
                     
                         
    }
}

    return state

}