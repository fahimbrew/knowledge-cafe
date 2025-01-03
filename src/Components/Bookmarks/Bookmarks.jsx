import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookMarks,readingTime}) => {
    return (
        <div className="md: w-1/3 py-6 rounded-2xl bg-[#f3f3f3] px-10">
            <div className='text-3xl text-purple-600 bg-purple-50 border border-purple-300 rounded-3xl p-4 mb-9'>
             <p>Spent time on read : <span>{readingTime} Min</span></p>
            </div>
            <h3 className="text-3xl font-bold">Bookmarked Blogs: {bookMarks.length}</h3>
            <div>
                {
                    bookMarks.map((bookMark,index)=><Bookmark key={index} bookMark = {bookMark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookMarks: PropTypes.array.isRequired,
    readingTime : PropTypes.number
    
}
export default Bookmarks;