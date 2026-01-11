
import React from 'react';
import { Component, PropTypes } from '../../libs';

import calcTextareaHeight from './calcTextareaHeight'

export default class Input extends Component {
  state;

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue || ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value || '' });
    }
  }

  componentDidUpdate() {
    if (this.props.type === 'textarea' && this.props.autosize) {
      this.adjustTextareaHeight();
    }
  }

  adjustTextareaHeight() {
    const textarea = this.refs.textarea;
    if (!textarea) return;

    const minRows = this.props.autosize?.minRows;
    const maxRows = this.props.autosize?.maxRows;

    if (this.props.autosize === true || minRows || maxRows) {
      const height = calcTextareaHeight(textarea, minRows, maxRows);
      textarea.style.height = height + 'px';
    }
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }

  handleIconClick(e) {
    if (this.props.onIconClick) {
      this.props.onIconClick(e);
    }
  }

  render() {
    const { type, placeholder, disabled, icon, size, rows, resize, className, style, onKeyDown, onBlur } = this.props;
    const { value } = this.state;

    if (type === 'textarea') {
      return (
        <div
          style={this.style(style)}
          className={this.className('el-textarea', className)}
        >
          <textarea
            ref="textarea"
            className="el-textarea__inner"
            placeholder={placeholder}
            disabled={disabled}
            rows={rows}
            style={{ resize }}
            value={value}
            onChange={this.handleChange.bind(this)}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
          />
        </div>
      );
    }

    return (
      <div
        style={this.style(style)}
        className={this.className('el-input', size && `el-input--${size}`, className)}
      >
        {icon && (
          <i
            className={`el-icon-${icon}`}
            onClick={this.handleIconClick.bind(this)}
          />
        )}
        <input
          className="el-input__inner"
          type={type || 'text'}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={this.handleChange.bind(this)}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
      </div>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onIconClick: PropTypes.func,
  size: PropTypes.string,
  rows: PropTypes.number,
  resize: PropTypes.string,
  autosize: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};
