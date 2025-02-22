import React from 'react'
import Header from '../components/Header'
import Blog from '../components/Blog'
import Ais from '../components/Ais'

function Home() {


  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-zinc-800 w-screen h-3/4'>
        <Header title="Where Is Sam"/>
        <div className='flex flex-row items-center justify-center'>
          <Ais/>
          <Blog/>
        </div>
      </div>
    </>
  )
}

export default Home