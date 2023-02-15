import { useState, useEffect,useMemo } from 'react';
import { FeaturedInfo , Chart, WidgetLg,WidgetSm} from '../../../components'
import { ScrollToTop } from '../../../Hooks/customHook';
import { FadeUpAnimation } from '../../../components/UI/Animation/Animation';
import './HomePage.scss'
import { userRequest } from '../../../RequestMethods';

const HomePage = () => {
    ScrollToTop()
    const [userStats, setUserStats] = useState([])

    const MONTHS = useMemo(
      () => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        'Nov',
        "Dec"
      ],
      []
      )
      useEffect(() => {
        const getStats = async () => {
          try{
            const res = await userRequest.get("/users/stats")
            res.data.map(item => setUserStats(prev => [
              ...prev,
              {name:MONTHS[item._id-1], "Active User": item.total}
            ]))
          }catch{

          }
        }
        getStats()
      },[MONTHS])

    return ( 
        <div className='home'>
            <FeaturedInfo />
            <Chart title='User Analytics' data={userStats} grid dataKey='Active User' />
                <FadeUpAnimation className="homeWidgets">
                    <WidgetSm />
                    <WidgetLg />
                </FadeUpAnimation>
        </div>
     );
}
 
export default HomePage;