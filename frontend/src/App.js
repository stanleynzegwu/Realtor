import { Routes, Route , Navigate } from 'react-router-dom'
import { SplashScreen } from './components'
import { BuyProperty, Contact, HirePaintersForm, Home , Login, Offers,SelectedProperty, SingleAbout, SellPropertyForm,
Signup,UserReview,ViewBlog, ViewProperty, DashboardHome } from "./pages"
import './App.scss'
import { useAuthContext } from './Hooks/useAuthContext'
import { usePropertyContext } from "./Hooks/usePropertyContext";
import Error from './pages/Error/Error'
import axios from'axios'

const App = () => {
    axios.defaults.withCredentials = true
    
    const { user } = useAuthContext()
    const { properties } = usePropertyContext();
    return ( 
        <div className='app'>
            {properties && <SplashScreen />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/buyProperty/:id" element={<BuyProperty />} />
                <Route path="/hirePaintersForm" element={<HirePaintersForm />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login /> } />
                <Route path="/signup" element={user ? <Navigate to='/'/> :<Signup />} />
                <Route path="/adminDashboard/*" element={<DashboardHome />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/selectedProperty/*" element={<SelectedProperty />} />
                <Route path="/sellPropertyForm" element={<SellPropertyForm />} />
                <Route path="/about/:id" element={<SingleAbout />} />
                <Route path="/userReview" element={!user ? <Navigate to='/login'/> : <UserReview />} />
                <Route path="/viewBlog/:id" element={<ViewBlog />} />
                <Route path="/viewProperty/:id" element={<ViewProperty />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
     );
}
 
export default App;