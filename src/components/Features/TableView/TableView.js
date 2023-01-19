import React, { useState } from 'react';

import '../../../styles/TableView.css';
import Pagination from './Pagination';
import { getPagesCut } from '../../utils/getPagesCut';
import Dropdown from '../../Dropdown/Dropdown';

export default function TableView(props) {
  const { datas, columns, setDatas, pagesCutCount, limit } = props;
  const [order, setOrder] = useState("asc");
  const listColumn = Object.keys(datas[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("");

  const total = datas.length;
  const indexOfLastData = currentPage * limit;
  const indexOfFirstData = indexOfLastData - limit;
  const currentDatas = datas.slice(indexOfFirstData, indexOfLastData);

  const range = (start, end) => {
    return [...Array(end - start).keys()].map((el) => el + start);
  };

  const sorting = (e, column) => {
    setActiveFilter(e.target.innerText);
    if (order === "asc") {
      const sorted = [...datas].sort((a, b) => {
        if (a[column].includes("/")) {
          return new Date(a[column]).getTime() - new Date(b[column]).getTime();
        }
        else return a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      }
      )
      setDatas(sorted);
      setOrder("dsc");
    }
    if (order === "dsc") {
      const sorted = [...datas].sort((a, b) => {
        if (a[column].includes("/")) {
          return new Date(b[column]).getTime() - new Date(a[column]).getTime();
        }
        else return a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
      })
      setDatas(sorted);
      setOrder("asc");
    }
  }

  const pagesCount = Math.ceil(total / limit);
  const pagesCut = getPagesCut({ pagesCount, pagesCutCount, currentPage });
  const pages = range(pagesCut.start, pagesCut.end);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;

  return (
    <div className="table-container">
      <Dropdown title="limit" datas={limit}/>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={column}>
                <button
                  className={`table-columnFilter ${columns[index] === activeFilter ? "activeFilter" : ""}`}
                  onClick={(e) => sorting(e, listColumn[index])}>
                  {column}
                </button>
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
        <p className="table-paginationText">
          Showing {indexOfFirstData + 1} to {indexOfLastData} of {datas.length} entries
        </p>
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
            onPageChange={() => setCurrentPage(pagesCount)}
            isDisabled={isLastPage}
          />
        </ul>
      </div>
    </div>
  )
}
TableView.defaultProps = {
  limit: "10",
  pagesCutCount: 5
}