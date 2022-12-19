import { useState } from 'react'
import { FaUserAlt , FaLock} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import './Signup.scss'

const Signup = () => {
    const [visible, setVisible] = useState(false)

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
                    <button type="submit" className="btn">Sign up</button>
            </form>
        </div>
      </div>
     );
}
 
export default Signup;
