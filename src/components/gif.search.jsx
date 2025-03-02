import React, { useState } from 'react'
import { HiMiniXMark, HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom'

const GifSearch = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate();

    const searchGIFs = ()=>{
        if(query.trim() === ""){
            return;
        }
        navigate(`./search/${query}`)

    }
  return (
    <div className='flex reletive'>
        <input type="text" 
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
        placeholder="search all the GIFs and Stickers"
        className='w-full pl-4 pr-14 py-5 bg-white text-xl text-black rounded-bl rounded-tl border-blue-400 '/>

        {query && (
            <button onClick={()=> setQuery("")}
            className='absolute bg-gray-500 opacity-90 rounded-full right-20 mr-5 mt-5'>
                <HiMiniXMark size={22}/>

            </button>
        )}

           <button className='bg-gradient-to-tr from-pink-500 to-pink-300 text-white px-4 rounded-tr border-blue-400 rounded-br py-2'
           onClick={searchGIFs}>
            <HiOutlineMagnifyingGlass size={35} className='-scale-x-100'/> 
            </button>
    </div>
  )
}

export default GifSearch;