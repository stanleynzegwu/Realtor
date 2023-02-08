//EXTERNAL IMPORTS
import { useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import { MdPublish } from 'react-icons/md'

//INTERNAL IMPORTS
import './User.scss'
import { useUserContext } from '../../../Hooks/useUserContext'
import { uploadImgAndUpdate } from '../../../firebase'
import { useUpdateUser } from '../../../Hooks/useApiRequest'
import { TypingText } from '../../../components'
import { ScrollToTop } from '../../../Hooks/customHook';

const User = () => {
    ScrollToTop()
    const { UpdateUser,isLoading,successMessageDisplay,error } = useUpdateUser()
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
    const [preview,setPreview] = useState(user.img)
    const [file, setFile] = useState('')
    function handleImageChange(e) {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0])
    }

    async function handleSubmit(e) {
        e.preventDefault()

        if(file){
            uploadImgAndUpdate(file,UpdateUser,id,form)
        //else when there is no image file, just do other updates, no img to upload to firebase
        }else{
          await UpdateUser(id,form)
        }
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
                        <img src={user.img ? user.img : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"} alt="avatar" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{user.username}</span>
                            <span className="userShowEmail">{user.email}</span>
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
                                <img src={preview ? preview : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"} alt="avatar" className="userUpdateImg" />
                                <label htmlFor="file"><MdPublish /></label>
                                <input type="file" id='file' style={{ display:"none"}} onChange={handleImageChange}/>
                            </div>
                            <button disabled={isLoading} className="userUpdateButton" type='submit'>Update</button>
                            {error && <TypingText text={error} intervalDuration={50} className='error'/>}
                            {successMessageDisplay && <TypingText text='User Updated Successfully' intervalDuration={50} className='success'/>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default User;