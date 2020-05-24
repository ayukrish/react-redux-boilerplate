import React from 'react';
import PropTypes from 'prop-types';
import * as style from './pagination.scss';

const propTypes = {
  contentLength: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

const Pagination = ({
  contentLength, currentPage, limit, onChange
}) => {
  const showPagination = contentLength <= limit;
  return (
    <div className={`${style.pagination} flex`}>
      {showPagination && (
        <>
          <button
            type="button"
            id="prev"
            disabled={currentPage === 1}
            onClick={event => {
              event.stopPropagation();
              onChange(currentPage - 1);
            }}
          >
            Prev
          </button>
          <button
            type="button"
            id="next"
            disabled={contentLength < limit}
            onClick={event => {
              event.stopPropagation();
              onChange(currentPage + 1);
            }}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

Pagination.propTypes = propTypes;
// Pagination.defaultProps = defaultProps;
export default Pagination;
