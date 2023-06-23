import React, { useState } from 'react';
import './Popup.css';

export default function Popup({
  title,
  subtitle,
  src,
  formFields,
  showConsent,
}) {
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
      <h2 className='popup__title'>{title}</h2>
      <h3 className='popup__subtitle'>{subtitle}</h3>
      <img className='popup__img' src={src} alt='Game' />

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
            Data collection consent
          </label>
        )}
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}
