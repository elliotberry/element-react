import React from 'react';
import PropTypes from 'prop-types';
import { cn, createClassName } from '../utils';

const Progress = React.forwardRef(({
  type = 'line',
  percentage = 0,
  status,
  strokeWidth = 6,
  width = 126,
  textInside = false,
  showText = true,
  className,
  style,
  ...props
}, ref) => {
  const relativeStrokeWidth = () => {
    return (strokeWidth / width * 100).toFixed(1);
  };

  const trackPath = () => {
    const radius = parseInt(
      50 - parseFloat(relativeStrokeWidth()) / 2,
      10
    );
    return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
  };

  const perimeter = () => {
    const radius = 50 - parseFloat(relativeStrokeWidth()) / 2;
    return 2 * Math.PI * radius;
  };

  const circlePathStyle = () => {
    const perimeterValue = perimeter();
    return {
      strokeDasharray: `${perimeterValue}px,${perimeterValue}px`,
      strokeDashoffset: (1 - percentage / 100) * perimeterValue + 'px',
      transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
    };
  };

  const stroke = () => {
    let ret;
    switch (status) {
      case 'success':
        ret = '#13ce66';
        break;
      case 'exception':
        ret = '#ff4949';
        break;
      default:
        ret = '#20a0ff';
    }
    return ret;
  };

  const iconClass = () => {
    return type === 'line'
      ? status === 'success' ? 'el-icon-circle-check' : 'el-icon-circle-cross'
      : status === 'success' ? 'el-icon-check' : 'el-icon-close';
  };

  const progressTextSize = () => {
    return type === 'line' ? 12 + strokeWidth * 0.4 : width * 0.111111 + 2;
  };

  let progress;
  if (type === 'line') {
    progress = (
      <div className="el-progress-bar">
        <div
          className="el-progress-bar__outer"
          style={{ height: `${strokeWidth}px` }}
        >
          <div
            className="el-progress-bar__inner"
            style={{ width: `${percentage}%` }}
          >
            {showText &&
              textInside &&
              <div className="el-progress-bar__innerText">
                {`${percentage}%`}
              </div>}
          </div>
        </div>
      </div>
    );
  } else {
    progress = (
      <div
        className="el-progress-circle"
        style={{ height: `${width}px`, width: `${width}px` }}
      >
        <svg viewBox="0 0 100 100">
          <path
            className="el-progress-circle__track"
            d={trackPath()}
            stroke="#e5e9f2"
            strokeWidth={relativeStrokeWidth()}
            fill="none"
          />
          <path
            className="el-progress-circle__path"
            d={trackPath()}
            strokeLinecap="round"
            stroke={stroke()}
            strokeWidth={relativeStrokeWidth()}
            fill="none"
            style={circlePathStyle()}
          />
        </svg>
      </div>
    );
  }

  const progressInfo = showText &&
    !textInside &&
    <div
      className="el-progress__text"
      style={{ fontSize: `${progressTextSize()}px` }}
    >
      {status ? <i className={iconClass()} /> : `${percentage}%`}
    </div>;

  const progressClassName = createClassName('el-progress', {
    [type]: type,
    [status]: status,
    'without-text': !showText,
    'text-inside': textInside
  }, className);

  return (
    <div
      ref={ref}
      className={progressClassName}
      style={style}
      {...props}
    >
      {progress}
      {progressInfo}
    </div>
  );
});

Progress.propTypes = {
  type: PropTypes.oneOf(['line', 'circle']),
  percentage: PropTypes.number.isRequired,
  status: PropTypes.oneOf(['success', 'exception']),
  strokeWidth: PropTypes.number,
  width: PropTypes.number,
  textInside: PropTypes.bool,
  showText: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

Progress.defaultProps = {
  type: 'line',
  percentage: 0,
  strokeWidth: 6,
  width: 126,
  showText: true,
  textInside: false
};

Progress.displayName = 'Progress';

export default Progress;
