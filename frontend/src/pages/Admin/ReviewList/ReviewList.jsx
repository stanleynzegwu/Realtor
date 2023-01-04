import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { MdDeleteOutline } from 'react-icons/md'
import { AiOutlineClose,AiFillStar } from 'react-icons/ai'

import './ReviewList.scss'
import { useReviewContext } from '../../../Hooks/useReviewContext';
import { useDeleteReview } from '../../../Hooks/useApiRequest';
import { Loader } from '../../../components';

const ReviewList = () => {
    const { DeleteAReview } = useDeleteReview()
    const { reviews } = useReviewContext()
    const allReviews = reviews?.data
    const [toggle,setToggle] = useState(false)
    const [id,setId] = useState(null)
    
    const handleUpdateState = (id) => {
        setId(id)
        setToggle(true)
    }
    const currentReview = allReviews?.find(review => review._id === id)
    const [radio,setRadio] = useState(null)
    const [formReview,setFormReview] = useState('')
    useEffect(() => {
        currentReview && setFormReview(currentReview?.review)
        currentReview && setRadio(currentReview?.isFavorite ? "True" : "False")
    },[id])
    
    console.log(currentReview)
    console.log(currentReview?.review,formReview,radio)

const columns = [
    { field: '_id', headerName: 'ID', width: 70 },
    { field: 'username', headerName: 'User', width: 150 ,renderCell: (params) => {
        return (
            <div className='userListUser'>
                <img className='userListImg' src={params.row.img ?
                params.row.img : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"} 
                alt='avatar'
                />
                {params.row.username}
            </div>
        )
    }},
    { field: 'useremail', headerName: 'Email', width: 200 },
    {field: 'review',headerName: 'Review',type: 'string',width: 350,},
    {field: 'isFavorite',headerName: 'isFavorite',type: 'boolean',width: 90,},
    {
        field:'action',
        headerName:'Action',
        width:150,
        renderCell: (params) => {
            return (
                <>
                    <button className='userListEdit' onClick={() => handleUpdateState(params.row._id)}>Edit</button>
                    <MdDeleteOutline className='userListDelete' onClick={() => DeleteAReview(params.row._id)}/>
                </>
            )
        }
    }
];

    return (
        allReviews
        ?
        <div className="reviewList">
            <div style={{ height: 800, width: '100%' }}>
              <DataGrid
                rows={allReviews}
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
            <div className='reviewEdit'>
                <div className='reviewEdit__holder'>
                    <div className='reviewEdit__topHolder'>
                        <p>EDIT REVIEW</p>
                        <span className='close-icon' onClick={() => setToggle(false)}><AiOutlineClose /></span>
                    </div>
                    <div className='reviewEdit__starHolder'>
                        <span>{Array(currentReview?.star).fill(<AiFillStar />)}</span>
                    </div>
                    <form>
                        <div className='reviewEdit__textarea'>
                            <textarea name="review"
                            id=""
                            cols="30"
                            rows="10"
                            value={formReview}
                            onChange={(e) => setFormReview(e.target.value)}
                            />
                        </div>
                        <div className="reviewUpdateItem">
                            <label className='radio-label'>isFavorite</label>
                            <div className='radioHolder'>
                                <span>
                                    <label htmlFor='true' className='radio-boolean'>True</label>
                                    <input
                                      type="radio"
                                      value="True"
                                      id='true'
                                      checked={radio === "True"}
                                      onChange={(e) => setRadio(e.target.value)}
                                      className='radioInput'
                                    />
                                </span>
                                <span>
                                    <label htmlFor='false' className='radio-boolean'>False</label>
                                    <input
                                      type="radio"
                                      value="False"
                                      id='false'
                                      checked={radio === "False"}
                                      onChange={(e) => setRadio(e.target.value)}
                                      className='radioInput'
                                    />
                                </span>
                            </div>
                        </div>
                        <button type='submit' className='reviewUpdateButton'>SUBMIT</button>
                    </form>
                </div>
            </div>
        }
        </div>
        :
        <Loader className='loading'/>
     );
}
 
export default ReviewList;