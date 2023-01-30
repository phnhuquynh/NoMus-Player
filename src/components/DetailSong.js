import React, { useContext } from 'react'
import {Songs} from '../Context'

export default function DetailSong() {
  const {song}=useContext(Songs)
  return (
    <div className=' col-span-1 p-3'>
      <h2 className=' text-cyan-500 font-bold'>Now playing</h2>
      <h2 className=' text-gray-500 text-2xl'>{song.name}</h2>  
        <div>
          <img className=' w-[220px] m-auto mt-10 ' alt='avatar' src={song.links.images[0].url}></img>
        </div>
        <div className=' flex justify-evenly m-10 items-center'>
            <img className='w-[80px] rounded-full' alt='avatar' src={song.links.images[1].url}></img>
            <span className=' text-xl text-white'>{song.author}</span>
        </div>
    </div>
  )
}
