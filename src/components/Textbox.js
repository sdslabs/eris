import React from 'react'
import PropTypes from 'prop-types';

const Textbox = ({type,placeholder}) => {
  return (
    <div className="textbox">
        <input type={type} placeholder={placeholder} />
    </div>
  );
}

Textbox.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Textbox;
