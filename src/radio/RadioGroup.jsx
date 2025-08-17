import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils';

const RadioGroupContext = createContext();

const RadioGroup = React.forwardRef(({
  value,
  disabled,
  size,
  textColor,
  fill,
  onChange,
  children,
  className,
  style,
  ...props
}, ref) => {
  const handleChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  const contextValue = {
    props: {
      value,
      disabled,
      size,
      textColor,
      fill,
      onChange: handleChange
    }
  };

  return (
    <RadioGroupContext.Provider value={contextValue}>
      <div
        ref={ref}
        className={cn('el-radio-group', className)}
        style={style}
        {...props}
      >
        {React.Children.map(children, element => {
          if (!element) {
            return null;
          }

          const { elementType } = element.type;
          if (elementType !== 'Radio' && elementType !== 'RadioButton') {
            return null;
          }

          return React.cloneElement(element, {
            ...element.props,
            onChange: handleChange,
            model: value,
            size: size
          });
        })}
      </div>
    </RadioGroupContext.Provider>
  );
});

RadioGroup.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  size: PropTypes.string,
  textColor: PropTypes.string,
  fill: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
