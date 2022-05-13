import React, { useContext } from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { GlobalContext } from '../Components/Global/GlobalContext'

import DashHeader from './DashHeader'
import HomeDash from './HomeDash'

const DashHolder = () => {

  return (
  <div class="page-wrapper dashboard">
  <DashHeader/>
  <Routes>
      <Route  path = "/"  element = {<HomeDash/>} />
    
  </Routes>
</div>
  )
}

export default DashHolder