import { Routes, Route } from 'react-router-dom'
import { Home , Login, SingleAbout, Signup } from "./pages"
import './App.scss'

const App = () => {

    return ( 
        <div className='app'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about/:id" element={<SingleAbout />} />
            </Routes>
        </div>
     );
}
 
export default App;