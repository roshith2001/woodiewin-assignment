import React from 'react';


const MenuButton = ({buttonName, buttonActive, buttonColor, buttonText, textColor, borderColor, activeColor, handleClick}) => {
    
    const styles = {
            display: 'flex',
            height: '52px',
            font: 'Lato',
            fontSize: '16px',
            lineHeight: '16px',
            fontWeight: '400',
            padding: '10px',
            justifyContent: 'center',
            color: textColor,
            alignItems: 'center',
            border: `1px solid ${borderColor}`,
            borderRadius: '10px',
            background: buttonActive===buttonName ? activeColor : buttonColor
    }

    return(
        <>
            <button 
                style={styles} 
                onClick={() => handleClick(buttonName)}
            >
                {buttonText}
            </button>
        </>
    );
}

export default MenuButton;