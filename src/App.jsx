import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const clickToBookmark = (blog) => {
    setBookmarks( [...bookmarks, blog] )
  }

  return (
    <>
      <Header></Header>
      <div className='flex gap-8 mx-20'>
        <Blogs clickToBookmark={clickToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
