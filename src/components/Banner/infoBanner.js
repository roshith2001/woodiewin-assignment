import React from 'react';
import colorStyle from '../../styles/styles'

const InfoBanner = ({bannerText, bannerType}) => {

    const styles = {
        display: 'flex',
        font: 'Lato',
        fontSize: bannerType === 'timeBanner' ? '14px' : '12px',
        lineHeight: 'normal',
        fontWeight: '400',
        padding: '10px 15px',
        justifyContent: 'center',
        color: colorStyle.colors.iconGrey,
        border: bannerType === 'timeBanner' ? `0.5px solid ${colorStyle.colors.infoBannerBorderGrey}` : null,
        alignItems: 'center',
        borderRadius: '30px',
        background: bannerType === 'timeBanner' ? colorStyle.colors.infoBannerAlphaGrey : colorStyle.colors.infoBannerGrey
}

    return(
        <div style={styles}>
            {bannerText}
        </div>
    );
}

export default InfoBanner;