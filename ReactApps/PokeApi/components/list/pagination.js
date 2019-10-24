import React from 'react';
import './pagination.css';

const Pagination = (props) => {
    const { page, totalPages, handlePaginationClick } = props;
    return (
        <div className="Pagination">
            <button
                className="pagination-button"
                onClick={() => handlePaginationClick('prev')}
                disabled={page <= 1}>Prev</button>
            <span></span>
            <button
                className="pagination-button"
                onClick={() => handlePaginationClick('next')}
                disabled={page >= totalPages}>Next</button>
        </div>
    )
}


export default Pagination;