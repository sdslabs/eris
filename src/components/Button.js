import React from 'react'
import PropTypes from 'prop-types';

const Button = ({name,value}) => {
  return (
    <div className="textbox">
        <input type="submit" name={name} value={value} />
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default Button;
