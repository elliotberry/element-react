
import React from 'react';
import { Component, View, Transition, PropTypes } from '../../libs';
import { cleanScrollBar } from '../table/utils';

export default class Dialog extends Component {
  componentDidMount() {
    if (this.props.visible) {
      this.handleOpen();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.props.visible) {
      if (nextProps.visible) {
        this.handleOpen();
      } else {
        this.handleClose();
      }
    }
  }

  componentWillUnmount() {
    this.handleClose();
  }

  handleOpen() {
    if (this.props.lockScroll !== false) {
      document.body.style.overflow = 'hidden';
    }
    if (this.props.onOpen) {
      this.props.onOpen();
    }
  }

  handleClose() {
    if (this.props.lockScroll !== false) {
      document.body.style.overflow = '';
    }
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  handleMaskClick() {
    if (this.props.closeOnClickModal !== false && this.props.onCancel) {
      this.props.onCancel();
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 27 && this.props.closeOnPressEscape !== false && this.props.onCancel) {
      this.props.onCancel();
    }
  }

  render() {
    if (!this.props.visible) {
      return null;
    }

    const { title, size = 'small', top = '15%', modal = true, customClass, showClose = true } = this.props;

    return (
      <View show={this.props.visible} name="dialog-fade">
        <div
          className={this.className('el-dialog__wrapper')}
          onClick={modal ? this.handleMaskClick.bind(this) : null}
          onKeyDown={this.handleKeyDown.bind(this)}
          tabIndex="-1"
        >
          <div
            style={this.style({ top: size !== 'full' ? top : '0' })}
            className={this.className('el-dialog', `el-dialog--${size}`, customClass)}
            onClick={(e) => e.stopPropagation()}
          >
            {title && (
              <div className="el-dialog__header">
                <span className="el-dialog__title">{title}</span>
                {showClose && (
                  <button
                    type="button"
                    className="el-dialog__close el-icon-close"
                    onClick={this.props.onCancel}
                  />
                )}
              </div>
            )}
            {this.props.children}
          </div>
        </div>
      </View>
    );
  }
}

Dialog.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'small', 'large', 'full']),
  top: PropTypes.string,
  modal: PropTypes.bool,
  customClass: PropTypes.string,
  lockScroll: PropTypes.bool,
  closeOnClickModal: PropTypes.bool,
  closeOnPressEscape: PropTypes.bool,
  showClose: PropTypes.bool,
  onCancel: PropTypes.func,
  onOpen: PropTypes.func,
  onClose: PropTypes.func
};
