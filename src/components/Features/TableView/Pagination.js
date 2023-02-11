import React from 'react'

import { styles } from './styles'

export default function Pagination({ currentPage, page, onPageChange, isDisabled }) {
    const { activePage, tablePaginationList, tablePaginationListNum, disabled } = styles;
    let paginationStyle = {}

    if(page === currentPage && isDisabled) {
        paginationStyle = Object.assign({}, activePage, disabled)
    }
    else if (page === currentPage && !isDisabled) {
        paginationStyle = Object.assign({}, activePage)
    }
    else if (page !== currentPage && isDisabled) {
        paginationStyle = Object.assign({}, tablePaginationListNum ,disabled)
    }
    else if (page !== currentPage && !isDisabled) {
        paginationStyle = Object.assign({}, tablePaginationListNum)
    }
    return (
        <li className="table-paginationList" style={tablePaginationList}>
            <span
                style={paginationStyle}
                onClick={() => !isDisabled ? onPageChange(page) : ""}>
                {page}
            </span>
        </li>
    )
}
