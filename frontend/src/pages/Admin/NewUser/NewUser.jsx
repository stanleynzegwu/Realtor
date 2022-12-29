import { MdPublish } from 'react-icons/md'
import { useState } from 'react'
import './NewUser.scss'

import { uploadImg } from '../../../firebase'
import { useCreateUser } from '../../../Hooks/useApiRequest'

const NewUser = () => {
    const { CreateUser, isLoading, error, success , successMessageDisplay } = useCreateUser()
    const [radio,setRadio] = useState('False')
    const [formData,setFormData] = useState({username:"",email: "",})
    const [preview, setPreview] = useState()
    const [file,setFile] = useState()
    const form = {...formData,isAdmin:radio === 'False' ? false : true}

    function handleChange(e){
        let {name,value} = e.target
        setFormData(data => {
            return {
                ...data,
                [name]: value
            }
        })
    }
    
    function handleImageChange(e) {
        setPreview(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0])
    }

    async function handleSubmit(e) {
        e.preventDefault()
        //if there is an img file,call the upload img func to upload to firebase , then the ref stored in db
        if(file){
          uploadImg(file,CreateUser,form)
        //else when there is no image file, create a user, no img to upload to firebase
        }else{
          await CreateUser(form)
        }
    }


    return ( 
        <div className="newUser">
            <h1 className='newUserTitle'>New User</h1>
            <form action="" className='newUserForm' onSubmit={handleSubmit}>
                <div className="newUserLeft">
                    <div className="newUserItem">
                        <label>Username</label>
                        <input type="text" name='username' value={formData.username} onChange={handleChange} placeholder='leo Messi' className='input'/>
                    </div>
                    <div className="newUserItem">
                        <label>Email</label>
                        <input type="email" name='email' value={formData.email} onChange={handleChange} placeholder='leo@gmail.com' className='input'/>
                    </div>
                    <div className="newUserItem">
                        <label>Password</label>
                        <input type="password" name='password' value={formData.password} onChange={handleChange} placeholder='loi**********' className='input'/>
                    </div>
                    <div className="newUserItem">
                        <label>isAdmin</label>
                        <div className='radioHolder'>
                            <span>
                                <label htmlFor='true' className='radioLabel'>True</label>
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
                                <label htmlFor='false' className='radioLabel'>False</label>
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

                <div className="newUserRight">
                    <div className="newUserItem">
                        <img src={preview ? preview : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"} alt="avatar" className="userUpdateImg" />
                        <label htmlFor="file">Upload Image<MdPublish /></label>
                        <input type="file" id='file' name="img" style={{ display:"none"}} onChange={handleImageChange}/>
                    </div>

                    <button disabled={isLoading} className="newUserButton">Create</button>
                    {error && 
                    (<div className='error'>
                        <p>{error}</p>
                    </div>)}
                    {success && 
                    (<div className='success' style={{"display": successMessageDisplay ? "block" : "none"}}>
                        <p>User Created Successfully</p>
                    </div>)}
                </div>
            </form>
        </div>
     );
}
 
export default NewUser;