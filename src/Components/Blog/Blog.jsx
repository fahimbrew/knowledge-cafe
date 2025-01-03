import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({blog,handleAddToBookMark,handleMarkAsRead}) => {
    // console.log(blog)
    const {title,cover,reading_time,author_img,author,posted_dates,hashtags} = blog 
    return (
        <div className='border-b-2 md:w-9/12 my-7'>
            <div className='md:full h-[300px]'>
                <img className='h-full rounded-xl w-full object-cover' src={cover} alt={`cover picture of the ${title}`} />
            </div>
            {/* flex box */}
            <div className='flex justify-between p-4'>
                <div className='flex justify-between gap-4 items-center'>
                    <div>
                        <img className='w-10 rounded-full ring' src={author_img} alt="" />
                        </div>
                    <div>
                    <p className='text-gray-700 font-semibold'>{author}</p>
                    <p className='text-gray-500 font-light'>{posted_dates}</p>
                    </div>

                </div>
                <div className='flex items-center gap-2'>
                    <h3>{reading_time} min read</h3>
                    <button onClick={()=>handleAddToBookMark(blog)}
                    ><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h3 className='text-4xl font-semibold p-3'>{title}</h3>
            <div className='p-2'>
                <p className='space-x-1'>{hashtags.map((hashtag,index)=><span key={index}>{hashtag}</span>)}</p>
                <p><button onClick={()=>handleMarkAsRead(reading_time)} className='underline text-blue-500'>Mark as read</button></p>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func.isRequired,
    handleMarkAsRead : PropTypes.func.isRequired
}

export default Blog;
