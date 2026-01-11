
import React from 'react';
import { Component, PropTypes } from '../../libs';

import Tooltip from '../tooltip';

export default class SliderButton extends Component {
  render() {
    // Component implementation needed
    return <div className="el-slider__button">SliderButton</div>;
  }
}

SliderButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
  vertical: PropTypes.bool
};
