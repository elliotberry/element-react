import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { cn, createClassName } from '../utils';

const TYPE_CLASSES_MAP = {
  'success': 'el-icon-circle-check',
  'warning': 'el-icon-warning',
  'error': 'el-icon-circle-cross'
};

const Alert = React.forwardRef(({
  title,
  description,
  type = 'info',
  closable = true,
  closeText,
  showIcon = false,
  onClose,
  className,
  style,
  ...props
}, ref) => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  const handleAfterLeave = () => {
    if (onClose) {
      onClose();
    }
  };

  const alertClassName = createClassName('el-alert', {
    [type]: type
  }, className);

  const iconClassName = cn('el-alert__icon', TYPE_CLASSES_MAP[type] || 'el-icon-information', {
    'is-big': description
  });

  const titleClassName = cn('el-alert__title', {
    'is-bold': description
  });

  const closeBtnClassName = cn('el-alert__closebtn', closeText ? 'is-customed' : 'el-icon-close');

  if (!visible) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={alertClassName}
      style={style}
      {...props}
    >
      {showIcon && (
        <i className={iconClassName} />
      )}
      <div className="el-alert__content">
        {title && (
          <span className={titleClassName}>{title}</span>
        )}
        {description && (
          <p className="el-alert__description">{description}</p>
        )}
        {closable && (
          <i 
            className={closeBtnClassName} 
            onClick={handleClose}
          >
            {closeText}
          </i>
        )}
      </div>
    </div>
  );
});

Alert.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  closable: PropTypes.bool,
  closeText: PropTypes.string,
  showIcon: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};

Alert.defaultProps = {
  type: 'info',
  closable: true,
  showIcon: false
};

Alert.displayName = 'Alert';

export default Alert;
