import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Navbar } from "./components"
import { Home , SingleAbout } from "./pages"
import './App.scss'

const App = () => {
    const [id,setId] = useState(0)

    return ( 
        <div className='app'>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home setId={setId} />} />
                <Route path="/about/:id" element={<SingleAbout id={id} />} />
            </Routes>
        </div>
     );
}
 
export default App;