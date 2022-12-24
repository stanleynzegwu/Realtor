import { useState } from 'react'
import {Link} from 'react-router-dom'
import { FaUserAlt , FaLock} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { SetPasswordVisibility } from '../../Hooks/customHook'
import './Signup.scss'

const Signup = () => {
  const {isVisible, changeVisibility} = SetPasswordVisibility()

    const [formData,setFormData] = useState({
        username:"",
        email: "",
        password: ""
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

    function handleSubmit(e) {
        e.preventDefault()
        let {username,email,password,} = formData
    }

    return ( 
      <div className='signup'>
        <div className="form-container">
            <p className="form-text form-text--signup">Signup</p>
            <form className="form form-signup form-holder" onSubmit={handleSubmit}>
                    <div className="fl-holder">
                      <div className="label">
                        <label for="userName" className="form-label">User Name</label>
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
