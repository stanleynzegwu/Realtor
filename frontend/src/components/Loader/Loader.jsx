import { Grid } from 'react-loader-spinner'
import './Loader.scss'
 
const Loader = ({className}) => {

    const {innerWidth} = window
    let style = innerWidth >= 1000 ? 300 : 200

    return ( 
        <div className={`loader ${className}`}>
              <Grid
                height={style}
                width={style}
                color="#829FCE"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
        </div>
     );
}
 
export default Loader;
