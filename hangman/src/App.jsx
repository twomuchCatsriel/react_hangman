import { useState } from 'react'
import FrontPage from './front'
import Game from './game'
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
        <Game setPage={setPage}></Game>
      </div>
    )
  }
  else if(currentPage == "stats"){
    return(
      <div id='mainApp'>
        <h1>stats</h1>
      </div>
    )
  }
}

export default App
