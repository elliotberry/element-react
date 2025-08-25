import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils';

const Rate = React.forwardRef(({
  colors = ['#F7BA2A', '#F7BA2A', '#F7BA2A'],
  texts = ['极差', '失望', '一般', '满意', '惊喜'],
  showText = false,
  textColor = '#1F2D3D',
  disabled = false,
  value = 0,
  onChange,
  textTemplate = '{value}',
  lowThreshold = 2,
  highThreshold = 4,
  max = 5,
  voidColor = '#C6D1DE',
  disabledVoidColor = '#EFF2F7',
  iconClasses = ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'],
  voidIconClass = 'el-icon-star-off',
  disabledVoidIconClass = 'el-icon-star-on',
  allowHalf = false,
  className,
  style,
  ...props
}, ref) => {
  const [pointerAtLeftHalf, setPointerAtLeftHalf] = useState(false);
  const [currentValue, setCurrentValue] = useState(value - 1);
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [internalValue, setInternalValue] = useState(-1);

  const classMap = {
    lowClass: iconClasses[0],
    mediumClass: iconClasses[1],
    highClass: iconClasses[2],
    voidClassIconClass,
    disabledVoidClass: disabledVoidIconClass
  };

  const colorMap = {
    lowColor: colors[0],
    mediumColor: colors[1],
    highColor: colors[2],
    voidColorColor,
    disabledVoidColor: disabledVoidColor
  };

  useEffect(() => {
    if (value && value !== internalValue) {
      setInternalValue(value);
    }
  }, [value, internalValue]);

  const hasClass = (target, classname) => {
    return target.classList.contains(classname);
  };

  const setCurrentValueHandler = (e, value) => {
    if (disabled) {
      return;
    }

    if (allowHalf) {
      e.persist();
      let target = e.target;
      if (hasClass(target, 'el-rate__item')) {
        target = target.querySelector('.el-rate__icon');
      }
      if (hasClass(target, 'el-rate__decimal')) {
        target = target.parentNode;
      }
      const isLeftHalf = (e.clientX - target.getBoundingClientRect().left) * 2 <= target.clientWidth;
      setPointerAtLeftHalf(isLeftHalf);
      setCurrentValue(isLeftHalf ? value - 0.5 : value);
    } else {
      setCurrentValue(value);
    }
    setHoverIndex(value);
  };

  const getValueFromMap = (value, map) => {
    let result = '';
    if (value <= lowThreshold - 1) {
      result = map.lowColor || map.lowClass;
    } else if (value >= highThreshold) {
      result = map.highColor || map.highClass;
    } else {
      result = map.mediumColor || map.mediumClass;
    }
    return result;
  };

  const getIconStyle = (item) => {
    const voidColorValue = disabled ? colorMap.disabledVoidColor : colorMap.voidColor;
    return {
      color: item <= currentValue ? activeColor() ColorValue
    };
  };

  const showDecimalIcon = (item) => {
    let showWhenDisabled = disabled &&
      valueDecimal() > 0 &&
      item - 1 < value - 1 &&
      item > value - 1;
    let showWhenAllowHalf = allowHalf &&
      pointerAtLeftHalf &&
      (item - 0.5).toFixed(1) === currentValue.toFixed(1);
    return showWhenDisabled || showWhenAllowHalf;
  };

  const classes = () => {
    let result = [];
    let i = 0;
    let threshold = currentValue;
    if (allowHalf && currentValue !== Math.floor(currentValue)) {
      threshold = currentValue;
    }
    for (; i <= threshold; i++) {
      result.push(activeClass());
    }
    for (; i < max; i++) {
      result.push(voidClass());
    }
    return result;
  };

  const valueDecimal = () => {
    return value * 100 - Math.floor(value) * 100;
  };

  const decimalIconClass = () => {
    return getValueFromMap(value, classMap);
  };

  const voidClass = () => {
    return disabled ? classMap.disabledVoidClass : classMap.voidClass;
  };

  const activeClass = () => {
    return getValueFromMap(currentValue, classMap);
  };

  const activeColor = () => {
    return getValueFromMap(currentValue, colorMap);
  };

  const selectValue = (value) => {
    if (disabled) {
      return;
    }
    if (allowHalf && pointerAtLeftHalf) {
      setInternalValue(currentValue);
      setCurrentValue(currentValue);
      onChange && onChange(currentValue + 1);
    } else {
      setCurrentValue(value);
      setInternalValue(value);
      onChange && onChange(value + 1);
    }
  };

  const decimalStyle = () => {
    let width = '';
    if (disabled) {
      width = `${valueDecimal() < 50 ? 0 : 50}%`;
    }
    if (allowHalf) {
      width = '50%';
    }
    return {
      color: activeColor(),
      width
    };
  };

  const showTextValue = () => {
    let result = '';
    if (disabled) {
      result = textTemplate.replace(/\{value\}/g, value);
    } else {
      result = texts[Math.ceil(currentValue)];
    }
    return result;
  };

  const resetCurrentValue = () => {
    if (disabled) {
      return;
    }
    if (allowHalf) {
      setPointerAtLeftHalf(value !== Math.floor(value));
    }
    setCurrentValue(value);
    setHoverIndex(-1);
  };

  return (
    <div
      ref={ref}
      className={cn('el-rate', className)}
      style={style}
      {...props}
    >
      {[...Array(max)].map((v, k) => (
        <span
          key={k}
          className="el-rate__item"
          style={{ cursor: disabled ? 'auto' : 'pointer' }}
          onClick={() => selectValue(k)}
          onMouseMove={(e) => setCurrentValueHandler(e, k)}
          onMouseLeave={resetCurrentValue}
        >
          <i
            style={getIconStyle(k)}
            className={
              hoverIndex === k
                ? `hover el-rate__icon ${classes()[k]}`
                : `el-rate__icon ${classes()[k]}`
            }
          >
            {showDecimalIcon(k) && (
              <i
                style={decimalStyle()}
                className={`el-rate__decimal ${decimalIconClass()}`}
              />
            )}
          </i>
        </span>
      ))}
      {showText && (
        <span className="el-rate__text" style={{ color: textColor }}>
          {showTextValue()}
        </span>
      )}
    </div>
  );
});

Rate.propTypes = {
  colors: PropTypes.array,
  texts: PropTypes.array,
  showText: PropTypes.bool,
  textColor: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.number,
  onChange: PropTypes.func,
  textTemplate: PropTypes.string,
  lowThreshold: PropTypes.number,
  highThreshold: PropTypes.number,
  max: PropTypes.number,
  voidColor: PropTypes.string,
  disabledVoidColor: PropTypes.string,
  iconClasses: PropTypes.array,
  voidIconClass: PropTypes.string,
  disabledVoidIconClass: PropTypes.string,
  allowHalf: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

Rate.defaultProps = {
  colors: ['#F7BA2A', '#F7BA2A', '#F7BA2A'],
  texts: ['极差', '失望', '一般', '满意', '惊喜'],
  showText: false,
  textColor: '#1F2D3D',
  disabled: false,
  value: 0,
  lowThreshold: 2,
  highThreshold: 4,
  max: 5,
  voidColor: '#C6D1DE',
  disabledVoidColor: '#EFF2F7',
  iconClasses: ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'],
  voidIconClass: 'el-icon-star-off',
  disabledVoidIconClass: 'el-icon-star-on',
  allowHalf: false,
  textTemplate: '{value}'
};

Rate.displayName = 'Rate';

export default Rate;
