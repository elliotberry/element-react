
import React from 'react';
import { Component, PropTypes } from '../../libs';
import Pager from './Pager';
import Select from '../select';
import locale from '../locale';

const Pre = props => {
  const disabled = props.internalCurrentPage <= 1 ? 'disabled' : '';
  return (
    <button type="button" className={`btn-prev ${disabled}`} onClick={props.prev}>
      <i className="el-icon el-icon-arrow-left" />
    </button>
  );
};

const Next = props => {
  const disabled = props.internalCurrentPage === props.internalPageCount ||
    props.internalPageCount === 0
    ? 'disabled'
    : '';

  return (
    <button type="button" className={`btn-next ${disabled}`} onClick={props.next}>
      <i className="el-icon el-icon-arrow-right" />
    </button>
  );
};

class Sizes extends Component {
  render() {
    const { onSizeChange, internalPageSize } = this.props;

    return (
      <span className="el-pagination__sizes">
        <Select
          size="small"
          value={internalPageSize}
          onChange={onSizeChange}
          width={110}
        >
          {this.props.pageSizes.map((item, idx) => {
            return (
              <Select.Option
                key={idx}
                value={item}
                label={item + ' ' + locale.t('el.pagination.pagesize')}
              />
            );
          })}
        </Select>
      </span>
    );
  }
}

const Total = props => {
  return typeof props.total === 'number'
    ? <span className="el-pagination__total">
        {locale.t('el.pagination.total', { total: props.total })}
      </span>
    : <span />;
};

class Jumper extends Component {
  handleChange({ target }) {
    const { jumper } = this.props;
    jumper(target.value);
  }

  handleFocus() {}

  render() {
    return (
      <span className="el-pagination__jump">
        {locale.t('el.pagination.goto')}
        <input
          className="el-pagination__editor"
          type="number"
          min={1}
          max={this.props.internalPageCount}
          defaultValue={this.props.internalCurrentPage}
          onBlur={this.handleChange.bind(this)}
          onKeyUp={e => {
            if (e.keyCode == 13) {
              this.handleChange(e);
            }
          }}
          onFocus={this.handleFocus.bind(this)}
          style={{ width: '30px' }}
        />
        {locale.t('el.pagination.pageClassifier')}
      </span>
    );
  }
}


Pagination.defaultProps = {
  small: false,
  pageSize: 10,
  currentPage: 1,
  layout: 'prev, pager, next, jumper, ->, total',
  pageSizes: [10, 20, 30, 40, 50, 100]
};
