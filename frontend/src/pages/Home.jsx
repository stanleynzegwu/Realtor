import { About,Blog,Footer,Featured,Header,Latest,Painting,Testimonial } from '../Container'
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
            <Painting />
            <Blog />
            <Testimonial />
            <Footer />
        </div>
        :
        <Loader className='loader'/>
     );
}
 
export default Home;