import React ,{useState , useEffect} from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from './AnimatedProgressBar';
export function Timer(){
    const [mins,setMin] = useState(25);
    const [secs,setSec] = useState(0);
    const [isRunning , setRun]= useState(false)
    let pause = false;
    function handleTime(){
        setMin(24)
        setSec(59)
        setRun(true)
    }
    
    function handlePause(){
       setRun((prev)=> !prev)
    }
    useEffect(()=>{
        if(isRunning && !pause){
            setTimeout(()=>{
               setSec( 
                (prev)=> {
                    if(prev == 0) {
                        setMin((prev)=> prev -1)
                        return 59;
                    }
                   else if( prev >0 && prev<=10) return  '0' +  `${prev -1}` ;
                   else return prev -1;
                }
                    );  
           } , 1000);
        }
        
        
    },[isRunning,mins,secs]);
    return(

        <AnimatedProgressProvider
    valueStart={100*(mins-1/25)}
    valueEnd={100*(mins/25)}
    duration={1}
    easingFunction={easeQuadInOut}
  >
    {(value) => {
      console.log(value);
      return (
        <div id="time">
        <CircularProgressbarWithChildren value={value} >
        <>
        <h1>{mins} : {secs === 0 ? `0` +`${secs}` : secs}</h1>
        { !isRunning ? <button  onClick={handleTime}>START</button> : null }
        <button onClick={ handlePause} >Pause</button>
            </>
     </CircularProgressbarWithChildren>
     </div> 
      );
    }}
  </AnimatedProgressProvider>
             
    )
}