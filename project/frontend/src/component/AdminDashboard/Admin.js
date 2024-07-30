import React from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import { AllMenu } from './AllMenu'
import { AllOrder } from './AllOrder'
import { Addmenu } from './Addmenu'
import { Sidebar } from './Sidebar'

export const Admin = () => {
  return (
    <div className='flex flex-row justify-start'>
        <Sidebar/>
        <AllMenu/>

    </div>
  )
}
