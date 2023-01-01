//EXTERNAL IMPORTS
import { useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import { MdPublish } from 'react-icons/md'

//INTERNAL IMPORTS
import './User.scss'
import { useUserContext } from '../../../Hooks/useUserContext'
import { useUpdateUser } from '../../../Hooks/useApiRequest'

const User = () => {
    const { UpdateUser } = useUpdateUser()
    const { id } = useParams()
    const { users } = useUserContext()
    const [ user ] = users.data.filter((user) => user._id === id)

    const [radio,setRadio] = useState(user.isAdmin ? "True" : "False")
    const [formData,setFormData] = useState({
        username:user.username,
        email: user.email,
    })
    function handleChange(e){
        let {name,value} = e.target
        setFormData(data => {
            return {
                ...data,
                [name]: value
            }
        })
    }
    const form = {...formData,isAdmin:radio === 'False' ? false : true}
    console.log(form)
    const [file, setFile] = useState(user.img)
    function handleChangee(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await UpdateUser(id,form)
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
                    <form className="userUpdateForm" onSubmit={handleSubmit}>
                        <div className="userUpdateLeft">

                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" name='username' value={formData.username} onChange={handleChange} placeholder='lionelMessi' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='lionelMessi' className='userUpdateInput'/>
                            </div>
                            <div className="userUpdateItem">
                                <label>isAdmin</label>
                                <div className='radioHolder'>
                                    <span>
                                        <label htmlFor='true'>True</label>
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
                                        <label htmlFor='false'>False</label>
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
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src={file ? file : "https://64.media.tumblr.com/77f2c1189e7630f51f1ad04a93605ddb/tumblr_ocbr10ggWN1sk2y1wo1_640.jpg"} alt="avatar" className="userUpdateImg" />
                                <label htmlFor="file"><MdPublish /></label>
                                <input type="file" id='file' style={{ display:"none"}} onChange={handleChangee}/>
                            </div>
                            <button className="userUpdateButton" type='submit'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default User;