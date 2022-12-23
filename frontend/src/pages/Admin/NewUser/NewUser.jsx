import { MdPublish } from 'react-icons/md'
import { useState } from 'react'
import './NewUser.scss'

const NewUser = () => {
    const [file, setFile] = useState()
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return ( 
        <div className="newUser">
            <h1 className='newUserTitle'>New User</h1>
            <form action="" className='newUserForm'>
                <div className="newUserLeft">
                    <div className="newUserItem">
                        <label>Username</label>
                        <input type="text" placeholder='leo Messi' className='input'/>
                    </div>
                    <div className="newUserItem">
                        <label>Email</label>
                        <input type="email" placeholder='leo@gmail.com' className='input'/>
                    </div>
                    <div className="newUserItem">
                        <label>Password</label>
                        <input type="password" placeholder='loi**********' className='input'/>
                    </div>
                    <div className="newUserItem">
                        <label>isAdmin</label>
                        <div className='radioHolder'>
                            <span>
                                <label for='true' className='radioLabel'>True</label>
                                <input
                                  type="radio"
                                  value="True"
                                  id='true'
                                  //checked={state === "True"}
                                  //onChange={(e) => setState(e.target.value)}
                                  className='radioInput'
                                />
                            </span>
                            <span>
                                <label for='false' className='radioLabel'>False</label>
                                <input
                                  type="radio"
                                  value="False"
                                  id='false'
                                  //checked={state === "False"}
                                  //onChange={(e) => setState(e.target.value)}
                                  className='radioInput'
                                />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="newUserRight">
                    <div className="newUserItem">
                        <img src={file ? file : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"} alt="avatar" className="userUpdateImg" />
                        <label htmlFor="file">Upload Image<MdPublish /></label>
                        <input type="file" id='file' style={{ display:"none"}} onChange={handleChange}/>
                    </div>

                    <button className="newUserButton">Create</button>
                </div>
            </form>
        </div>
     );
}
 
export default NewUser;