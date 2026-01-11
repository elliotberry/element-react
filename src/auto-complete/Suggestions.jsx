
import React from 'react';
import ReactDOM from 'react-dom';
import Popper from 'popper.js';
import { Component, PropTypes, Transition, View } from '../../libs';

import { Scrollbar } from '../scrollbar';

export default class Suggestions extends Component {
  render() {
    // Component implementation needed
    return <div className="el-autocomplete-suggestions">Suggestions</div>;
  }
}

Suggestions.propTypes = {
  suggestions: PropTypes.array,
  queryString: PropTypes.string,
  highlightFirstItem: PropTypes.bool,
  onSelect: PropTypes.func
};

