import { FadeUpAnimation } from '../../UI/Animation/Animation'
import './CardHolder.scss'

const CardHolder = ( { children } ) => {
    return ( 
        <FadeUpAnimation className='card-holder'>
            {children}
        </FadeUpAnimation>
     );
}
 
export default CardHolder;