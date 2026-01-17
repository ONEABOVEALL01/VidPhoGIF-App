import React from 'react'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'
import Fotter from './components/Fotter'

const App = () => {
  return (
    <div className=''>

      <div className='h-[10vh] w-full fixed top-0 z-10 '>

        <SearchBar />

  
      </div>
     
   

      <div className='overflow-y-auto  h-screen pt-[10vh]'>
       <Tabs />

       <ResultGrid />

         <div className='bottom-0 relative w-full'>

        <Fotter />
      </div>

      </div>

    

    </div>
  )
}

export default App
