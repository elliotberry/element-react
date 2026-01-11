
import React from 'react';
import { Component, PropTypes } from '../../libs';

export default class TabPane extends Component {
  handleClick() {
    if (!this.props.disabled && this.props.onClick) {
      this.props.onClick(this);
    }
  }

  handleRemove(e) {
    e.stopPropagation();
    if (this.props.onRemove) {
      this.props.onRemove(this.props.name, e);
    }
  }

  render() {
    const { label, name, isActive, closable, disabled, children, renderAs } = this.props;

    // Render tab button (used in Tabs header)
    if (renderAs === 'button') {
      return (
        <div
          className={this.classNames('el-tabs__item', {
            'is-active': isActive,
            'is-disabled': disabled,
            'is-closable': closable
          })}
          onClick={() => this.handleClick()}
        >
          <span>{label}</span>
          {closable && (
            <span className="el-icon-close" onClick={(e) => this.handleRemove(e)} />
          )}
        </div>
      );
    }

    // Render content panel (used in Tabs content)
    return (
      <div
        className={this.classNames('el-tab-pane', {
          'is-active': isActive
        })}
        role="tabpanel"
        aria-hidden={!isActive}
      >
        {isActive && children}
      </div>
    );
  }
}

TabPane.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  name: PropTypes.string,
  isActive: PropTypes.bool,
  closable: PropTypes.bool,
  disabled: PropTypes.bool,
  renderAs: PropTypes.oneOf(['button', 'content']),
  onClick: PropTypes.func,
  onRemove: PropTypes.func
};
