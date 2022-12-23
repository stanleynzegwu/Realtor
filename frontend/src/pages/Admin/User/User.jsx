import { useState } from 'react'
import { MdPublish } from 'react-icons/md'
import './User.scss'

const User = () => {
    const [state,setState] = useState('False')
    return ( 
        <div className="user">
            <div className="userTitleContainer">
                <h1 className='userTitle'>Edit User</h1>
                <button className="userAddButton">Create</button>
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
                                <input type="text" placeholder='lionelMessi' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>isAdmin</label>
                                <span>
                                    <span>True</span>
                                    <input
                                      type="radio"
                                      value="True"
                                      checked={state === "True"}
                                      onChange={(e) => setState(e.target.value)}
                                    />
                                </span>
                                <span>
                                    <span>False</span>
                                    <input
                                      type="radio"
                                      value="False"
                                      checked={state === "False"}
                                      onChange={(e) => setState(e.target.value)}
                                    />
                                </span>
                                
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg" alt="avatar" className="userUpdateImg" />
                                <label htmlFor="file"><MdPublish /></label>
                                <input type="file" id='file' style={{ display:"none"}}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default User;