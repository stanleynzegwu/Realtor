import { Routes, Route , Navigate } from 'react-router-dom'
import { Contact, Home , Login, SelectedProperty, SingleAbout,
Signup,UserReview,ViewBlog, ViewProperty, DashboardHome } from "./pages"
import './App.scss'
import { useAuthContext } from './Hooks/useAuthContext'

const App = () => {
    const { user } = useAuthContext()
    return ( 
        <div className='app'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={user ? <Navigate to='/'/> : <Login />} />
                <Route path="/signup" element={user ? <Navigate to='/'/> :<Signup />} />
                <Route path="/adminDashboard/*" element={<DashboardHome />} />
                <Route path="/selectedProperty/*" element={<SelectedProperty />} />
                <Route path="/about/:id" element={<SingleAbout />} />
                <Route path="/userReview" element={!user ? <Navigate to='/login'/> :<UserReview />} />
                <Route path="/viewBlog/:id" element={<ViewBlog />} />
                <Route path="/viewProperty/:id" element={<ViewProperty />} />
            </Routes>
        </div>
     );
}
 
export default App;