import { Link, useParams,useNavigate } from 'react-router-dom'

import './ViewBlog.scss'
import { useBlogContext } from '../../Hooks/useBlogContext'
import { ScrollToTop } from '../../Hooks/customHook'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ViewBlog = () => {
    ScrollToTop()
    const navigate = useNavigate()
    const { id } = useParams()
    const { blogs } = useBlogContext()
    const allBlogs = blogs?.data

    const singleBlog = blogs?.data.find(({_id}) => id === _id)
    
    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className="viewBlog">
            {id === 'allBlog' ?
                <div className='allBlog'>
                    <h1 className="allBlog__header">
                        All Blog Post
                    </h1>
                    <div className="allBlog__mainContainer">
                        {allBlogs && allBlogs.map(({_id,createdAt,img,desc,title},index) => (
                            <div key={index} className="allBlog__container">
                                <img src={img} alt="" className="allBlog__img" />
                                <span className="allBlog__date">{formatDistanceToNow(new Date(createdAt), {addSuffix: true})}</span>
                                <h2 className="allBlog__subHeader">{title}</h2>
                                <p className="allBlog_desc">{`${desc.slice(0,501)}${desc.length > 500 && '...'}`}</p>
                                {
                                    (desc.length > 500) && 
                                    <Link to={`/viewBlog/${_id}`}>
                                        <span className='allBlog_read'>Read More &rarr;</span>
                                    </Link>
                                }
                            </div>
                        ))
                        }
                    </div>
                </div>
                :
                <div className='singleBlogWrapper'>
                    <div className='singleBlog'>
                        <img src={singleBlog.img} alt="" className="singleBlog__img" />
                        <span className="singleBlog__date">{formatDistanceToNow(new Date(singleBlog.createdAt), {addSuffix: true})}</span>
                        <h2 className="singleBlog__subHeader">{singleBlog.title}</h2>
                        <p className="singleBlog_desc">{singleBlog.desc}</p>
                    </div>
                </div>
            }
            <button onClick={handleGoBack}>Back</button>
        </div>
     );
}
 
export default ViewBlog;