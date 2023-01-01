import { About,Blog,Contact,Featured,Header,Latest,Testimonial } from '../Container'
import { Navbar,Loader } from '../components';
import { usePropertyContext } from '../Hooks/usePropertyContext';
const Home = () => {
    const { properties } = usePropertyContext()
    
    return (
        properties
        ?
        <div>
            <Navbar />
            <Header />
            <About />
            <Latest />
            <Featured />
            <Blog />
            <Testimonial />
            <Contact />
        </div>
        :
        <Loader className='loader'/>
     );
}
 
export default Home;