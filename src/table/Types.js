// Type definitions for table components
// These are now just JSDoc-style comments for documentation

/**
 * @typedef {string | number} strOrNum
 */

/**
 * @typedef {Object} Column
 * @property {string} [type]
 * @property {string} [columnKey]
 * @property {string} [label]
 * @property {string} [prop]
 * @property {string} [property]
 * @property {number} [width]
 * @property {number} [minWidth]
 * @property {true|'left'|'right'} [fixed]
 * @property {Function} [render]
 * @property {Function} [renderHeader]
 * @property {boolean|'custom'} sortable
 * @property {Function} [sortMethod]
 * @property {boolean} resizable
 * @property {'left'|'center'|'right'} align
 * @property {'left'|'center'|'right'} headerAlign
 * @property {string} [className]
 * @property {string} [labelClassName]
 * @property {Function} [selectable]
 * @property {boolean} reserveSelection
 * @property {Array} [filters]
 * @property {string} [filterPlacement]
 * @property {boolean} filterMultiple
 * @property {Function} [filterMethod]
 * @property {Array|string|number} [filteredValue]
 * @property {Array<Column>} [subColumns]
 */

/**
 * @typedef {Object} _Column
 * @property {string} id
 * @property {string} [type]
 * @property {string} columnKey
 * @property {string} [label]
 * @property {string} [prop]
 * @property {string} [property]
 * @property {number} [width]
 * @property {number} [minWidth]
 * @property {true|'left'|'right'} [fixed]
 * @property {boolean|'custom'} sortable
 * @property {Function} [sortMethod]
 * @property {boolean} resizable
 * @property {boolean} showOverflowTooltip
 * @property {'left'|'center'|'right'} align
 * @property {'left'|'center'|'right'} headerAlign
 * @property {string} [className]
 * @property {string} [labelClassName]
 * @property {Function} [selectable]
 * @property {boolean} reserveSelection
 * @property {Array} [filters]
 * @property {string} [filterPlacement]
 * @property {boolean} filterMultiple
 * @property {Function} [filterMethod]
 * @property {Array|string|number} [filteredValue]
 * @property {Array<Column>} [subColumns]
 * @property {number} realWidth
 * @property {Function} render
 * @property {Function} renderHeader
 * @property {boolean} filterable
 * @property {boolean} filterOpened
 * @property {number} rowSpan
 * @property {number} colSpan
 * @property {number} level
 * @property {Array<_Column>} [subColumns]
 */

/**
 * @typedef {Object} TableStoreProps
 * @property {Object} [style]
 * @property {string} [className]
 * @property {Array<Object>} [data]
 * @property {Array<Column>} [columns]
 * @property {string|number} [height]
 * @property {string|number} [maxHeight]
 * @property {boolean} stripe
 * @property {boolean} border
 * @property {boolean} fit
 * @property {boolean} showHeader
 * @property {boolean} highlightCurrentRow
 * @property {string|number|Array} [currentRowKey]
 * @property {Function|string} [rowClassName]
 * @property {Function|Object} rowStyle
 * @property {Function|string} rowKey
 * @property {string} emptyText
 * @property {boolean} defaultExpandAll
 * @property {Array<number|string>} [expandRowKeys]
 * @property {Object} [defaultSort]
 * @property {'dark'|'light'} [tooltipEffect]
 * @property {boolean} showSummary
 * @property {string} sumText
 * @property {Function} [summaryMethod]
 */

/**
 * @typedef {Object} TableStoreState
 * @property {Array<Object>} sortedData
 * @property {Array<Object>} data
 * @property {Array<_Column>} fixedColumns
 * @property {Array<_Column>} rightFixedColumns
 * @property {Array<Array<_Column>>} columnRows
 * @property {Array<_Column>} columns
 * @property {boolean} isComplex
 * @property {boolean} defaultExpandAll
 */

/**
 * @typedef {Object} TableLayoutProps
 * @property {TableStoreState} tableStoreState
 * @property {Function} [renderExpanded]
 */

/**
 * @typedef {Object} TableLayoutState
 * @property {string|number} [height]
 * @property {number} gutterWidth
 * @property {number} [tableHeight]
 * @property {number} [headerHeight]
 * @property {number} [bodyHeight]
 * @property {number} [footerHeight]
 * @property {number} [fixedBodyHeight]
 * @property {number} [viewportHeight]
 * @property {boolean} [scrollX]
 * @property {boolean} [scrollY]
 */

/**
 * @typedef {Object} TableProps
 * @property {TableLayoutState} layout
 */

/**
 * @typedef {Object} TableState
 */

/**
 * @typedef {Object} TableHeaderProps
 * @property {true|'left'|'right'} fixed
 */

/**
 * @typedef {Object} TableBodyProps
 */

/**
 * @typedef {Object} TableFooterProps
 */

/**
 * @typedef {Object} FilterProps
 * @property {boolean} visible
 * @property {boolean} multiple
 * @property {Array<Object>} filters
 * @property {Array} filteredValue
 * @property {string} [filerPlacement]
 * @property {Function} onFilterChange
 * @property {Function} toggleFilter
 */

/**
 * @typedef {Object} FilterState
 * @property {Array} filteredValue
 */

// Export empty objects to maintain compatibility
export const Column = {};
export const _Column = {};
export const TableStoreProps = {};
export const TableStoreState = {};
export const TableLayoutProps = {};
export const TableLayoutState = {};
export const TableProps = {};
export const TableState = {};
export const TableHeaderProps = {};
export const TableBodyProps = {};
export const TableFooterProps = {};
export const FilterProps = {};
export const FilterState = {};
