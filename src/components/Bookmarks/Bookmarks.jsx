import PropTypes from 'prop-types'
import Bookmark from './Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="w-1/3 bg-gray-300">
            <div>
                <h6 className='text-2xl'>Spent time on read : {readingTime} </h6>
            </div>
            <h3 className="text-3xl text-center">Bookmarks Blogs: {bookmarks.length} </h3>
            {
                bookmarks.map((bookmark, id) => <Bookmark key={id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;