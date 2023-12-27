import React from 'react';
import './Contact.css';
import Typography from '@mui/joy/Typography';
import { useState } from 'react';

const ContactWindow = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log('Correo electrónico:', email);
    console.log('Número de teléfono:', phoneNumber);
    // Puedes enviar estos datos a tu backend o realizar alguna acción con ellos
  };

  return (
    <div className="contact-window">
      <h2>¡Contáctanos!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Número de Contacto:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactWindow;