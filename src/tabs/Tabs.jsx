
import React from 'react';
import { Component, PropTypes, View } from '../../libs';

export default class Tabs extends Component {
  state;

  static defaultProps = {
    closable: false,
    addable: false,
    editable: false
  };

  constructor(props) {
    super(props);
    const activeName = props.activeName || props.value || this.getDefaultActiveName();
    this.state = {
      currentName: activeName
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeName !== this.props.activeName || nextProps.value !== this.props.value) {
      const activeName = nextProps.activeName || nextProps.value;
      if (activeName) {
        this.setState({ currentName: activeName });
      }
    }
  }

  getDefaultActiveName() {
    const children = React.Children.toArray(this.props.children);
    if (children.length > 0) {
      const firstChild = children[0];
      return firstChild.props.name || '1';
    }
    return '1';
  }

  handleTabClick(tab, name) {
    this.setState({ currentName: name });
    if (this.props.onTabClick) {
      this.props.onTabClick(tab);
    }
  }

  handleTabRemove(name, e) {
    e.stopPropagation();
    if (this.props.onTabRemove) {
      this.props.onTabRemove(name);
    }
    if (this.props.onTabEdit) {
      this.props.onTabEdit(name, 'remove');
    }
  }

  handleTabAdd() {
    if (this.props.onTabAdd) {
      this.props.onTabAdd();
    }
    if (this.props.onTabEdit) {
      this.props.onTabEdit('', 'add');
    }
  }

  render() {
    const { type, closable, addable, editable, children } = this.props;
    const { currentName } = this.state;
    const isCard = type === 'card' || type === 'border-card';

    const tabButtons = [];
    const tabContents = [];

    React.Children.forEach(children, (child, index) => {
      const name = child.props.name || (index + 1).toString();
      const isActive = name === currentName;
      const canClose = (isCard && (closable || editable)) || child.props.closable;

      // Clone for tab button
      tabButtons.push(
        React.cloneElement(child, {
          key: `tab-${name}`,
          name: name,
          isActive: isActive,
          closable: canClose,
          disabled: child.props.disabled,
          renderAs: 'button',
          onClick: (tab) => this.handleTabClick(tab, name),
          onRemove: (name, e) => this.handleTabRemove(name, e)
        })
      );

      // Clone for content
      tabContents.push(
        React.cloneElement(child, {
          key: `content-${name}`,
          name: name,
          isActive: isActive,
          closable: canClose,
          disabled: child.props.disabled,
          renderAs: 'content',
          onClick: (tab) => this.handleTabClick(tab, name),
          onRemove: (name, e) => this.handleTabRemove(name, e)
        })
      );
    });

    const showAddButton = isCard && (addable || editable);

    return (
      <div className={this.classNames('el-tabs', `el-tabs--${type || 'default'}`)}>
        <div className="el-tabs__header">
          <div className="el-tabs__nav-wrap">
            <div className="el-tabs__nav-scroll">
              <div className="el-tabs__nav">
                {tabButtons}
                {showAddButton && (
                  <span className="el-tabs__new-tab" onClick={() => this.handleTabAdd()}>
                    <i className="el-icon-plus" />
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="el-tabs__content">
          {tabContents}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  type: PropTypes.oneOf(['card', 'border-card']),
  activeName: PropTypes.string,
  value: PropTypes.string,
  closable: PropTypes.bool,
  addable: PropTypes.bool,
  editable: PropTypes.bool,
  onTabClick: PropTypes.func,
  onTabRemove: PropTypes.func,
  onTabAdd: PropTypes.func,
  onTabEdit: PropTypes.func
};
