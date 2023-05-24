import React, { useState } from 'react';
import Modal from 'react-modal';
import {ButtonSuccess} from "../elements/button/ButtonSuccess";

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

  return (
    <div>
      <ButtonSuccess text={'Узнать больше'} handler={handleButtonClick}/>

      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>

        <h2>Перечень услуг</h2>
        <p>Тут будет дополнительный текст</p>
        <ul>
          {renderList()}
        </ul>
      </Modal>
    </div>
  );
}

