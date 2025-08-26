import { useState } from 'react'
import FrontPage from './front'
import './App.css'

function App() {
  const [currentPage, setPage] = useState("main")

  if (currentPage == "main"){
    return (
      <div id='mainApp'>
        <FrontPage page={currentPage}></FrontPage>
      </div>
    )
  }
}

export default App
