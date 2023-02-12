import React, { useState } from 'react';

import { useHandleGoBack } from '../Hooks/customHook';

const ButtonLarge = ({text,background,color,hoverColor,hoverBackground,width}) => {
    const handleGoBack = useHandleGoBack()
    const [hover, setHover] = useState(false);
    const componentStyles = {
        backgroundColor: hover ? hoverBackground : background,
        color: hover ? hoverColor : color,
        padding: '13px',
        width:width,
        fontWeight: '700',
        border: `1.3px solid ${hoverBackground}`,
        margin: '20px 0'
      };

    return ( 
        <button 
            style={componentStyles}
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
            onClick={handleGoBack}
            >
            {text}
        </button>
     );
}
 
export default ButtonLarge;