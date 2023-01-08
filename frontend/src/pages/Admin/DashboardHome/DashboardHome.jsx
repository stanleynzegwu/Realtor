import { Routes, Route } from 'react-router-dom'
import { Topbar, Sidebar, Loader } from '../../../components'
import { Blog, HomePage, NewBlog, NewProperty, NewUser, Property, PropertyList, ReviewList, User, Users } from '../../Admin'
import './DashboardHome.scss'

const DashboardHome = () => {
    return ( 
        <div className='dashboard'>
            <Topbar />
            <div className="containerr">
                <Sidebar />

                <Routes>
                  <Route path='blog' element={<Blog/>}/>
                  <Route path='home' element={<HomePage/>}/>
                  <Route path='newBlog' element={<NewBlog/>}/>
                  <Route path='newProperty' element={<NewProperty/>}/>
                  <Route path='newUser' element={<NewUser/>}/>
                  <Route path='property/:id' element={<Property/>}/>
                  <Route path='properties' element={<PropertyList/>}/>
                  <Route path='reviewList' element={<ReviewList/>}/>
                  <Route path='user/:id' element={<User/>}/>
                  <Route path='users' element={<Users/>}/>
                </Routes>
            </div>
            
        </div>
     );
}
 
export default DashboardHome;