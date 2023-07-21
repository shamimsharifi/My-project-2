import React, { useEffect, useState } from 'react'

import './sidebar.css'
import SidebarButton from './SidebarButton'
import {MdFavorite} from 'react-icons/md'
import {FaGripfire, FaPlay} from 'react-icons/fa'
import {FaSignOutAlt} from 'react-icons/fa'
import {IoLibrary} from 'react-icons/io5'
import {CgFeed} from 'react-icons/cg'
import apiClient from '../../spotify'


export default function Sidebar() {
  const [image, setImage]= useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r3ogaSmpwNYSaEKRifVaHjwmYsKSW7fC6Q&usqp=CAU' )
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.image);
      
    });
    
  }, []);
  

  
  return (
    <div className='sidebar'>
      <img src= {image} className='profile-image' alt='image'/>
      <div>
      <SidebarButton title="Feed" to="/Feed" icon={<CgFeed />} />
        <SidebarButton title="Trending" to="/Trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/Player" icon={<FaPlay />} />
        <SidebarButton title="Favorites" to="/Favorites" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/Library" icon={<IoLibrary />} />

      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  )
}



// E chizay ast k da baghalak astan