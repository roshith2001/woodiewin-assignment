import React from 'react';


const IconButton = ({buttonName, buttonIcon, textColor, buttonStyle, buttonText}) => {
    
    const styles = {
            display: 'flex',
            font: 'Lato',
            fontSize: '16px',
            lineHeight: '16px',
            fontWeight: '400',
            padding: '10px',
            justifyContent: 'center',
            color: textColor,
            alignItems: 'center',
            borderRadius: '10px',
            background: buttonStyle==='dark' ? 'rgba(0, 0, 0, 0.20)' : 'rgba(255, 237, 247, 0.30)'
    }

    return(
        <>
            <button 
                style={styles} 
                className='gap-2'
            >
                <img src={buttonIcon} alt='Icon' />
                {buttonText}
            </button>
        </>
    );
}

export default IconButton;