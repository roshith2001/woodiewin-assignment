import React from 'react';


const IconButton = ({buttonIcon, textColor, buttonText}) => {
    
    const styles = {
            font: 'Lato',
            fontSize: '16px',
            lineHeight: '16px',
            fontWeight: '400',
            padding: '10px',
            justifyContent: 'center',
            color: textColor,
            alignItems: 'center',
            background: 'transparent'
    }

    return(
        <>
            <button 
                style={styles} 
                className='flex flex-col gap-2'
            >
                <img src={buttonIcon} alt='Icon' />
                <p>{buttonText}</p>
            </button>
        </>
    );
}

export default IconButton;