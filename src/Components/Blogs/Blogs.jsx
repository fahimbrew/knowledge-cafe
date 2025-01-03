import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookMark,handleMarkAsRead}) => {
 const [blogs,setBlogs] = useState([])
 useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data));
 },[])


    return (
        <div className="md:w-2/3">
            <h3 className="text-4xl font-bold">Blogs : {blogs.length}</h3>
            {
                blogs.map((blog,index)=><Blog key={index}
                blog = {blog}
                handleAddToBookMark={handleAddToBookMark}
                handleMarkAsRead = {handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookMark : PropTypes.func.isRequired,
    handleMarkAsRead : PropTypes.func.isRequired
}

export default Blogs;