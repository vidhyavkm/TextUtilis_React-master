import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  console.log(mode)

  const [alert, setAlert] = useState("")

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert('Enabled dark Mode', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Enabled Light Mode', 'success')

    }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtilis" abouttext="About Us" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/> */}
      <Alert alert={alert} />
      <Switch>
        <Route exact path="/about"><About heading="About Utilitis" /></Route>
        <Route exact path="/">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        </Route>
      </Switch>
      </Router>
      
    </>
  );
}

export default App;
