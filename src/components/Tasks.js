import React ,{useReducer,useContext,useState} from 'react';
import { ThemeContext } from '../context';
import Todo from './Todo';
function Tasks(){
    const Theme =useContext(ThemeContext);
    function reducer(state,action){
       
          switch(action.type){
              case 'add':
                return [...state ,action.payload];
              case 'delete':
                return state.filter((s)=> s.id !== action.payload.id );
              case 'done':
                 return state.map((s)=>{
                   if(s.id === action.payload.id) return {id: s.id,todo: s.todo, done: !s.done}
                 });
              default :
                return state;
          }
    }
     const [state,dispatch] = useReducer(reducer,[]);
     const [todo,setTodo] = useState('');
     function handleForm(e){
          e.preventDefault();
          console.log(state)
          dispatch({ type: 'add', payload:{id : Date.now() + Math.round(Math.random()*9), todo: todo, done: false}})
          setTodo('')
     }
     return(
      <>
          <form onSubmit={handleForm}>
            <input type='text' onChange={(e)=> setTodo(e.target.value)} value={todo} />
            <button>Submit</button>
        </form>
        {
          state.length>0 &&  state.map((t)=>{
            return <Todo key={t.id} state={t}  dispatch={dispatch } />;

          })
        }
      </>
        
     );
}
export default Tasks;