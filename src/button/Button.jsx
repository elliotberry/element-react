import React from 'react';
import PropTypes from 'prop-types';
import { cn, createClassName } from '../utils';

const Button = React.forwardRef(({
  children,
  type = 'default',
  size,
  icon,
  nativeType = 'button',
  loading = false,
  disabled = false,
  plain = false,
  className,
  style,
  onClick,
  ...props
}, ref) => {
  const handleClick = (e) => {
    if (!loading && onClick) {
      onClick(e);
    }
  };

  const buttonClassName = createClassName('el-button', {
    [type]: type !== 'default',
    [size]: size,
    disabled,
    loading,
    plain
  }, className);

  return (
    <button
      ref={ref}
      type={nativeType}
      disabled={disabled}
      className={buttonClassName}
      style={style}
      onClick={handleClick}
      {...props}
    >
      {loading && <i className="el-icon-loading" />}
      {icon && !loading && <i className={`el-icon-${icon}`} />}
      <span>{children}</span>
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger', 'info']),
  size: PropTypes.oneOf(['large', 'default', 'small', 'mini']),
  icon: PropTypes.string,
  nativeType: PropTypes.oneOf(['button', 'submit', 'reset']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  plain: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

Button.defaultProps = {
  type: 'default',
  nativeType: 'button',
  loading: false,
  disabled: false,
  plain: false
};

Button.displayName = 'Button';

export default Button;
