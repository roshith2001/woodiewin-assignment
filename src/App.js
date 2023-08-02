import React from 'react';
import './App.css';
import styles from './styles/styles';
import Profile from './components/Profile/Profile';
import userData from './Chandra Matrimony/Data/UserData';
import ProfilesLoader from './components/Sections/ProfilesLoader';
import HeadSection from './components/Sections/HeadSection';
import FooterMenu from './components/FooterMenu/FooterMenu';

function App() {

  return (
    <div>
      <HeadSection userData={userData}/>
      <ProfilesLoader userData={userData}/>
      <FooterMenu />
    </div>
  );
}

export default App;
