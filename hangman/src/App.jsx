import { useState } from 'react'
import FrontPage from './front'
import './App.css'

function App() {
  const [currentPage, setPage] = useState("main")

  if (currentPage == "main"){
    return (
      <div id='mainApp'>
        <FrontPage setPage={setPage}></FrontPage>
      </div>
    )
  }
  else if(currentPage == "play"){
    return(
      <div id='mainApp'>
        <h1>play</h1>
      </div>
    )
  }
  else if(currentPage == "stats"){
    return(
      <div id='mainapp'>
        <h1>stats</h1>
      </div>
    )
  }
}

export default App
