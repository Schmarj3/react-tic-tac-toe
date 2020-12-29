import React from 'react';
import PropTypes from 'prop-types';

import './Square.css'

const Square = (props) => {
  const onClickCallback = () => {
    const updatedSquare = {
      id: props.id,
      value: props.value
    }
    console.log('clicked');
    props.onClickCallback(updatedSquare);
  }

  return <button
    className="square" onClick={onClickCallback}
  >
    {props.value}
  </button>
}

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Square
