import { useState } from 'react'
import { FaLock} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './Login.scss'

const Login = () => {
    const [visible, setVisible] = useState(false)

    const [formData,setFormData] = useState({
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
        let {email,password} = formData
    }

    return (
        <div className='login'>
            <div className="form-container">
                <p className="form-text form-text--login">Login</p>
                <form className="form form-login form-holder" onSubmit={handleSubmit}>
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
                                  type={visible ? "text" : "password"}
                                  className="form-control"
                                  id="password"
                                  name="password"
                                  placeholder="Enter your Password"
                                  onChange={handleChange}
                                  value={formData.password}
                                />
                                {
                                  visible ? 
                                  <span><AiFillEyeInvisible onClick={() => setVisible(prev => !prev)}/></span> 
                                  : 
                                  <span><AiFillEye onClick={() => setVisible(prev => !prev)}/></span>
                                }
                            </div>
                        </div>
                        <button type="submit" className="btn">Login</button>
                </form>
                <p className='noAccount'>Don't have an account? <Link to='/signup'><span>Signup</span></Link></p>
            </div>
        </div>
    );
}
 
export default Login;