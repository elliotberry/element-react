import React from 'react';
import PropTypes from 'prop-types';
import { cn, createClassName } from '../utils';

const Badge = React.forwardRef(({
  children,
  value,
  max,
  isDot = false,
  className,
  style,
  ...props
}, ref) => {
  const badgeClassName = cn({
    'el-badge__content': true,
    'is-fixed': !!children,
    'is-dot': !!isDot,
  });

  let content;

  if (isDot) {
    content = null;
  } else {
    if (typeof value === 'number' && typeof max === 'number') {
      content = max < value ? `${max}+` : value;
    } else {
      content = value;
    }
  }

  return (
    <div
      ref={ref}
      className={createClassName('el-badge', {}, className)}
      style={style}
      {...props}
    >
      {children}
      <sup className={badgeClassName}>{content}</sup>
    </div>
  );
});

Badge.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.number,
  isDot: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

Badge.defaultProps = {
  isDot: false
};

Badge.displayName = 'Badge';

export default Badge;
