// import { useState } from 'react'
// import {Link} from 'react-router-dom'
// import { FaUserAlt , FaLock} from 'react-icons/fa'
// import { MdEmail,MdPublish } from 'react-icons/md'
// import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
// import { SetPasswordVisibility } from '../../Hooks/customHook'
// import { useSignup } from '../../Hooks/useApiRequest'
// import {useAuthContext} from '../../Hooks/useAuthContext'
// import './Signup.scss'

// import {uploadImg} from '../../firebase'

// const Signup = () => {
//   const {isVisible, changeVisibility} = SetPasswordVisibility()
//   const {user,dispatch} = useAuthContext()
//   const {Signup, error, isLoading} = useSignup()
//   console.log(user,error)

//   const [formData,setFormData] = useState({username:"",email: "",password: ""})
  
//     function handleChange(e){
//         let {name,value} = e.target
//         setFormData(data => {
//             return {
//                 ...data,
//                 [name]: value
//             }
//         })
//     }
//     const [filePreview, setFilePreview] = useState()
//     const [file,setFile] = useState()
//     function handleChangee(e) {
//         setFilePreview(URL.createObjectURL(e.target.files[0]));
//         setFile(e.target.files[0])
//     }

//    async function handleSubmit(e) {
//         e.preventDefault()
//         if(file){
//           uploadImg(file,Signup,formData)
//         }else{
//           await Signup(formData)
//         }
//     }

//     return ( 
//       <div className='signup'>
//         <div className="form-container">
//             <p className="form-text form-text--signup">Signup</p>
//             <form className="form form-signup form-holder" onSubmit={handleSubmit}>
//                     <div className="fl-holder">
//                       <div className="label">
//                         <label for="userName" className="form-label">User Name</label>
//                         <div className="signupImageContainer">
//                           <img src={filePreview ? filePreview : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"} alt="avatar" className="userImg" />
//                           <div className='labelHolder'>
//                             <label htmlFor="file"><MdPublish /></label>
//                             <input type="file" id='file' name='img' style={{ display:"none"}} onChange={handleChangee}/>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="input-flex">
//                         <span><FaUserAlt /></span>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="username"
//                           name="username"
//                           placeholder="Type your Username"
//                           onChange={handleChange}
//                           value={formData.username}
//                         />
//                       </div>
//                     </div>

//                     <div className="fl-holder">
//                       <div className="label">
//                         <label for="exampleInputEmail1" className="form-label">Email address</label>
//                       </div>
//                       <div className="input-flex">
//                         <span><MdEmail /></span>
//                         <input
//                           type="email"
//                           className="form-control"
//                           aria-describedby="emailHelp"
//                           id="exampleInputPassword1"
//                           name="email"
//                           placeholder="Enter your Email"
//                           onChange={handleChange}
//                           value={formData.email}
//                         />
//                       </div>
//                     </div>

//                     <div className="fl-holder">
//                         <div className="label">
//                           <label for="password" className="form-label">Password</label>
//                         </div>
//                         <div className="input-flex">
//                             <span><FaLock /></span>
//                             <input
//                               type={isVisible ? "text" : "password"}
//                               className="form-control"
//                               id="password"
//                               name="password"
//                               placeholder="Enter your Password"
//                               onChange={handleChange}
//                               value={formData.password}
//                             />
//                             {
//                               isVisible ? 
//                               <span><AiFillEyeInvisible onClick={changeVisibility}/></span> 
//                               : 
//                               <span><AiFillEye onClick={changeVisibility}/></span>
//                             }
//                         </div>
//                     </div>
                    
//                     <button disabled={isLoading} type="submit" className="btn">Sign up</button>
//                     {error && (<div className='error'>
//                           <p>{error}</p>
//                         </div>)}
//             </form>
//             <p className='account'>Already have an account? <Link to='/login'><span>Login</span></Link></p>
//         </div>
//       </div>
//      );
// }
 
// export default Signup;

import { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaUserAlt , FaLock} from 'react-icons/fa'
import { MdEmail,MdPublish } from 'react-icons/md'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { SetPasswordVisibility } from '../../Hooks/customHook'
import { useSignup } from '../../Hooks/useApiRequest'
import {useAuthContext} from '../../Hooks/useAuthContext'
import loginImg from '../../assets/logos/login.png'
import './Signup.scss'

import {uploadImg} from '../../firebase'

const Signup = () => {
  const {isVisible, changeVisibility} = SetPasswordVisibility()
  const {user,dispatch} = useAuthContext()
  const {Signup, error, isLoading} = useSignup()
  console.log(user,error)

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
          uploadImg(file,Signup,formData)
        }else{
          await Signup(formData)
        }
    }

    return ( 
      <div className='signup'>
        <div className="form-container">
          <div className="signup_illustration">
              <form className="form form-signup form-holder" onSubmit={handleSubmit}>
                    <p className="form-text form-text--signup">Signup Now</p>
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
                    
                    <button disabled={isLoading} type="submit" className="btn">Sign up</button>
                    <p className='account'>Already have an account? <Link to='/login'><span>Login</span></Link></p>
                    {error && (<div className='error'>
                          <p>{error}</p>
                        </div>)}
              </form>

              <div className="illustration">
                <p className='illustration_header'>Making your rental story hassle free.</p>
                <p className="illustration_text">Welcome back estemeed customer,shall we continue from where we stopped ?(making renting fun!)</p>
                <img className="illustration_img" src={loginImg} alt="illustration" />
              </div>
          </div>
        </div>
        <button className='backBtn'>Back</button>
      </div>
     );
}
 
export default Signup;
