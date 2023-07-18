import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import Trending from "./Trending";
import Favorites from "./Favorites";
import Player from "./player";
import LIbrary from "./LIbrary";
import './home.css'
import Sidebar from "../components/sidebar/sidebar";



function Home(){
    return(
   <>  
    <Router>
      <div className="main-body">
        <Sidebar/>
        <Routes>
            <Route path='/Library' element={<LIbrary/>}/>
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/trending' element={<Trending/>}/>
            <Route path='/player' element={<Player/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
        </div>
    </Router>
</>
)}

export default Home 

