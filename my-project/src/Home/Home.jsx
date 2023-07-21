import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import Trending from "./Trending";
// import Favorites from "./Favorites";
import Player from "./player/player";
import Library from "./Library/Library";
import './home.css'
import Sidebar from "../components/sidebar/Sidebar";
import Login from '../components/auth/Login'
import { setClientToken } from "../spotify";



function Home(){
    
    const [token, setToken]= useState('');
    useEffect(()=>{
        const token = window.localStorage.getItem('token');
        const hash = window.location.hash;
        window.location.hash = '';
        if (!token && hash){
            const _token = hash.split('&')[0].split('=')[1]
            window.localStorage.setItem('token', _token);
            setToken(_token)
            setClientToken(_token)
         }else {
            setToken(token)
            setClientToken(token)
         }
    
    }, [])
    return !token ?(
    <Login/>
    ) : (
   <>  
    <Router>
      <div className="main-body">
        
        <Sidebar/>
        <Routes>
            <Route path='/Library' element={<Library/>}/>
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/trending' element={<Trending/>}/>
            <Route path='/player' element={<Player/>}/>
            {/* <Route path='/favorites' element={<Favorites/>}/> */}
        </Routes>
        </div>
    </Router>
</>
)}

export default Home 

// Enja jai ast k tamam component haa qarar dara. wa route hay mukhtalefesh