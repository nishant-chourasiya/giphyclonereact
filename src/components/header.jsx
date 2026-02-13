import React, { useEffect, useState } from 'react'
import { HiEllipsisVertical, HiMiniBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { GifState } from '../context/gif-context'
import GifSearch from './gif.search'

const Header = () => {
  const [categories, setCategories] = useState([])
  const [showCategories, setShowCategories] = useState(false)

  const { gf, filter, setFilter, favorites } = GifState()

  const fetchGifCategories = async () => {
    try {
      const { data } = await gf.categories()
      setCategories(data)
    } catch (error) {
      console.error("Error fetching categories:", error)
    }
  }

  useEffect(() => {
    fetchGifCategories()
  }, [])

  return (
    <nav>
      <div className='relative flex flex-wrap gap-4 justify-between items-center mb-2'>

        {/* Logo */}
        <Link to="/" className='flex gap-2 items-center'>
          <img src="logo (1).svg" className="w-8" alt="giphy logo" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight animate-pulse cursor-pointer">
            GIPHY
          </h1>
        </Link>

        {/* Right section */}
        <div className='font-bold flex gap-3 items-center text-sm sm:text-md flex-wrap'>

          {/* Desktop categories */}
          {categories?.slice(0, 5)?.map((category) => (
            <Link
              key={category.name}
              to={`/${category.name_encoded}`}
              className="px-4 py-1 border-b-4 hidden lg:block hover:bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600"
            >
              {category.name}
            </Link>
          ))}

          {/* More categories button (desktop) */}
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="hidden lg:block"
          >
            <HiEllipsisVertical
              size={32}
              className={`transition hover:bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600 border-b-4
                ${showCategories ? "bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600" : ""}`}
            />
          </button>

          {/* Favorites */}
          <Link
            to="/favorites"
            className='h-9 bg-gray-700 px-4 flex items-center rounded text-sm sm:text-base'
          >
            Favorites GIFs
          </Link>

          {/* Mobile menu icon */}
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="block lg:hidden"
          >
            <HiMiniBars3BottomRight
              className='text-sky-400'
              size={30}
            />
          </button>

        </div>

        {/* Categories dropdown (mobile + desktop) */}
        {showCategories && (
          <div className='absolute left-0 right-0 top-full mt-3 px-6 pt-6 pb-9 w-full bg-gradient-to-r from-teal-600 via-blue-600 to-pink-600 z-20'>
            <span className="text-2xl sm:text-3xl font-extrabold">Categories</span>
            <hr className="bg-gray-100 opacity-50 my-5" />
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
              {categories?.map((category) => (
                <Link
                  key={category.name}
                  to={`/${category.name_encoded}`}
                  onClick={() => setShowCategories(false)}
                  className='block font-bold'
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Search */}
      <GifSearch />
    </nav>
  )
}

export default Header
























































