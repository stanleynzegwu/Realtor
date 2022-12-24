import { MdPublish } from 'react-icons/md'
import { useState } from 'react'
import './NewUser.scss'

const NewUser = () => {
    const [radio,setRadio] = useState('False')
    const [formData,setFormData] = useState({
        username:"",
        email: "",
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

    const [file, setFile] = useState()
    function handleChangee(e) {
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
                                <label for='true' className='radioLabel'>True</label>
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
                                <label for='false' className='radioLabel'>False</label>
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
                        <img src={file ? file : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"} alt="avatar" className="userUpdateImg" />
                        <label htmlFor="file">Upload Image<MdPublish /></label>
                        <input type="file" id='file' style={{ display:"none"}} onChange={handleChangee}/>
                    </div>

                    <button className="newUserButton">Create</button>
                </div>
            </form>
        </div>
     );
}
 
export default NewUser;