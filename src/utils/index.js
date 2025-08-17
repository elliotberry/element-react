import classNames from 'classnames';

export const cn = (...args) => classNames(args);

export const mergeStyles = (baseStyle, additionalStyle) => {
  return { ...baseStyle, ...additionalStyle };
};

export const createClassName = (baseClass, modifiers = {}, additionalClasses = '') => {
  const modifierClasses = Object.entries(modifiers)
    .filter(([, value]) => value)
    .map(([key, value]) => {
      if (typeof value === 'boolean') {
        return `${baseClass}--${key}`;
      }
      return `${baseClass}--${value}`;
    });

  return cn(baseClass, ...modifierClasses, additionalClasses);
};
