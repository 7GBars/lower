import React, { useState } from 'react';
import Modal from 'react-modal';
import {ButtonSuccess} from "../elements/button/ButtonSuccess";

export function AboutModal(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleButtonClick() {
    console.log('нажато')
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <ButtonSuccess text={'Узнать больше'} handler={handleButtonClick}/>

      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <div></div>
        <h2>Перечень услуг</h2>
        <p>Тут будет дополнительный текст</p>
        <ul>
          <li>– Защита прав и свобод человека</li>
          <li>– Взыскание дебиторской задолженности</li>
          <li>– Объявление умершим</li>
          <li>– Защита прав авторов</li>
          <li>– Составление надзорной жалобы - надзор в верховном суде</li>
          <li>– Помощь юриста по гражданским делам</li>
          <li>– Юридические услуги по спорам в Арбитражном суде</li>
        </ul>
      </Modal>
    </div>
  );
}

