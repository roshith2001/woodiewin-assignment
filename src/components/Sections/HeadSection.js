import React, {useState} from 'react';
import MenuButton from '../Buttons/MenuButton'
import Text from '../Text/Text';
import styles from '../../styles/styles';

const HeadSection = ({userData}) => {

    const[menuButtonActive, setMenuButtonActive] = useState('menuButton1')

    const style1 = {
        background: styles.gradient.backgroundViolet,
        display: 'flex',
        height: '25vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'start',
    }
    const handleMenuButtonClick = (name) => {
        setMenuButtonActive(name)
    }
    return(
        <div style={style1} className='absolute top-0 px-2 flex-col pt-4'>
            <div className='flex  gap-2 mb-4'>
                <MenuButton 
                    buttonColor='transparent'
                    buttonText='Interests'
                    borderColor={styles.colors.offGrey}
                    textColor={styles.colors.offGrey}
                    activeColor={styles.gradient.violet}
                    handleClick={handleMenuButtonClick}
                    buttonActive = {menuButtonActive}
                    buttonName='menuButton1'
                />
                <MenuButton 
                    buttonColor='transparent'
                    buttonText='Requests'
                    borderColor={styles.colors.offGrey}
                    textColor={styles.colors.offGrey}
                    activeColor={styles.gradient.violet}
                    handleClick={handleMenuButtonClick}
                    buttonActive = {menuButtonActive}
                    buttonName='menuButton2'
                />
                <MenuButton 
                    buttonColor='transparent'
                    buttonText='Messages'
                    borderColor={styles.colors.offGrey}
                    textColor={styles.colors.offGrey}
                    activeColor={styles.gradient.violet}
                    handleClick={handleMenuButtonClick}
                    buttonActive = {menuButtonActive}
                    buttonName='menuButton3'
                />
            </div>
             <Text 
                text={`${userData.length} Matches based on your preferences`}
                textColor={styles.colors.white}
             />
        </div>
    );
}

export default HeadSection;