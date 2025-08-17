import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils';

const Radio = React.forwardRef(({
  value,
  onChange,
  disabled,
  checked: controlledChecked,
  model,
  children,
  className,
  style,
  ...props
}, ref) => {
  const [internalChecked, setInternalChecked] = useState(false);
  const [focus, setFocus] = useState(false);

  const getChecked = (props) => {
    return props.model === props.value || Boolean(props.checked);
  };

  const isControlled = 'checked' in props || 'model' in props;
  const checked = isControlled ? getChecked({ model, checked: controlledChecked }) : internalChecked;

  useEffect(() => {
    if (isControlled) {
      const newChecked = getChecked({ model, checked: controlledChecked });
      if (internalChecked !== newChecked) {
        setInternalChecked(newChecked);
      }
    }
  }, [model, controlledChecked, isControlled, internalChecked]);

  const handleChange = (e) => {
    const newChecked = e.target.checked;

    if (newChecked) {
      if (onChange) {
        onChange(value);
      }
    }

    if (!isControlled) {
      setInternalChecked(newChecked);
    }
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <label
      ref={ref}
      className={cn('el-radio', className)}
      style={style}
      {...props}
    >
      <span
        className={cn('el-radio__input', {
          'is-checked': checked,
          'is-disabled': disabled,
          'is-focus': focus
        })}
      >
        <span className="el-radio__inner" />
        <input
          type="radio"
          className="el-radio__original"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </span>
      <span className="el-radio__label">
        {children || value}
      </span>
    </label>
  );
});

Radio.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  model: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

Radio.displayName = 'Radio';

export default Radio;
