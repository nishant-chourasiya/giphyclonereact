import React, { useEffect } from 'react'
import { GifState } from '../context/gif-context';
import Gif from '../components/gif';
import FilterGif from '../components/filter-gif';

const Home = () => {
  const { gf, gifs, setGifs, filter } = GifState()

  const fetchTrandingGIFs = async () => {
    const { data } = await gf.trending({
      limit: 40,
      type: filter,
      rating: "g"
    });
    setGifs(data);
  };

  useEffect(() => {
    fetchTrandingGIFs()
  }, [filter])

  return (
    <div className='w-full'>
      <img
        src="https://github.com/piyush-eon/react-giphy-clone/blob/master/public/banner.gif?raw=true"
        alt="earth banner"
        className='mt-2 rounded w-full object-cover'
      />

      <FilterGif showTrending />

      <div className='mt-4 columns-2 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4'>
        {gifs.map((gif) => {
          return <Gif gif={gif} key={gif.title} />;
        })}
      </div>
    </div>
  )
}

export default Home