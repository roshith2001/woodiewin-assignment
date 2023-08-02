import React from 'react';
import colorStyle from '../../styles/styles'


const ProgressBar = ({progress}) => {
    const style1 = {
        width: '100%',
        height: '5px',
        background: colorStyle.colors.infoBannerAlphaGrey,
        borderRadius: '30px',
        marginTop: '5px'
    }
    const style2 = {
        width: `${progress}%`,
        height: '5px',
        background: colorStyle.colors.successGreen,
        borderRadius: '30px'
    }
    return(
        <div style={style1}>
            <div style={style2}>
            </div>
        </div>
    );
}

export default ProgressBar;