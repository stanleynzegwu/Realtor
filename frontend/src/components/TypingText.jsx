import { useState, useEffect } from 'react';

const TypingText = ({text,intervalDuration,className}) => {
    const [typedText, setTypedText] = useState('');
    let i = 0;

    useEffect(() => {
        const interval = setInterval(() => {
          setTypedText(text.substring(0, i));
          i++;
    
          if (i > text.length) {
            clearInterval(interval);
          }
        }, intervalDuration);
    
        return () => clearInterval(interval);
      }, []);
    return ( 
        <div className={className}>
            <p>{ typedText }</p>
        </div>
     );
}
 
export default TypingText;