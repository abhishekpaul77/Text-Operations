import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react'
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App(){
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  
  const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='grey';
        showAlert(
          "Dark Mode has been enabled","success"
        )
        document.title= 'TextUtils - Dark Mode'
        // setInterval(() => {
        //   document.title= 'TextUtils Pro'
        // }, 2000);
        // setInterval(() => {
        //   document.title= 'TextUtils Basics'
        // }, 1500);
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white';
        showAlert(
          "Light Mode has been enabled","success"
        )
        document.title= 'TextUtils - Light Mode'
      }
  }
  

  return(
  <>
  <BrowserRouter>
      {/* <Navbar title="yoyo" aboutText="nach meri rani"/> */}
    <Navbar title="Textutils" aboutText="About" mode={mode} modeSwitch={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
    <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
    {/* <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/> */}
    {/* <About/> */}
    </div>
  </BrowserRouter>
  </>
  );
  
}
export default App;
