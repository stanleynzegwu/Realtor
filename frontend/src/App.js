import { Routes, Route } from 'react-router-dom'
import { Navbar } from "./components"
import { Home , SingleAbout } from "./pages"
import './App.scss'

const App = () => {

    return ( 
        <div className='app'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/:id" element={<SingleAbout />} />
            </Routes>
        </div>
     );
}
 
export default App;