import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

const AppLayout = () => {
  return (
    <div className='bg-gray-950 min-h-screen text-white'>
      <div className='conatiner px-6 py-4 mx-auto'>
        <Header/>
      <main>
        <Outlet/>
      </main>
      </div>

    </div>
  )
}

export default AppLayout;