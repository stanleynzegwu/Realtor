import { useState,useEffect } from 'react'
import { FeaturedInfo , Chart, WidgetLg,WidgetSm} from '../../../components'
import './HomePage.scss'
import { userRequest } from '../../../RequestMethods';
import { useUserContext } from '../../../Hooks/useUserContext';

const HomePage = () => {
  const [error,setError] = useState(null)
  const { dispatch } = useUserContext()

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

    const data = [
        {
          name: 'Jan',
          "Active User": 5,
        },
        {
          name: 'Feb',
          "Active User": 7,
        },
        {
          name: 'Mar',
          "Active User": 20,
        },
        {
          name: 'April',
          "Active User": 15,
        },
        {
          name: 'May',
          "Active User": 18,
        },
        {
          name: 'Jun',
          "Active User": 5,
        },
        {
          name: 'Jul',
          "Active User": 1,
        },
        {
          name: 'Aug',
          "Active User": 9,
        },
        {
          name: 'Sep',
          "Active User": 12,
        },
        {
          name: 'Oct',
          "Active User": 12,
        },
        {
          name: 'Nov',
          "Active User": 8,
        },
        {
          name: 'Dec',
          "Active User": 11,
        },
      ];

    return ( 
        <div className='home'>
            <FeaturedInfo />
            <Chart title='User Analytics' data={data} grid dataKey='Active User' />
                <div className="homeWidgets">
                    <WidgetSm />
                    <WidgetLg />
                </div>
        </div>
     );
}
 
export default HomePage;