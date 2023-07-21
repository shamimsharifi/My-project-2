import React from 'react'
import {Link, useLocation} from "react-router-dom"
import './sidebarButton.css'
import {IconContext} from 'react-icons'

export default function SidebarButton(props) {
  const location = useLocation()
  
   const isActive = location.pathname === props.to

 
   const btnClass = isActive ? "btn-body active"  : "btn-body"
  return (
  
    
    <Link to={props.to}>
      <div className={btnClass}>
        <IconContext.Provider value={{size: '50px', className:'btn-icon'}}>
         {props.icon}
         <p className='btn-title'>{props.title}</p>
        </IconContext.Provider>
     </div>
    </Link> 
  )
}



// da div payen link awal classname btn-body bod baz bakhater k paida kada bare  location dest rasi dashata bashi ba jaisg o const btnclassname ma maandi