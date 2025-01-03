import { useState } from "react"
import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/Bookmarks/Bookmarks"
import Header from "./Components/Header/Header"

function App() {
  const [bookMarks,setBookMarks] = useState([]);

  const [readingTime,setReadingTime] = useState(0)

  const handleAddToBookMark = (blog)=>{
      // console.log(blog);
      // console.log('blog re add kormu')
      const newBookMarks = [...bookMarks,blog];
      setBookMarks(newBookMarks);
      // console.log(newBookMarks)
  }

  const handleMarkAsRead = (time)=>{
    // console.log(time);
    // console.log('time dibo chude')
    // setReadingTime(readingTime + time);
    // console.log(readingTime);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // console.log(newReadingTime);
  }

  return (
    <>
     <Header></Header>
     <div className="md:flex container mx-auto my-8">
     <Blogs handleAddToBookMark = {handleAddToBookMark}
            handleMarkAsRead = {handleMarkAsRead}
     ></Blogs>
     <Bookmarks bookMarks = {bookMarks}
                readingTime = {readingTime}
     ></Bookmarks>
     </div>
     
      
      
    </>
  )
}

export default App
