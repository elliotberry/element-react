import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils';

const RadioGroupContext = React.createContext();

const RadioButton = React.forwardRef(({
  value,
  disabled,
  name,
  children,
  className,
  style,
  ...props
}, ref) => {
  const group = useContext(RadioGroupContext);

  const parent = () => {
    return group;
  };

  const size = () => {
    return parent()?.props?.size;
  };

  const isDisabled = () => {
    return disabled || parent()?.props?.disabled;
  };

  const activeStyle = () => {
    return {
      backgroundColor: parent()?.props?.fill || '',
      borderColor: parent()?.props?.fill || '',
      color: parent()?.props?.textColor || ''
    };
  };

  const isChecked = () => {
    return parent()?.props?.value === value;
  };

  const handleChange = (e) => {
    if (parent()?.props?.onChange) {
      parent().props.onChange(value);
    }
  };

  return (
    <label
      ref={ref}
      className={cn('el-radio-button', 
        size() && `el-radio-button--${size()}`, 
        {
          'is-active': isChecked()
        },
        className
      )}
      style={style}
      {...props}
    >
      <input
        type="radio"
        className="el-radio-button__orig-radio"
        checked={isChecked()}
        disabled={isDisabled()}
        onChange={handleChange}
        name={name}
      />
      <span 
        className="el-radio-button__inner" 
        style={isChecked() ? activeStyle() : {}}
      >
        {children || value}
      </span>
    </label>
  );
});

RadioButton.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  name: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

RadioButton.displayName = 'RadioButton';

export default RadioButton;
