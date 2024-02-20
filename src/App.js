import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './Components/About';
import { toast } from "react-toastify";
 
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#1E1F20';
      toast.success("Dark mode enabled")
    } 
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      toast.success("Light mode enabled")
    }
  }


  return (
    <>
    <Router>
    <Navbar title="Text Utils Web" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} mode={mode}  />
    <Routes>
          <Route exact path="/about" element={<About mode={mode} />}/>
          <Route exact path="/" element={
          <div className='container my-3'>
          <TextForm mode={mode}/>
          </div>
          }/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
