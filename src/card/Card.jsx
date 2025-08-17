import React from 'react';
import PropTypes from 'prop-types';
import { cn, createClassName } from '../utils';

const Card = React.forwardRef(({
  header,
  bodyStyle = { padding: '20px' },
  children,
  className,
  style,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={createClassName('el-card', {}, className)}
      style={style}
      {...props}
    >
      {header && (
        <div className="el-card__header">{header}</div>
      )}
      <div className="el-card__body" style={bodyStyle}>
        {children}
      </div>
    </div>
  );
});

Card.propTypes = {
  header: PropTypes.node,
  bodyStyle: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

Card.defaultProps = {
  bodyStyle: {
    padding: '20px'
  }
};

Card.displayName = 'Card';

export default Card;
