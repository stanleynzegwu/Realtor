import { Topbar, Sidebar, FeaturedInfo } from '../../../components'
import './DashboardHome.scss'
//"proxy": "http://localhost:5000",

const DashboardHome = () => {
    return ( 
        <>
            <Topbar />
            <div className="containerr">
                <Sidebar />
                <div className='home'>
                    <FeaturedInfo />
                </div>
            </div>
            
        </>
     );
}
 
export default DashboardHome;