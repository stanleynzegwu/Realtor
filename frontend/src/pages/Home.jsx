import { About, Header } from '../components'

const Home = ({setId}) => {
    return ( 
        <div>
            <Header />
            <About setId={setId}/>
            <div>service</div>
            <div>Blog</div>
            <div>contact</div>
        </div>
     );
}
 
export default Home;