// components/sections/Contact.tsx
import emailjs from '@emailjs/browser';
import React from 'react';

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_id', 
      'template_id', 
      e.target, 
      'public_key'
    ).then(() => {
      alert('Message envoyé !');
    });
  };

  return (
    <form onSubmit={sendEmail}>
      <input 
        type="text" 
        name="user_name" 
        required 
        placeholder="Votre nom"
      />
      <textarea name="message" required rows={5} />
      <button type="submit">Envoyer</button>
    </form>
  );
}