import { About,Blog,Featured,Header,Latest } from '../Container'

const Home = () => {
    return ( 
        <div>
            <Header />
            <About />
            <Latest />
            <Featured />
            <Blog />
            <div>service</div>
            <div>contact</div>
        </div>
     );
}
 
export default Home;