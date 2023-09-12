import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const { title, cover_img, author_img, author, posted_date, reading_time, hashtags } = blog
    return (
        <div>
            <img src={cover_img} alt={`Cover photo of the blog ${title} `} className='w-full' />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                    <img src={author_img} alt={`Author img`} className='w-16' />
                    <div>
                        <h4 className='text-2xl font-bold'>{author} </h4>
                        <p className='text-xs text-gray-400 font-semibold'>{posted_date} (4 Days ago) </p> 
                    </div>
                </div>
                <div>
                    <p className='text-xl text-gray-400 font-medium'>{reading_time} read</p>
                </div>
            </div>
            <h2 className='text-4xl'>{title} </h2>
        </div>
    );
};

Blog.prototypes = {
    Blog: PropTypes.object.isRequired
}

export default Blog;