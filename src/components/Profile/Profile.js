import React from 'react';
import Text from '../Text/Text'
import InfoBanner from '../Banner/infoBanner'
import ProgressBar from '../Progress Bar/ProgressBar';
import ProfileBanner from '../Banner/ProfileBanner'
import IconButton from '../Buttons/IconButton';
import placeHolderImage from '../../Chandra Matrimony/Images/placeholderUser.png'
import PrimaryButton from '../Buttons/PrimaryButton';
import styles from '../../styles/styles';
import Heart from '../../Chandra Matrimony/Outline/Like/Heart.svg'
import User from '../../Chandra Matrimony/Outline/Users/User Block.svg'
import Dots from '../../Chandra Matrimony/Outline/Essentional, UI/Menu Dots.svg'
import ImageIcon from '../../Chandra Matrimony/Outline/Video, Audio, Sound/Vector.svg'

const Profile = ({userData}) => {
    return(
        <div className='rounded-[25px] shadow-2xl my-2 w-[97%]'>
            <div className='flex relative'>
                <img className='rounded-t-[25px] object-cover h-96 w-full' src={userData.photos[0].url ? userData.photos[0].url : placeHolderImage} alt='pic'/>
                <div className='w-5/12 absolute top-0 left-0'>
                    {
                        userData.newMember ? 
                        <ProfileBanner 
                            bannerText='New Member'
                            bannerType='headBanner'
                        /> : null
                    }
                </div>
                <div className='w-1/3 absolute top-[80%] right-0'>
                        <ProfileBanner 
                            bannerText='Sent 3 days ago'
                        />
                </div>
                    <div 
                        className='w-1/2 flex-wrap absolute top-0 
                            right-0 flex justify-end gap-2 mt-9 mr-6'
                    >
                    <IconButton 
                        buttonIcon={Heart}
                        buttonName='iconButtonLike'
                        textColor={styles.colors.black}
                    />
                    <IconButton 
                        buttonIcon={User}
                        buttonName='iconButtonLike'
                        textColor={styles.colors.black}
                    />
                    <IconButton 
                        buttonIcon={Dots}
                        buttonName='iconButtonLike'
                        textColor={styles.colors.black}
                        buttonStyle='dark'
                    />
                    <IconButton 
                        buttonIcon={ImageIcon}
                        buttonName='iconButtonLike'
                        textColor={styles.colors.white}
                        buttonStyle='dark'
                        buttonText={userData.photos.length}
                    />
                    </div>
            </div>
            <div className='p-4'>
                <div className='flex justify-between items-center my-1'>
                    <Text 
                        text={userData.name}
                        textSize='20px'
                        textWeight='600'
                    />
                    <InfoBanner 
                        bannerText={userData.lastSeen}
                        bannerType='timeBanner'
                    />
                </div>
                <div className='flex flex-wrap my-1'>
                    <Text 
                       text={userData.basicDetails.age} 
                    />
                    &nbsp;|&nbsp;
                    <Text 
                       text={userData.basicDetails.height} 
                    />
                    &nbsp;|&nbsp;
                    <Text 
                       text={userData.basicDetails.profession} 
                    />
                    &nbsp;|&nbsp;
                    <Text 
                       text={userData.basicDetails.language} 
                    />
                    &nbsp;|&nbsp;
                    <Text 
                       text={userData.basicDetails.caste} 
                    />
                    &nbsp;|&nbsp;
                    <Text 
                       text={userData.basicDetails.place} 
                    />
                    &nbsp;|&nbsp;
                    <Text 
                       text={userData.basicDetails.state} 
                    />
                </div>
                <div className='flex justify-between items-center my-2'>
                    <InfoBanner 
                        bannerText={userData.married ? 'Married' : 'Never Married'}
                    />
                    <div className='g'>
                        <Text 
                            text={`Match Score: ${userData.matchScore}%`}
                        />
                        <ProgressBar progress={userData.matchScore}/>
                    </div>
                </div>
                <div className='flex gap-2 justify-between items-center mt-5'>
                    <PrimaryButton 
                        buttonText='Reject'
                        borderColor={styles.colors.failureRed}
                        textColor={styles.colors.failureRed}
                    /> 
                    <PrimaryButton 
                        buttonText='Accept'
                        buttonColor={styles.colors.successGreen}
                        textColor={styles.colors.white}
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;