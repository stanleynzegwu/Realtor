import { Routes, Route , Navigate } from 'react-router-dom'
import { Home , Login, SelectedProperty, SingleAbout,
Signup,UserReview, ViewProperty, DashboardHome } from "./pages"
import './App.scss'
import { useAuthContext } from './Hooks/useAuthContext'

const App = () => {
    const { user } = useAuthContext()
    return ( 
        <div className='app'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={user ? <Navigate to='/'/> : <Login />} />
                <Route path="/signup" element={user ? <Navigate to='/'/> :<Signup />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/adminDashboard/*" element={<DashboardHome />} />
                <Route path="/selectedProperty/*" element={<SelectedProperty />} />
                <Route path="/about/:id" element={<SingleAbout />} />
                <Route path="/userReview" element={<UserReview />} />
                <Route path="/viewProperty/:id" element={<ViewProperty />} />
            </Routes>
        </div>
     );
}
 
export default App;