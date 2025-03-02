import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GifState } from '../context/gif-context'
import FilterGif from '../components/filter-gif'
import Gif from '../components/gif'

const SearchPage = () => {
  const [SearchResult, setSearchResult] = useState([])
  const {gf ,filter} = GifState()
  const {query} = useParams()
  const fetchSearchResults = async()=>{
    const {data} = await gf.search(query,{
      sort:"relevant",
      lang:"en",
      type:filter,
      limit:20
    })
    setSearchResult(data)
  }
  useEffect(() => {
    
  fetchSearchResults()
    
  }, [filter])
  
  return (
    <div className='my-4'>
      <h2 className='text-5xl pb-3 font-extrabold'>{query}</h2>

      <FilterGif alignLeft={true}/>

      {SearchResult.length > 0 ?(
        <div className='columns-2 md:columns-3 lg:columns-4 gap-2'>
          {SearchResult.map((gif)=>(
            <Gif gif={gif} key={gif.id}/>
          ))}

        </div>

      ):(
        <span>
       
          No Gif found for {query}. try searching for stickers instead
        </span>
      )}

    </div>
  )
}

export default SearchPage