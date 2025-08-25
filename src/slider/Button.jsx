
import React from 'react';
import { Component, PropTypes } from '../../libs';

import Tooltip from '../tooltip';


SliderButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
  vertical: PropTypes.bool
};
