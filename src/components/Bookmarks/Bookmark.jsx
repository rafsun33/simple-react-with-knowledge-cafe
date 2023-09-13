import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const {title} = bookmark   
    return (
        <div className='bg-white p-4 mt-2 mx-4'>
           <h3 className='text-2xl'> {title} </h3> 
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;