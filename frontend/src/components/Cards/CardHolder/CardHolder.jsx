import './CardHolder.scss'

const CardHolder = ( { children } ) => {
    return ( 
        <div className='card-holder'>
            {children}
        </div>
     );
}
 
export default CardHolder;