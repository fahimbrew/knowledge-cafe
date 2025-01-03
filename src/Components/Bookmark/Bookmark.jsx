import PropTypes from 'prop-types';
const Bookmark = ({bookMark}) => {
    // console.log(bookMark)
    const {title,author} = bookMark;
    return (
        <div className='bg-white rounded-3xl p-4 m-4'>
            <h3 className='text-2xl text-gray-600'>{title}</h3>
            <p className='font-light text-red-300'>By {author}</p>
        </div>
    );
};

Bookmark.propTypes = {
    bookMark: PropTypes.object.isRequired
}
export default Bookmark;