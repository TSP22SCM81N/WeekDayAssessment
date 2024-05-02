import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Search from './components/SearchDiv/Search'
import Job from './components/JobDiv/Job'

const App = () => {
  return (
    <div className = 'w-[85%] m-auto bg-white'>
      <NavBar/>
      <Search/>
      <Job/>
    </div>
  )
}

export default App