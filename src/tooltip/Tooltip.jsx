
import React from 'react';
import Popper from 'popper.js';
import { Component, PropTypes, Transition, View } from '../../libs';

export default class Tooltip extends Component {
  render() {
    // Component implementation needed
    return <div className="el-tooltip">Tooltip</div>;
  }
}

Tooltip.propTypes = {
  effect: PropTypes.string,
  content: PropTypes.node,
  placement: PropTypes.string,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  offset: PropTypes.number,
  transition: PropTypes.string,
  visibleArrow: PropTypes.bool,
  popperOptions: PropTypes.object,
  openDelay: PropTypes.number,
  manual: PropTypes.bool,
  popperClass: PropTypes.string,
  enterable: PropTypes.bool,
  hideAfter: PropTypes.number,
  tabindex: PropTypes.number
};

