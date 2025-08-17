import React from 'react';
import PropTypes from 'prop-types';
import { cn, createClassName } from '../utils';

const Step = React.forwardRef(({
  title,
  icon,
  description,
  status = 'wait',
  direction,
  style,
  lineStyle,
  stepNumber,
  className,
  ...props
}, ref) => {
  const directionClass = `is-${direction}`;
  const statusClass = `is-${status}`;
  
  const iconNode = icon
    ? <i className={`el-icon-${icon}`} />
    : <div>{stepNumber}</div>;

  return (
    <div
      ref={ref}
      className={cn('el-step', directionClass, className)}
      style={style}
      {...props}
    >
      <div
        className={cn('el-step__head', statusClass, {
          'is-text': !icon
        })}
      >
        <div
          className={cn('el-step__line', directionClass, {
            'is-icon': icon
          })}
        >
          <i className="el-step__line-inner" style={lineStyle} />
        </div>
        <span className="el-step__icon">
          {status !== 'success' && status !== 'error'
            ? iconNode
            : <i
                className={
                  'el-icon-' + (status === 'success' ? 'check' : 'close')
                }
              />}
        </span>
      </div>
      <div className="el-step__main">
        <div
          className={cn('el-step__title', statusClass)}
        >
          {title}
        </div>
        <div className={cn('el-step__description', statusClass)}>
          {description}
        </div>
      </div>
    </div>
  );
});

Step.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  status: PropTypes.oneOf(['wait', 'process', 'finish', 'error', 'success']),
  direction: PropTypes.string,
  style: PropTypes.object,
  lineStyle: PropTypes.object,
  stepNumber: PropTypes.number,
  className: PropTypes.string
};

Step.defaultProps = {
  status: 'wait'
};

Step.displayName = 'Step';

export default Step;
