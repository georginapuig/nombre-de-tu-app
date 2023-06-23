import React, { useState } from 'react';
import './App.css';

import play from './slot-machine.png';
import video from './video-chat.png';
import cards from './cards.png';

import Button from './Button';
import Popup from './Popup';

// const VideoPopup = ({ title, subtitle, videoUrl, formFields, showConsent }) => {
//   const [formData, setFormData] = useState({});

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className='popup'>
//       <h2>{title}</h2>
//       <h3>{subtitle}</h3>
//       <video src={videoUrl} controls />

//       <form onSubmit={handleSubmit}>
//         {formFields.map((field, index) => (
//           <input
//             key={index}
//             type={field}
//             name={field}
//             placeholder={field}
//             value={formData[field] || ''}
//             onChange={handleInputChange}
//           />
//         ))}
//         {showConsent && (
//           <label>
//             <input type='checkbox' name='consent' />
//             Consentimiento de recopilación de datos
//           </label>
//         )}
//         <button type='submit'>Enviar</button>
//       </form>
//     </div>
//   );
// };

const App = () => {
  const data = require('./popupConfig.json');
  const [btnState, setBtnState] = useState(false);
  const imgIndex = btnState ? { zIndex: -7 } : null;

  const handleBtnClick = (e) => {
    setBtnState((prev) => !prev);
  };

  return (
    <main className={btnState ? 'main black-bg' : 'main'}>
      <img className='cards' src={cards} alt='cards' style={imgIndex} />
      <div className='container' style={imgIndex}>
        <h1 className='main__title'>BEST ONLINE SLOT MACHINE</h1>

        <div className='btn-container'>
          <Button action={'play'} src={play} handleBtnClick={handleBtnClick} />
          <Button action={'video'} src={video} />
        </div>
      </div>

      {btnState && (
        <Popup {...data.gamePopup} src={play} handleBtnClick={handleBtnClick} />
      )}
      {/*  <VideoPopup {...popupConfig.videoPopup} /> */}
    </main>
  );
};

export default App;
