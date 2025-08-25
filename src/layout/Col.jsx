import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils';

const GutterContext = React.createContext(0);

export const useGutter = () => useContext(GutterContext);

const Col = React.forwardRef(({
  span = 24,
  offset,
  pull,
  push,
  xs,
  sm,
  md,
  lg,
  tag = 'div',
  children,
  className,
  style,
  ...props
}, ref) => {
  const gutter = useContext(GutterContext);

  const getStyle = () => {
    const colStyle = { ...style };

    if (gutter) {
      colStyle.paddingLeft = `${gutter / 2}px`;
      colStyle.paddingRight = colStyle.paddingLeft;
    }

    return colStyle;
  };

  const getClassList = () => {
    let classList = [];

    ['span', 'offset', 'pull', 'push'].forEach(prop => {
      const value = prop === 'span' ? span : props[prop];
      if (value >= 0) {
        classList.push(
          prop !== 'span'
            ? `el-col-${prop}-${value}`
            : `el-col-${value}`
        );
      }
    });

    ['xs', 'sm', 'md', 'lg'].forEach(size => {
      const sizeValue = props[size];
      if (typeof sizeValue === 'object') {
        Object.keys(sizeValue).forEach(prop => {
          classList.push(
            prop !== 'span'
              ? `el-col-${size}-${prop}-${sizeValue[prop]}`
              : `el-col-${size}-${sizeValue[prop]}`
          );
        });
      } else if (sizeValue >= 0) {
        classList.push(`el-col-${size}-${Number(sizeValue)}`);
      }
    });

    return classList;
  };

  const classList = getClassList();
  const colStyle = getStyle();

  return (
    <Tag
      ref={ref}
      className={cn('el-col', ...classList, className)}
      style={colStyle}
      {...props}
    >
      {children}
    </Tag>
  );
});

Col.propTypes = {
  span: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pull: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  push: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]),
  tag: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

Col.defaultProps = {
  span: 24,
  tag: 'div'
};

Col.displayName = 'Col';

export default Col;
