
import React from 'react';
import { Component, PropTypes } from '../../libs';

import InputNumber from '../input-number';
import SliderButton from './Button';

export default class Slider extends Component {
  render() {
    // Component implementation needed
    return <div className="el-slider">Slider</div>;
  }
}

Slider.propTypes = {
  min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  showInput: PropTypes.bool,
  showInputControls: PropTypes.bool,
  showTooltip: PropTypes.bool,
  showStops: PropTypes.bool,
  disabled: PropTypes.bool,
  range: PropTypes.bool,
  vertical: PropTypes.bool,
  height: PropTypes.string,
  formatTooltip: PropTypes.func,
  onChange: PropTypes.func
}

Slider.defaultProps = {
  showTooltip: true,
  showInputControls: true,
  min: 0,
  max: 100,
  step: 1,
  value: 0
}
