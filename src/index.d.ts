import React from 'react';

// Button
export interface ButtonProps {
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'large' | 'default' | 'small' | 'mini';
  icon?: string;
  nativeType?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
  plain?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => undefined;
  children?: React.ReactNode;
}

export const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

export interface ButtonGroupProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps & React.RefAttributes<HTMLDivElement>>;

// Alert
export interface AlertProps {
  title: string;
  description?: string;
  type?: 'success' | 'warning' | 'error' | 'info';
  closable?: boolean;
  closeText?: string;
  showIcon?: boolean;
  onClose?: () => undefined;
  className?: string;
  style?: React.CSSProperties;
}

export const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;

// Input
export interface InputProps {
  type?: string;
  size?: 'large' | 'small' | 'mini';
  prepend?: React.ReactNode;
  append?: React.ReactNode;
  icon?: React.ReactElement | string;
  autoComplete?: string;
  validating?: boolean;
  rows?: number;
  onMouseEnter?: (e: React.MouseEvent) => undefined;
  onMouseLeave?: (e: React.MouseEvent) => undefined;
  trim?: boolean;
  disabled?: boolean;
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  autoFocus?: boolean;
  maxLength?: number;
  minLength?: number;
  defaultValue?: any;
  value?: any;
  autosize?: boolean | { minRows?: number; maxRows?: number };
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  onFocus?: (e: React.FocusEvent) => undefined;
  onBlur?: (e: React.FocusEvent) => undefined;
  onChange?: (value: string) => undefined;
  onIconClick?: (e: React.MouseEvent) => undefined;
  inputSelect?: () => undefined;
  form?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;

// Export all components
export { default as i18n } from './locale';
export { default as Card } from './card';
export { default as Layout } from './layout';
export { default as Loading } from './loading';
export { default as Message } from './message';
export { default as MessageBox } from './message-box';
export { default as Notification } from './notification';
export { default as Radio } from './radio';
export { default as Dialog } from './dialog';
export { default as Rate } from './rate';
export { default as Progress } from './progress';
export { default as Badge } from './badge';
export { default as Tabs } from './tabs';
export { default as Tree } from './tree';
export { default as Icon } from './icon';
export { default as Menu } from './menu';
export { default as Steps } from './steps';
export { default as Breadcrumb } from './breadcrumb';
export { default as Tooltip } from './tooltip';
export { default as InputNumber } from './input-number';
export { default as Checkbox } from './checkbox';
export { default as Slider } from './slider';
export { default as Table } from './table';
export { default as Switch } from './switch';
export { default as Form } from './form';
export { default as Upload } from './upload';
export { default as Tag } from './tag';
export { default as Select } from './select';
export { default as Dropdown } from './dropdown';
export { default as Popover } from './popover';
export { default as Pagination } from './pagination';
export { default as AutoComplete } from './auto-complete';
export { TimeSelect, TimePicker, TimeRangePicker, DatePicker, DateRangePicker } from './date-picker';
export { default as Carousel } from './carousel';
export { default as Collapse } from './collapse';
export { default as ColorPicker } from './color-picker';
export { default as Cascader } from './cascader';
export { default as Transfer } from './transfer';
