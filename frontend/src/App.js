import { Routes, Route , Navigate } from 'react-router-dom'
import { BuyProperty, Contact, HirePaintersForm, Home , Login, SelectedProperty, SingleAbout, SellPropertyForm,
Signup,UserReview,ViewBlog, ViewProperty, DashboardHome } from "./pages"
import './App.scss'
import { useAuthContext } from './Hooks/useAuthContext'

const App = () => {

    const { user } = useAuthContext()
    return ( 
        <div className='app'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/buyProperty/:id" element={<BuyProperty />} />
                <Route path="/hirePaintersForm" element={<HirePaintersForm />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={user ? <Navigate to='/'/> : <Login />} />
                <Route path="/signup" element={user ? <Navigate to='/'/> :<Signup />} />
                <Route path="/adminDashboard/*" element={<DashboardHome />} />
                <Route path="/selectedProperty/*" element={<SelectedProperty />} />
                <Route path="/sellPropertyForm" element={<SellPropertyForm />} />
                <Route path="/about/:id" element={<SingleAbout />} />
                <Route path="/userReview" element={!user ? <Navigate to='/login'/> :<UserReview />} />
                <Route path="/viewBlog/:id" element={<ViewBlog />} />
                <Route path="/viewProperty/:id" element={<ViewProperty />} />
            </Routes>
        </div>
     );
}
 
export default App;