import React from 'react';
import Profile from '../Profile/Profile';


const ProfilesLoader = ({userData}) => {
    return(
        <div className="App bg-white p-2 rounded-[25px] flex flex-col justify-center items-center absolute top-[22%] pb-12">
            {userData.map((item, index) => {
                return <Profile key={index} userData={item}/>
            })}
    </div>
    );
}

export default ProfilesLoader;