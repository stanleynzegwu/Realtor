import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdPublish } from 'react-icons/md'
import './User.scss'

const User = () => {
    const [state,setState] = useState('False')
    const [file, setFile] = useState()
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return ( 
        <div className="user">
            <div className="userTitleContainer">
                <h1 className='userTitle'>Edit User</h1>
                <Link to='/adminDashboard/newUser'><button className="userAddButton">Create</button></Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg" alt="avatar" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Lionel Messi</span>
                            <span className="userShowEmail">lionelmessi@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">

                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder='lionelMessi' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="email" placeholder='lionelMessi' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>isAdmin</label>
                                <div className='radioHolder'>
                                    <span>
                                        <label for='true'>True</label>
                                        <input
                                          type="radio"
                                          value="True"
                                          id='true'
                                          checked={state === "True"}
                                          onChange={(e) => setState(e.target.value)}
                                          className='radioInput'
                                        />
                                    </span>
                                    <span>
                                        <label for='false'>False</label>
                                        <input
                                          type="radio"
                                          value="False"
                                          id='false'
                                          checked={state === "False"}
                                          onChange={(e) => setState(e.target.value)}
                                          className='radioInput'
                                        />
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src={file ? file : "https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg"} alt="avatar" className="userUpdateImg" />
                                <label htmlFor="file"><MdPublish /></label>
                                <input type="file" id='file' style={{ display:"none"}} onChange={handleChange}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default User;