import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuNav from './MenuNav'

const Educator = () => {
  return (
    <section>
     <MenuNav/>
     <Outlet/>
    </section>
  )
}

export default Educator
