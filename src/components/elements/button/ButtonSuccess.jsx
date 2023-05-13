import React from 'react';

import './buttonSuccess.css';

export function ButtonSuccess(props) {
  const handler = props.handler ?? ((e) => {console.log('Нет хендлера')})
  return (
    <button className={'button--success'} onClick={handler}>
      {props.text}
    </button>
  );
}

