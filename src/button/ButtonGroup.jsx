import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils';

const ButtonGroup = React.forwardRef(({
  children,
  className,
  style,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn('el-button-group', className)}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
});

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
