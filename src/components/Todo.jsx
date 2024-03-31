 import React,{useContext} from "react";
 import { ThemeContext } from "../context";

 function Todo(props){
     const Theme = useContext(ThemeContext)
     const {state,dispatch} = props
     return(
    <>
    <span className="todo" style={{ color: state.done ? 'grey' : 'black'}}>
      {state.todo}
    </span>
    <button onClick={()=> dispatch({type:'delete',payload:{id: state.id}})}>Delete</button>
    <input type="checkbox" name={state.id} value={state.done} onClick={
        dispatch({type:'done',payload:{id: state.id}})
    }/>
   
</>
     )
    
 }
 export default Todo;