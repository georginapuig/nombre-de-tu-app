import React, { useState } from 'react';
import './App.css';
import play from './slot-machine.png';
import video from './video-chat.png';

const GamePopup = ({ title, subtitle, game, formFields, showConsent }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='popup'>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <img src={game} alt='Game' />

      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <input
            key={index}
            type={field}
            name={field}
            placeholder={field}
            value={formData[field] || ''}
            onChange={handleInputChange}
          />
        ))}
        {showConsent && (
          <label>
            <input type='checkbox' name='consent' />
            Consentimiento de recopilación de datos
          </label>
        )}
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

const VideoPopup = ({ title, subtitle, videoUrl, formFields, showConsent }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className='popup'>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <video src={videoUrl} controls />

      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <input
            key={index}
            type={field}
            name={field}
            placeholder={field}
            value={formData[field] || ''}
            onChange={handleInputChange}
          />
        ))}
        {showConsent && (
          <label>
            <input type='checkbox' name='consent' />
            Consentimiento de recopilación de datos
          </label>
        )}
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

const App = () => {
  const popupConfig = {
    gamePopup: {
      title: 'Pop-up de juego',
      subtitle: '¡Juega a la tragamonedas!',
      game: 'ruta/a/la/imagen-del-juego.jpg',
      formFields: ['email', 'name', 'phone', 'gender'],
      showConsent: true,
    },
    videoPopup: {
      title: 'Pop-up de video',
      subtitle: 'Mira este video interesante',
      videoUrl: 'ruta/al/video.mp4',
      formFields: ['email', 'name'],
      showConsent: false,
    },
  };

  const [btnState, setBtnState] = useState(false);

  const handleBtnClick = (e) => {
    setBtnState((prev) => !prev);
  };

  return (
    <main className='main'>
      <h1 className='main__title'>BEST ONLINE SLOT MACHINE</h1>
      <button className='btn--play' onClick={handleBtnClick}>
        <img className='btn__img--play' src={play} alt='' />
        <span className='btn__title'>play</span>
      </button>
      <button className='btn--video'>
        <img className='btn__img--video' src={video} alt='' />
        <span className='btn__title'>video</span>
      </button>
      {btnState && <GamePopup {...popupConfig.gamePopup} />}
      {/*  <VideoPopup {...popupConfig.videoPopup} /> */}
    </main>
  );
};

export default App;
