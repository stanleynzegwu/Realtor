import { Routes, Route } from 'react-router-dom'
import { Home , SingleAbout } from "./pages"
import './App.scss'

const App = () => {

    return ( 
        <div className='app'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/:id" element={<SingleAbout />} />
            </Routes>
        </div>
     );
}
 
export default App;