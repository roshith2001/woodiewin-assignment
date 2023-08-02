import React from 'react';
import FooterIconButton from '../Buttons/FooterIconButtons'
import styles from '../../styles/styles';
import Home from '../../Chandra Matrimony/Outline/Home/Home.svg'
import Matches from '../../Chandra Matrimony/Outline/Matches/Matches.svg'
import Inbox from '../../Chandra Matrimony/Outline/Inbox/Email-2.svg'
import Search from '../../Chandra Matrimony/Outline/Search/Outline/Search/Magnifer.svg'

const FooterMenu = (props) => {
return(
    <div className='fixed bottom-0 w-screen bg-white z-50 flex items-center justify-around'>
        <FooterIconButton textColor={styles.colors.violet} buttonText='Home' buttonIcon={Home}/>
        <FooterIconButton textColor={styles.colors.violet} buttonText='Matches' buttonIcon={Matches}/>
        <FooterIconButton textColor={styles.colors.violet} buttonText='Inbox' buttonIcon={Inbox}/>
        <FooterIconButton textColor={styles.colors.violet} buttonText='Search' buttonIcon={Search}/>
    </div>
);
}
export default FooterMenu;