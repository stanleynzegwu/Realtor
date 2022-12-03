import { About,Featured,Header,Latest } from '../Container'

const Home = ({setId}) => {
    return ( 
        <div>
            <Header />
            <About setId={setId}/>
            <Latest />
            <Featured />
            <div>service</div>
            <div>Blog</div>
            <div>contact</div>
        </div>
     );
}
 
export default Home;