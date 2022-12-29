import { Routes, Route } from 'react-router-dom'
import { Home , Login, SingleAbout, Signup, ViewProperty, DashboardHome } from "./pages"
import './App.scss'

const App = () => {

    return ( 
        <div className='app'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/adminDashboard/*" element={<DashboardHome />} />
                <Route path="/about/:id" element={<SingleAbout />} />
                <Route path="/viewProperty/:id" element={<ViewProperty />} />
            </Routes>
        </div>
     );
}
 
export default App;