import Navbar from "./components/Navbar";
import "./App.css";
import TextForms from "./components/TextForms";
import React, {useState} from 'react'
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      type : type,
      msg : message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#072b4f'
      document.title = 'TextUtils - Dark Mode'
      showAlert('success','Dark Mode has been enabled')
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = 'TextUtils - Light Mode'
      showAlert('success','Light Mode has been enabled')
    }
  }

  return (
    <>
      <Navbar title="Text-Utils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForms heading="Enter your text to analyse below" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App;
