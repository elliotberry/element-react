
import React from 'react';
import ReactDOM from 'react-dom';
import Popper from 'popper.js';
import { Component, PropTypes, Transition, View } from '../../libs';


export default class DropdownMenu extends Component {
  state;

  constructor(props) {
    super(props);

    this.state = {
      showPopper: false
    }
  }

  onVisibleChange(visible) {
    this.setState({
      showPopper: visible
    })
  }

  onEnter() {
    const parent = ReactDOM.findDOMNode(this.parent());

    this.popperJS = new Popper(parent, this.refs.popper, {
      placement: this.placement(),
      modifiers: {
        computeStyle: {
          gpuAcceleration: false
        }
      }
    });
  }

  onAfterLeave() {
    this.popperJS.destroy();
  }

  parent() {
    return this.context.component;
  }

  placement() {
    return `bottom-${this.parent().props.menuAlign}`;
  }

  render() {
    return (
      <Transition name="el-zoom-in-top" onEnter={this.onEnter.bind(this)} onAfterLeave={this.onAfterLeave.bind(this)}>
        <View show={this.state.showPopper}>
          <ul ref="popper" style={this.style()} className={this.className('el-dropdown-menu')}>
            {this.props.children}
          </ul>
        </View>
      </Transition>
    )
  }
}

DropdownMenu.contextTypes = {
  component: PropTypes.any
};
