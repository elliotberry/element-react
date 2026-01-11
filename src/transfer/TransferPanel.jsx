import React from 'react';
import { Component, PropTypes, View } from '../../libs';
import Input from '../input';
import Checkbox from '../checkbox';
import i18n from '../locale';

export default class TransferPanel extends Component {
  render() {
    // Component implementation needed
    return <div className="el-transfer-panel">TransferPanel</div>;
  }
}

TransferPanel.propTypes = {
  data: PropTypes.array,
  renderContent: PropTypes.func,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  filterable: PropTypes.bool,
  format: PropTypes.object,
  filterMethod: PropTypes.func,
  defaultChecked: PropTypes.array,
  props: PropTypes.object
};

