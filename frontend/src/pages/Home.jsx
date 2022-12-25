import { About,Blog,Contact,Featured,Header,Latest,Testimonial } from '../Container'
import { Navbar } from '../components';
const Home = () => {
    return ( 
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
     );
}
 
export default Home;