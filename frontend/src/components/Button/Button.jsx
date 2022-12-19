import './Button.scss'

const Button = ({val}) => {
    return ( 
        <div className='button'>
            <button>{val}</button>
        </div>
     );
}
 
export default Button;