import React from 'react'
import {Link} from "react-router-dom"
import './sidebarButton.css'
import {IconContext} from 'react-icons'

export default function SidebarButton(props) {
  return (
    <Link to={props.to}>
    <div className='btn-body'>
    <IconContext.Provider value={{size: '50px', className:'btn-icon'}}>
        {props.icon}
        <p className='btn-title'>{props.title}</p>
    </IconContext.Provider>
    </div>
    </Link> 
  )
}
