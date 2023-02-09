import { Routes, Route } from 'react-router-dom'
import { Topbar, Sidebar , Loader} from '../../../components'
import { token } from '../../../RequestMethods'
import { Blog, HomePage, NewBlog, NewOffer, Messages, NewProperty, NewUser,OfferList, Property,
 PropertyList, ReviewList, User, Users } from '../../Admin'
import './DashboardHome.scss'
import { useReviewContext } from '../../../Hooks/useReviewContext'

const DashboardHome = () => {
    const { reviews } = useReviewContext()
    let getToken = localStorage.getItem("user") && (JSON.parse(localStorage.getItem("user")).data.token)
    if(token !== getToken){
        window.location.reload()
    }

    return (
        reviews 
        ?
        <div className='dashboard'>
            <Topbar />
            <div className="containerr">
                <Sidebar />

                <Routes>
                  <Route path='blog' element={<Blog/>}/>
                  <Route path='home' element={<HomePage/>}/>
                  <Route path='messages' element={<Messages/>}/>
                  <Route path='newBlog' element={<NewBlog/>}/>
                  <Route path='newOffer' element={<NewOffer/>}/>
                  <Route path='newProperty' element={<NewProperty/>}/>
                  <Route path='newUser' element={<NewUser/>}/>
                  <Route path='offerList' element={<OfferList/>}/>
                  <Route path='property/:id' element={<Property/>}/>
                  <Route path='properties' element={<PropertyList/>}/>
                  <Route path='reviewList' element={<ReviewList/>}/>
                  <Route path='user/:id' element={<User/>}/>
                  <Route path='users' element={<Users/>}/>
                </Routes>
            </div>
        </div>
        :
        <Loader />
     );
}
 
export default DashboardHome;