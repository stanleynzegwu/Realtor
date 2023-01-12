import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Blog.scss'

import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteOutline,MdPublish } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { Loader } from '../../../components';
import { useBlogContext } from '../../../Hooks/useBlogContext';
import { useDeleteBlog } from '../../../Hooks/useApiRequest';
import { uploadImgAndUpdate } from '../../../firebase'
import { useUpdateBlog } from '../../../Hooks/useApiRequest';
import { TypingText } from '../../../components';

const Blog = () => {
    const { UpdateBlog } = useUpdateBlog()
    const { DeleteBlog } = useDeleteBlog()
    const { blogs } = useBlogContext()
    const allBlogs = blogs?.data
 
    const [toggle,setToggle] = useState(false)
    const [id,setId] = useState(null)
    const handleUpdateState = (id) => {
        setId(id)
        setToggle(true)
    }
    const currentBlog = allBlogs?.find(blog => blog._id === id)
    const [formBlog,setFormBlog] = useState({desc:'',title:''})
    const [preview,setPreview] = useState('')
    const [newImg,setNewImg] = useState('')
    console.log(formBlog)

    useEffect(() => {
        currentBlog && setFormBlog({desc:currentBlog.desc,title:currentBlog.title})
    },[id,currentBlog])

    //handle Image Change
    function handleImageChange(e) {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setNewImg(e.target.files[0])
    }

    function handleChange(e){
        let {name,value} = e.target
        setFormBlog(data => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        //if there is an img file,call the upload img func to upload to firebase , then the ref stored in db
        if(newImg){
            uploadImgAndUpdate(newImg,UpdateBlog,currentBlog._id,formBlog)
        //else when there is no image file, just do other updates, no img to upload to firebase
        }else{
          await UpdateBlog(currentBlog._id,formBlog)
        }
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 50 },
        { field: 'img', headerName: 'img', width: 70 ,renderCell: (params) => {
            return (
                <div className='userListUser'>
                    <img className='userListImg' 
                        src={params.row.img 
                        ? 
                        params.row.img 
                        : 
                        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
                        } 
                        alt='avatar'
                    />
                </div>
            )
        }},
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'desc', headerName: 'Description', width: 400 },
        { field: 'createdAt', headerName: 'CreatedAt', width: 150 },
        {
            field:'action',
            headerName:'Action',
            width:150,
            renderCell: (params) => {
                return (
                    <> 
                        <button className='userListEdit' onClick={() => handleUpdateState(params.row._id)}>Edit</button>
                        <MdDeleteOutline className='userListDelete' onClick={() => DeleteBlog(params.row._id)}/>
                    </>
                )
            }
        }
      ];

    return ( 
        blogs
        ?
        <div className={toggle ? `admin_blog hideOverrflow` : `admin_blog`}>
            <div  className='admin_blogBtn'>
                <Link to='/adminDashboard/newBlog'>
                    <button>Create</button>
                </Link>
            </div>
            <div style={{ height: 800, width: '100%' }}>
              <DataGrid
                rows={allBlogs}
                disableSelectionOnClick
                columns={columns}
                getRowId={row=>row._id}
                pageSize={20}
                rowsPerPageOptions={[20]}
                checkboxSelection
              />
            </div>
            {toggle 
            &&
            <div className='blogEdit'>
                <div className='blogEdit__holder'>
                    <div className='blogEdit__topHolder'>
                        <p>EDIT BLOG</p>
                        <span className='close-icon' onClick={() => setToggle(false)}><AiOutlineClose /></span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='blogEdit__left'>
                            <div className="blogEdit__Item blogEdit__imageHolder">
                                <img src={preview ? preview : currentBlog.img} alt='blog'/>
                                <label htmlFor="file"><MdPublish /></label>
                                <input
                                    type="file"
                                    id='file'
                                    name="img"
                                    onChange={handleImageChange}
                                    style={{ display:"none"}}
                                />
                            </div>
                            <div className="blogEdit__textHolder">
                                <label>Heading</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formBlog.title}
                                    onChange={handleChange}
                                 />
                            </div>
                        </div>
                       
                        <div className='blogEdit__right'>
                            <div className='blogEdit__textarea'>
                                <textarea
                                    id=""
                                    cols="30"
                                    rows="20"
                                    name='desc'
                                    value={formBlog.desc}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type='submit' className='blogUpdateButton'>UPDATE</button>
                        </div>
                    </form>
                </div>
            </div>
        }
        </div>
        :
        <Loader className='loading'/>
     );
}
 
export default Blog;