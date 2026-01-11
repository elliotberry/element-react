
import React from 'react'
import { Component, PropTypes } from '../../libs'

export default class Checkbox extends Component {
  render() {
    // Component implementation needed
    return <div className="el-checkbox">Checkbox</div>;
  }
}

Checkbox.propTypes = {
  label: PropTypes.string,
  trueLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  falseLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  focus: PropTypes.bool,
  onChange: PropTypes.func
};

Checkbox.defaultProps = {
  checked: false,
  focus: false
};
