import React from 'react';
import './App.css';

import slot from './slot-machine.jpg';
import play from './slot-machine.png';
import video from './video-chat.png';
import cards from './cards.png';

import Button from './Button';
import Popup from './Popup';
import usePopup from './hooks/usePopup';

const App = () => {
  const [btnPlay, handlePlayClick] = usePopup(false);
  const [btnVideo, handleVideoClick] = usePopup(false);

  const data = require('./popupConfig.json');
  const imgIndex = btnPlay || btnVideo ? { zIndex: -7 } : null;

  return (
    <main className={btnPlay || btnVideo ? 'main black-bg' : 'main'}>
      <img className='cards' src={cards} alt='cards' style={imgIndex} />
      <div className='container' style={imgIndex}>
        <h1 className='main__title'>
          <span className='main__title--gold'>BEST </span> ONLINE SLOT MACHINE
        </h1>

        <div className='btn-container'>
          <Button action={'play'} src={play} handleBtnClick={handlePlayClick} />
          <Button
            action={'video'}
            src={video}
            handleBtnClick={handleVideoClick}
          />
        </div>
      </div>

      {btnPlay && (
        <Popup
          {...data.gamePopup}
          src={play}
          handleBtnClick={handlePlayClick}
          popupClass={'play'}>
          <div className='popup__img-container'>
            <img className='popup__img' src={slot} alt='Game' />
          </div>
        </Popup>
      )}
      {btnVideo && (
        <Popup
          {...data.videoPopup}
          src={video}
          handleBtnClick={handleVideoClick}
          popupClass={'video'}>
          <iframe
            title={data.videoPopup.subtitle}
            width='auto'
            frameborder='0'
            src={data.videoPopup.videoUrl}></iframe>
        </Popup>
      )}
    </main>
  );
};

export default App;
