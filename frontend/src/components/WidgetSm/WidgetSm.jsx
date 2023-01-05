import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { MdVisibility } from 'react-icons/md'

import './WidgetSm.scss'
import { useUserContext } from '../../Hooks/useUserContext';
import { userRequest } from '../../RequestMethods';
import Loader from '../Loader/Loader';

const WidgetSm = () => {
    const [error,setError] = useState(null)
    const { users,dispatch } = useUserContext()
    const latestUsers = users?.data.slice(0,5)
    console.log(latestUsers)

    //FETCH ALL USERS
    useEffect(() => {
        const GetAllUsers = async () => {
            try{
                const users = await userRequest.get("/users")
                console.log(users)
                dispatch({type:'SET_USERS', payload: users})
            }catch(err){
                setError(err.response.data)
            }

        }
        GetAllUsers()
    },[dispatch])

    return ( 
        latestUsers
        ?
        <div className='widgetSm'>
            <span className="widgetSmTitle">Newly Joined Members</span>
            <ul className="widgetSmList">
                {latestUsers.map(({username,email,img,_id},index) => (
                    <li className="widgetSmListItem" key={index}>
                        <img src={img ? img : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"} alt="avatar" className='widgetSmImg'/>
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{username}</span>
                            <span className="widgetSmUseremail">{email}</span>
                        </div>
                        <Link to={`/adminDashboard/user/${_id}`}>
                            <button className='widgetSmButton'>
                                <MdVisibility />Display
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        :
        <Loader className='loading'/> 
     );
}
 
export default WidgetSm;