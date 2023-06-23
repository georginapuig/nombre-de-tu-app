import React from 'react';
import './Button.css';

export default function Button({ action, src, handleBtnClick }) {
  return (
    <button className={`btn--${action}`} onClick={handleBtnClick}>
      <img className={`btn__img--${action}`} src={src} alt='' />
      <span className='btn__title'>{action}</span>
    </button>
  );
}
