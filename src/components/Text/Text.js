import React from 'react';

const Text = ({text, textSize, textWeight, textColor}) => {
    const styles = {
        color: textColor || 'black',
        fontSize: textSize || '16px',
        fontWeight: textWeight || 400,
        font: 'Lato'
    }
    return(
        <>
            <p style={styles}>{text}</p>
        </>
    );
}
export default Text;