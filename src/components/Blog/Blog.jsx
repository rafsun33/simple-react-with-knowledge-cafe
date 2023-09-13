import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';
const Blog = ({ blog, clickToBookmark, clickMarkAsRead }) => {
    const { title, cover_img, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div className='mb-16 '>
            <img src={cover_img} alt={`Cover photo of the blog ${title} `} className='w-full mb-5' />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                    <img src={author_img} alt={`Author img`} className='w-16' />
                    <div>
                        <h4 className='text-2xl font-bold'>{author} </h4>
                        <p className='text-xs text-gray-400 font-semibold'>{posted_date} (4 Days ago) </p> 
                    </div>
                </div>
                <div className='flex gap-3'>
                    <p className='text-xl text-gray-400 font-medium'>{reading_time} read</p>
                    <button onClick={()=>clickToBookmark(blog)}> <FaRegBookmark></FaRegBookmark> </button>
                </div>
            </div>
            <h2 className='text-4xl'>{title} </h2>
            <p>
                {
                    hashtags.map((hash, id)=><span key={id}><a href="">{hash} </a></span> )
                }
            </p>
            <p>
                <button onClick={()=>clickMarkAsRead(reading_time)}>Mark As Read</button>
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    clickToBookmark: PropTypes.func,
    clickMarkAsRead: PropTypes.func
}

export default Blog;