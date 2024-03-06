import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import Abouts from './components/Abouts.js';
import { useState } from 'react';
// import {
//   BrowserRouter ,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const newfunc = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert('Dark Mode Deactivated', 'success');
      document.title = 'TextUtils-Light Mode';
    }
    else if (mode === 'light') {
      setmode('dark');
      let a = prompt("Enter The Color Of The Dark Mode");
      document.body.style.backgroundColor = `${a}`;
      showalert('Dark Mode Activated', 'success');
      document.title = 'TextUtils-Dark Mode'
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar dropdown="DropDown" mode={mode} newfunc={newfunc} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/Abouts" element={ <Abouts />}>
             
            </Route> */}
            {/* <Route exact path="/TextForm" element={ <TextForm showalert={showalert} heading="Enter The Text To Analyze" mode={mode} />}> */}
             
            <TextForm showalert={showalert} heading="Enter The Text To Analyze" mode={mode} />
            {/* </Route>
          </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;