import React from 'react';

const PrimaryButton = ({buttonColor, buttonText, textColor, borderColor}) => {
    const styles = {
            display: 'flex',
            font: 'Lato',
            fontSize: '16px',
            lineHeight: '22px',
            fontWeight: '400',
            padding: '10px 15px',
            justifyContent: 'center',
            color: textColor,
            alignItems: 'center',
            border: `1px solid ${borderColor}`,
            borderRadius: '30px',
            background: buttonColor,
            flexGrow: '1',
    }
    return(
        <>
            <button style={styles}>{buttonText}</button>
        </>
    );
}

export default PrimaryButton;