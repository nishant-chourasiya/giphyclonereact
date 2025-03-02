import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Catogory from './pages/category'
import Search from './pages/search'
import Favorites from './pages/favorites'
import GifPage from './pages/single-gif'
import AppLayout from "./layouts/AppLayout";
// import AppLayout from './layouts/app-layout'
import GifProvider from './context/gif-context'





const router = createBrowserRouter([
  {
    element: <AppLayout/>, 

    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/category",
        element: <Catogory/>,
      },
      {
        path: "/:search/:query",
        element: <Search/>,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
      {
        path: "/favorites",
        element: <Favorites/>,
      },
    ]
  }
])

function App() {

  return (
    <GifProvider>
      <RouterProvider router={router} />
    </GifProvider>
  );
}



export default App;