import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../utils';

const GutterContext = createContext(0);

export const useGutter = () => useContext(GutterContext);

const Row = React.forwardRef(({
  gutter,
  type,
  justify = 'start',
  align = 'top',
  tag: Tag = 'div',
  children,
  className,
  style,
  ...props
}, ref) => {
  const getStyle = () => {
    const rowStyle = { ...style };

    if (gutter) {
      rowStyle.marginLeft = `-${gutter / 2}px`;
      rowStyle.marginRight = rowStyle.marginLeft;
    }

    return rowStyle;
  };

  const rowClassName = cn(
    'el-row',
    justify !== 'start' && `is-justify-${justify}`,
    align !== 'top' && `is-align-${align}`,
    {
      'el-row--flex': type === 'flex'
    },
    className
  );

  return (
    <GutterContext.Provider value={gutter}>
      <Tag
        ref={ref}
        className={rowClassName}
        style={getStyle()}
        {...props}
      >
        {children}
      </Tag>
    </GutterContext.Provider>
  );
});

Row.propTypes = {
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  tag: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

Row.defaultProps = {
  justify: 'start',
  align: 'top',
  tag: 'div'
};

Row.displayName = 'Row';

export default Row;
