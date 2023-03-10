import './App.css';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import Navbar from './components/Navbar';
import {Songs} from './Context'
import DataSongs from './data/songs.json'
import Playing from './components/Playing';
import { useState } from 'react';

function App() {
  const [song,setSong]= useState(DataSongs[0])
  const handleSetSong=(idSong)=>{
    const song =  DataSongs.find(song=>idSong===song.id)
      if (!song) 
        setSong(DataSongs[0])
      else 
        setSong(song)
      }
  return (
    <div className="App">
      <Songs.Provider value={{DataSongs,song, handleSetSong}}>
        <Navbar/>
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-playing overflow-hidden'>
          {/* span 1 */}
          <DetailSong/>
        {/* span 2 */}
          <ListSong/>
        </div>
        <Playing />
      </Songs.Provider>
      
    </div>
  );
}

export default App;
