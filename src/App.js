import React, { useState, useRef } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import './styles/app.scss'
import data from './util'
import Library from "./components/Library";
import Nav from "./components/Nav";
function App() {
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [songInfo, setSongInfo] = useState({
            currentTime: 0,
            duration: 0,
        });
    const [libraryStatus, setLibraryStatus] = useState(false)

    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({...songInfo, currentTime: current, duration })
    };

  return (
    <div className="App">
        <Nav
            libraryStatus={libraryStatus}
            setLibraryStatus={setLibraryStatus}
        />
      <Song currentSong={currentSong} />
      <Player
          audioRef={audioRef}
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setSongInfo={setSongInfo}
          songInfo={songInfo}
          songs={songs}
          setCurrentSong={setCurrentSong}
      />
        <Library
            audioRef={audioRef}
            songs={songs}
            setCurrentSong={setCurrentSong}
            isPlaying={isPlaying}
            setSongs={setSongs}
            libraryStatus={libraryStatus}
        />
        <audio
            onTimeUpdate={timeUpdateHandler}
            ref={audioRef}
            src={currentSong.audio}
            onLoadedMetadata={timeUpdateHandler}
        />
    </div>
  );
}

export default App;
