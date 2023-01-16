import React, { useState } from 'react';

import '../../styles/TableView.css';

export default function TableView(props) {
  const [order, setOrder] = useState("asc");
  const listColumn = Object.keys(props.datas[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 10;
  const indexOfLastData = currentPage * limit;
  const indexOfFirstData = indexOfLastData - limit;
  const currentDatas = props.datas.slice(indexOfFirstData, indexOfLastData);

  const range = (start, end) => {
    return [...Array(end).keys()].map((el) => el + start);
  };

  const sorting = (column) => {
    if (order === "asc") {
      const sorted = [...props.datas].sort((a, b) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      )
      props.setDatas(sorted);
      setOrder("dsc");
    }
    if (order === "dsc") {
      const sorted = [...props.datas].sort((a, b) =>
        a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
      )
      props.setDatas(sorted);
      setOrder("asc");
    }
  }

  const Pagination = ({ currentPage, total, limit, onPageChange }) => {
    const pagesCount = Math.ceil(total / limit);
    const pages = range(1, pagesCount);
    return (
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="table-paginationList">
            <span className={`table-paginationListNum ${page === currentPage ? 'active' : ''}`} onClick={() => onPageChange(page)}>{page}</span>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {props.columns.map((column, index) => (
              <th key={column}>
                <button onClick={() => sorting(listColumn[index])}>{column}</button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentDatas.map((data, index) => (
            <tr key={index}>
              {Object.values(data).map((value, id) => (
                <td key={id}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-pagination">
        <p>Showing {indexOfFirstData + 1} to {indexOfLastData} of {props.datas.length} entries</p>
        <div className="table-paginationNav">
          <Pagination
            currentPage={currentPage}
            total={props.datas.length}
            limit={limit}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  )
}
