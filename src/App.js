
import React,{useState} from 'react'
import Navbar from "./Componant/Navbar"
import TextFile from './Componant/TextFile'
function App(props){
  const [mode,setMode] = useState('light')
  
  let toggleMode=()=>{
  if(mode==='dark'){
    setMode('light')
   document.body.style.backgroundColor = 'white' 
  }
   
  
  
  else{
    setMode('dark')
    document.body.style.backgroundColor = 'black'
    
    
  }
  
  }
  return(
    <div>
      <Navbar  mode={mode} toggleMode={toggleMode} ></Navbar>
      <TextFile />
    </div>
  )
}
export default App;