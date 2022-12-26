import { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaUserAlt , FaLock} from 'react-icons/fa'
import { MdEmail,MdPublish } from 'react-icons/md'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { SetPasswordVisibility } from '../../Hooks/customHook'
import { useSignup } from '../../Hooks/useApiRequest'
import {useAuthContext} from '../../Hooks/useAuthContext'
import './Signup.scss'

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase'

const Signup = () => {
  const {isVisible, changeVisibility} = SetPasswordVisibility()
  const {user,dispatch} = useAuthContext()
  const {Signup, error, isLoading} = useSignup()

  const [formData,setFormData] = useState({username:"",email: "",password: ""})
  
    function handleChange(e){
        let {name,value} = e.target
        setFormData(data => {
            return {
                ...data,
                [name]: value
            }
        })
    }
    const [filePreview, setFilePreview] = useState()
    const [file,setFile] = useState()
    function handleChangee(e) {
        setFilePreview(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0])
    }

   async function handleSubmit(e) {
        e.preventDefault()
        if(file){
          const fileName = new Date().getTime() + file.name;
            const storage = getStorage(app)
            const storageRef = ref(storage, fileName)

            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed', 
              (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                  case 'paused':
                    console.log('Upload is paused');
                    break;
                  case 'running':
                    console.log('Upload is running');
                    break;
                }
              }, 
              (error) => {
                // Handle unsuccessful uploads
              }, 
              () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  const allFormData = {...formData, img:downloadURL};
                  Signup(allFormData)
                });
              }
            );
        }else{
          await Signup(formData)
        }
    }

    return ( 
      <div className='signup'>
        <div className="form-container">
            <p className="form-text form-text--signup">Signup</p>
            <form className="form form-signup form-holder" onSubmit={handleSubmit}>
                    <div className="fl-holder">
                      <div className="label">
                        <label for="userName" className="form-label">User Name</label>
                        <div className="signupImageContainer">
                          <img src={filePreview ? filePreview : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"} alt="avatar" className="userImg" />
                          <div className='labelHolder'>
                            <label htmlFor="file"><MdPublish /></label>
                            <input type="file" id='file' name='img' style={{ display:"none"}} onChange={handleChangee}/>
                          </div>
                        </div>
                      </div>
                      <div className="input-flex">
                        <span><FaUserAlt /></span>
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          name="username"
                          placeholder="Type your Username"
                          onChange={handleChange}
                          value={formData.username}
                        />
                      </div>
                    </div>

                    <div className="fl-holder">
                      <div className="label">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                      </div>
                      <div className="input-flex">
                        <span><MdEmail /></span>
                        <input
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                          id="exampleInputPassword1"
                          name="email"
                          placeholder="Enter your Email"
                          onChange={handleChange}
                          value={formData.email}
                        />
                      </div>
                    </div>

                    <div className="fl-holder">
                        <div className="label">
                          <label for="password" className="form-label">Password</label>
                        </div>
                        <div className="input-flex">
                            <span><FaLock /></span>
                            <input
                              type={isVisible ? "text" : "password"}
                              className="form-control"
                              id="password"
                              name="password"
                              placeholder="Enter your Password"
                              onChange={handleChange}
                              value={formData.password}
                            />
                            {
                              isVisible ? 
                              <span><AiFillEyeInvisible onClick={changeVisibility}/></span> 
                              : 
                              <span><AiFillEye onClick={changeVisibility}/></span>
                            }
                        </div>
                    </div>
                    
                    <button type="submit" className="btn">Sign up</button>
            </form>
            <p className='account'>Already have an account? <Link to='/login'><span>Login</span></Link></p>
        </div>
      </div>
     );
}
 
export default Signup;
