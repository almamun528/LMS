import React from 'react'
import { Outlet } from 'react-router-dom'

const Educator = () => {
  return (
    <section>
     <h2>Educator page </h2>
     <Outlet/>
    </section>
  )
}

export default Educator
