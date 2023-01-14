import './ViewBlog.scss'
import { useBlogContext } from '../../Hooks/useBlogContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ViewBlog = () => {
    const { blogs } = useBlogContext()
    const allBlogs = blogs?.data
    
    return (
        <div className="viewBlog">
            <div className='allBlog'>
                <h1 className="allBlog__header">
                    All Blog Post
                </h1>
                <div className="allBlog__mainContainer">
                    {allBlogs && allBlogs.map(({createdAt,img,desc,title},index) => (
                        <div key={index} className="allBlog__container">
                            <img src={img} alt="" className="allBlog__img" />
                            <span className="allBlog__date">{formatDistanceToNow(new Date(createdAt), {addSuffix: true})}</span>
                            <h2 className="allBlog__subHeader">{title}</h2>
                            <p className="allBlog_desc">{`${desc.slice(0,501)}${desc.length > 500 && '...'}`}</p>
                            {(desc.length > 500) && <span className='allBlog_read'>Read More &rarr;</span>}
                        </div>
                    ))
                    }
                </div>
                
            </div>
        </div>
     );
}
 
export default ViewBlog;