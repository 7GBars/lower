import React, { useState } from 'react';
import Modal from 'react-modal';
import {ButtonSuccess} from "../elements/button/ButtonSuccess";

import './modal.css';

export function AboutModal({additionalInfo, isListInfo}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleButtonClick() {
    console.log('нажато')
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }
  const renderList = () => {

    if (!isListInfo) {
      return [additionalInfo]
    }  else {
      return additionalInfo.map(i => <li>{i}</li>)
    }
  }
  const closeModal = (e) => setIsModalOpen(false);
  return (
    <div>
      <ButtonSuccess text={'Узнать больше'} handler={handleButtonClick}/>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} >
   {/*todo inset: 10px; border-radius: 10px; шапку фиксированой и добавить крестик для закрытия скролл только для контента*/}
        <h2>Перечень услуг</h2>
        <p>Тут будет дополнительный текст</p>
        <ul>
          <button className="close-button" onClick={closeModal}>X</button>
          {renderList()}
        </ul>
      </Modal>
    </div>
  );
}

