import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { cn, createClassName } from '../utils';

const Loading = React.forwardRef(({
  loading = true,
  fullscreen = false,
  text,
  children,
  className,
  style,
  ...props
}, ref) => {
  const getStyle = () => {
    if (fullscreen) {
      disableScroll();
      return {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 99999
      };
    } else {
      enableScroll();
      if (loading) {
        return {
          position: 'relative'
        };
      }
      return {};
    }
  };

  const disableScroll = () => {
    const documentBody = document.body;
    if (documentBody) {
      documentBody.style.setProperty('overflow', 'hidden');
    }
  };

  const enableScroll = () => {
    const documentBody = document.body;
    if (documentBody) {
      documentBody.style.removeProperty('overflow');
    }
  };

  useEffect(() => {
    return () => {
      enableScroll();
    };
  }, []);

  const loadingStyle = getStyle();
  const combinedStyle = { ...loadingStyle, ...style };

  return (
    <div
      ref={ref}
      className={createClassName('el-loading', {}, className)}
      style={combinedStyle}
      {...props}
    >
      {loading && (
        <div
          style={{
            display: 'block',
            position: 'absolute',
            zIndex: 657,
            backgroundColor: 'rgba(255, 255, 255, 0.901961)',
            margin: 0,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }}
        >
          <div
            className={cn('el-loading-spinner', {
              'is-full-screen': fullscreen
            })}
            style={{
              position: 'absolute',
              display: 'inline-block',
              left: 0
            }}
          >
            <svg className="circular" viewBox="25 25 50 50">
              <circle className="path" cx="50" cy="50" r="20" fill="none" />
            </svg>
            {text && <p className="el-loading-text">{text}</p>}
          </div>
        </div>
      )}
      {children}
    </div>
  );
});

Loading.propTypes = {
  loading: PropTypes.bool,
  fullscreen: PropTypes.bool,
  text: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

Loading.defaultProps = {
  loading: true
};

Loading.displayName = 'Loading';

export default Loading;
