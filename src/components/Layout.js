import React,{useContext} from 'react';
import { ThemeContext } from '../context';
import { Timer } from './Timer';
import Tasks from './Tasks';
function Layout(){
    const Theme = useContext(ThemeContext);
    console.log(Theme);
    function findBg(theme){
        switch(theme){
            case 'cafe' :
                return {
                    backgroundColor: "rgb(175,120,68)",
                    width: "100%",
                    height: "100vh"

                }
            case 'beach' :
              return {
                   backgroundColor :"#44af9f",
                   width: "100%",
                   height: "100vh"
                 
              }
            default :
             return {
                 backgroundColor: "#051160",
                 width: "100%",
                 height: "100vh"
             }
        }
    }
     const style = findBg(Theme);
     return (
        <div style={style} class="centered">
             <Timer />
             <Tasks />
        </div>
         
     );
}
export default Layout;