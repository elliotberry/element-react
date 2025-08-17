import React from 'react';
import PropTypes from 'prop-types';
import { cn, createClassName } from '../utils';

const Steps = React.forwardRef(({
  children,
  space,
  direction = 'horizontal',
  finishStatus = 'finish',
  processStatus = 'process',
  active = 0,
  className,
  style,
  ...props
}, ref) => {
  const calcProgress = (status, index) => {
    let step = 100;
    const lineStyle = {};
    lineStyle.transitionDelay = 150 * index + 'ms';

    const nextStatus = calStatus(index + 1);
    // 前后状态不一致时，并且当前status为完成，statusLine的长度才为50%
    if (nextStatus !== status) {
      if (status === finishStatus) {
        step = 50;
      } else if (status === 'wait') {
        step = 0;
        lineStyle.transitionDelay = -150 * index + 'ms';
      }
    }

    if (direction === 'vertical') {
      lineStyle.height = step + '%';
    } else {
      lineStyle.width = step + '%';
    }
    return lineStyle;
  };

  const calStatus = (index) => {
    let status = 'wait';

    if (active > index) {
      status = finishStatus;
    } else if (active === index) {
      status = processStatus;
    }

    return status;
  };

  return (
    <div
      ref={ref}
      className={createClassName('el-steps', {}, className)}
      style={style}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        const computedSpace = space
          ? `${space}px`
          : `${100 / React.Children.count(children)}%`;
        const childStyle = direction === 'horizontal'
          ? { width: computedSpace }
          : {
              height: index === React.Children.count(children) - 1 ? 'auto' : computedSpace
            };
        const status = calStatus(index);
        const lineStyle = calcProgress(status, index);
        return React.cloneElement(child, {
          style: childStyle,
          lineStyle,
          direction,
          status,
          stepNumber: index + 1
        });
      })}
    </div>
  );
});

const statusMap = ['wait', 'process', 'finish', 'error', 'success'];

Steps.propTypes = {
  space: PropTypes.number,
  active: PropTypes.number,
  direction: PropTypes.oneOf(['vertical', 'horizontal']),
  finishStatus: PropTypes.oneOf(statusMap),
  processStatus: PropTypes.oneOf(statusMap),
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

Steps.defaultProps = {
  direction: 'horizontal',
  finishStatus: 'finish',
  processStatus: 'process',
  active: 0
};

Steps.displayName = 'Steps';

export default Steps;
