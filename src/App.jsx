import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SingleCountry from './Pages/SingleCountry'
import Layout from './Layout/Layout'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/:country' element={<SingleCountry />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
