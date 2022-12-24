import { Routes, Route } from 'react-router-dom'
import { Topbar, Sidebar } from '../../../components'
import { HomePage, NewUser, Property, User, Users } from '../../Admin'
import './DashboardHome.scss'
//"proxy": "http://localhost:5000",

const DashboardHome = () => {
    return ( 
        <div className='dashboard'>
            <Topbar />
            <div className="containerr">
                <Sidebar />

                <Routes>
                  <Route path='home' element={<HomePage/>}/>
                  <Route path='newUser' element={<NewUser/>}/>
                  <Route path='property' element={<Property/>}/>
                  <Route path='user/:id' element={<User/>}/>
                  <Route path='users' element={<Users/>}/>
                </Routes>
            </div>
            
        </div>
     );
}
 
export default DashboardHome;