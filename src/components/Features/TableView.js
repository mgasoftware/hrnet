import React, { useState } from 'react';

import '../../styles/TableView.css';

export default function TableView(props) {
  const [order, setOrder] = useState("asc");
  const listColumn = Object.keys(props.datas[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const total = props.datas.length;
  const limit = 10;
  const indexOfLastData = currentPage * limit;
  const indexOfFirstData = indexOfLastData - limit;
  const currentDatas = props.datas.slice(indexOfFirstData, indexOfLastData);

  const range = (start, end) => {
    return [...Array(end).keys()].map((el) => el + start);
  };

  const sorting = (column) => {
    if (order === "asc") {
      const sorted = [...props.datas].sort((a, b) => {
        if (a[column].includes("/")) {
          return new Date(a[column]).getTime() - new Date(b[column]).getTime();
        }
        else return a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      }
      )
      props.setDatas(sorted);
      setOrder("dsc");
    }
    if (order === "dsc") {
      const sorted = [...props.datas].sort((a, b) => {
        if (a[column].includes("/")) {
          return new Date(b[column]).getTime() - new Date(a[column]).getTime() ;
        }
        else return a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
      })
      props.setDatas(sorted);
      setOrder("asc");
    }
  }

  const Pagination = ({ currentPage, page, onPageChange, isDisabled }) => {
    return (
      <li className="table-paginationList">
        <span className={`table-paginationListNum ${page === currentPage ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`} onClick={() => onPageChange(page)}>{page}</span>
      </li>
    )
  }
  const pagesCount = Math.ceil(total / limit);
  const pages = range(1, pagesCount);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pages.length;

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
        <ul className="table-paginationNav">
          <Pagination
            currentPage={currentPage}
            page="First"
            onPageChange={() => setCurrentPage(1)}
            isDisabled={isFirstPage}
          />
          <Pagination
            currentPage={currentPage}
            page="Prev"
            onPageChange={() => setCurrentPage(currentPage - 1)}
            isDisabled={isFirstPage}
          />
          {pages.map((page) => (
            <Pagination
              currentPage={currentPage}
              page={page}
              key={page}
              onPageChange={(page) => setCurrentPage(page)}
            />
          ))}
          <Pagination
            currentPage={currentPage}
            page="Next"
            onPageChange={() => setCurrentPage(currentPage + 1)}
            isDisabled={isLastPage}
          />
          <Pagination
            currentPage={currentPage}
            page="Last"
            onPageChange={() => setCurrentPage(pages.length)}
            isDisabled={isLastPage}
          />
        </ul>
      </div>
    </div>
  )
}
