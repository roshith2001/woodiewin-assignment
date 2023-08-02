import React from 'react';
import colorStyle from '../../styles/styles'

const ProfileBanner = ({bannerText, bannerType}) => {

    const styles = {
        display: 'flex',
        font: 'Lato',
        fontSize: bannerType === 'headBanner' ? '13px' : '12px',
        lineHeight: bannerType === 'headBanner' ? '12px' : '22px',
        fontWeight: '400',
        padding: '10px 15px',
        justifyContent: 'center',
        color: colorStyle.colors.iconGrey,
        alignItems: 'center',
        borderRadius: bannerType === 'headBanner' ? '25px 0 25px 0' : '10px 0 0 10px',
        background: colorStyle.colors.bannerWhite
}

    return(
        <div style={styles}>
            {bannerText}
        </div>
    );
}

export default ProfileBanner;