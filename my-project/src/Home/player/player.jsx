import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from '../../components/songCard/SongCard'
import Queue from '../../components/queue/queue'
import AudioPlayer from "../../components/audioplayer/AudioPlayer";
// import Widgets from "../../components/widgets";

export default function Player() {
  const location = useLocation();
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTrack(res.data?.items[0]?.track);
        });
    }
   
  }, [location.state]);

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer
          currentTrack={currentTrack}
          total={tracks}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        {/* <Widgets artistID={currentTrack?.album?.artists[0]?.id} /> */}
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack?.album} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
}








// import React, { useEffect, useState } from 'react'
// import './player.css'
// import { useLocation } from 'react-router-dom'
// import apiclient from '../../spotify'
// import SongCard from '../../components/songCard/SongCard'
// import Queue from '../../components/queue/queue'

// export default function Player() {
//   const location = useLocation();
//   const [tracks, setTracks] = useState([]);
//   const [currentTrack, setCurrentTrack] = useState({});
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (location.state) {
//       apiclient
//         .get("playlists/" + location.state?.id + "/tracks")
//         .then((res) => {
//           setTracks(res.data.items);
//           setCurrentTrack(res.data?.items[0]?.track);
//         });
//     }
//   }, [location.state]);

//   useEffect(() => {
//     setCurrentTrack(tracks[currentIndex]?.track);
//   }, [currentIndex, tracks]);

  
//   return (
//     <div className="screen-container flex">
//       <div className="left-player-body"></div>
//       <div className="right-player-body">
//         <SongCard album={currentTrack?.album} />
//         <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
//       </div>
//     </div>
//   );
// }