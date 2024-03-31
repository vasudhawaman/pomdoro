import React ,{useState} from 'react';
export const ThemeContext = React.createContext(); 
export function ThemeProvider({children}){
    

function handleForm(e){
       e.preventDefault();
      let option = document.getElementById("theme").value ;
      dispatch(option);
    
}


const [state,dispatch] = useState('default'); // access to obj 

return(
    <>
    
     
    <ThemeContext.Provider  value={state}>
    <form onSubmit={handleForm}>
    <select id="theme" >
           <option value="cafe">Cafe</option>
           <option value="beach">Beach</option>
           {/* <option value="fiat">Fiat</option>
           <option value="audi">Audi</option> */}
      </select>
      <button>Get option</button>
    </form>
      {children}
    </ThemeContext.Provider > 
    </>
);

}