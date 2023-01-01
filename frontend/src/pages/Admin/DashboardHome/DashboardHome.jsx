import { Routes, Route } from 'react-router-dom'
import { Topbar, Sidebar, Loader } from '../../../components'
import { HomePage, NewProperty, NewUser, Property, PropertyList, User, Users } from '../../Admin'
import './DashboardHome.scss'

const DashboardHome = () => {
    return ( 
        <div className='dashboard'>
            <Topbar />
            <div className="containerr">
                <Sidebar />

                <Routes>
                  <Route path='home' element={<HomePage/>}/>
                  <Route path='newProperty' element={<NewProperty/>}/>
                  <Route path='newUser' element={<NewUser/>}/>
                  <Route path='property/:id' element={<Property/>}/>
                  <Route path='properties' element={<PropertyList/>}/>
                  <Route path='user/:id' element={<User/>}/>
                  <Route path='users' element={<Users/>}/>
                </Routes>
            </div>
            
        </div>
     );
}
 
export default DashboardHome;