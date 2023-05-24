import React, { useState } from "react";
import './ContactForm.css';

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Submitting ${name}, ${email}, ${message}`);
    // Здесь можно добавить логику отправки формы на сервер или внешний сервис
  }

  return (
    <div className="contact-form" id={'contact-form'}>
      <div className="contact-form__info">
        <h2 className="contact-form__title">Свяжитесь с нами</h2>
        <p className="contact-form__description">Если у вас остались какие-либо вопросы или предложения, пожалуйста, заполните форму ниже:</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="contact-form__label">Имя</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="contact-form__input" />

        <label htmlFor="email" className="contact-form__label">Email</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="contact-form__input" />

        <label htmlFor="message" className="contact-form__label">Сообщение</label>
        <textarea id="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} className="contact-form__textarea" />

        <button type="submit" className="contact-form__button">Отправить</button>
      </form>
    </div>
  );
}

export default ContactForm;