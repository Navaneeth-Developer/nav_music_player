import "./styles/app.scss"
import Song from "./components/Song";
import Player from "./components/Player";
import data from "./util"
import { useState } from "react";
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4]);
  const[isPlaying,setIsPlaying] = useState(false);
  return (
    <div className="App">
     <Song currentSong={currentSong}/>
     <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
    </div> 
  );
}

export default App;
