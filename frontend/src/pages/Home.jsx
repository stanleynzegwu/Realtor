import { About,Blog,Featured,Header,Latest } from '../Container'

const Home = ({setId}) => {
    return ( 
        <div>
            <Header />
            <About setId={setId}/>
            <Latest />
            <Featured />
            <Blog />
            <div>service</div>
            <div>contact</div>
        </div>
     );
}
 
export default Home;