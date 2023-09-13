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

  const [readingTime, setReadingTime] = useState(0)

  const clickMarkAsRead = (id, time) => {
    setReadingTime(readingTime + time)
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id)); 
  }

  return (
    <>
      <Header></Header>
      <div className='flex gap-8 mx-20'>
        <Blogs clickMarkAsRead={clickMarkAsRead} clickToBookmark={clickToBookmark}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
