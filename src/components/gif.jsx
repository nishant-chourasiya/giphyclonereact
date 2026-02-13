import React from 'react'
import { Link } from 'react-router-dom';

const Gif = ({ gif, hover = true }) => {
  return (
    <Link to={`${gif.type}/${gif.slug}`}>
      <div className='w-full mb-3 relative cursor-pointer'>
        <img
          src={gif?.images?.fixed_width.webp}
          alt={gif?.title}
          className="w-full object-cover rounded transition-all duration-300"
        />

        {hover && (
          <div className="absolute inset-0 rounded opacity-0 hover:opacity-100 transition-opacity duration-300
                          bg-gradient-to-b from-transparent via-transparent to-black
                          font-bold flex items-end gap-2 p-2 text-sm">
            <img
              src={gif?.user?.avatar_url}
              alt={gif?.user?.display_name}
              className='h-6 w-6 rounded-full object-cover'
            />

            <span className="truncate">
              {gif?.user?.display_name}
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}

export default Gif;