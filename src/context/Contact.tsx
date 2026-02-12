import React from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    emailjs.sendForm(
      'VOTRE_SERVICE_ID',  // Replace with your actual service ID
      'VOTRE_TEMPLATE_ID',
      e.target as HTMLFormElement, // Cast e.target to HTMLFormElement
      'VOTRE_PUBLIC_KEY'
    ).then(
      (result) => {
        console.log('Email sent successfully:', result.text);
      },
      (error) => {
        console.error('Error sending email:', error.text);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add your form fields here */}
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;