import React from "react";
import './App.css';
import Header from "./header";
import MainComponent from "./MainComponent";

export default function App() {

  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  const styles = {
    border : darkMode ? "3px solid black" : "3px solid white"
  }

  return(
    <div>
      <div className="circle"></div>
      <div className='container' style={styles}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <MainComponent darkMode={darkMode} />
      </div>
    </div>
  )
}