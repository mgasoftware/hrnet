import React from 'react'

export default function Pagination({ currentPage, page, onPageChange, isDisabled }) {
    return (
        <li className="table-paginationList">
            <span className={`table-paginationListNum ${page === currentPage ? 'activePage' : ''} ${isDisabled ? 'disabled' : ''}`} onClick={() => onPageChange(page)}>{page}</span>
        </li>
    )
}