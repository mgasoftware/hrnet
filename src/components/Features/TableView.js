import React, { useState } from 'react';

import '../../styles/TableView.css';

export default function TableView(props) {
  const {datas, columns, setDatas, pagesCutCount, limit} = props
  const [order, setOrder] = useState("asc");
  const listColumn = Object.keys(props.datas[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("");

  const newPagesCutCount = props.pagesCutCount;
  const total = props.datas.length;
  const indexOfLastData = currentPage * props.limit;
  const indexOfFirstData = indexOfLastData - props.limit;
  const currentDatas = props.datas.slice(indexOfFirstData, indexOfLastData);

  const range = (start, end) => {
    return [...Array(end - start).keys()].map((el) => el + start);
  };

  const sorting = (e, column) => {
    setActiveFilter(e.target.innerText);
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
        <span className={`table-paginationListNum ${page === currentPage ? 'activePage' : ''} ${isDisabled ? 'disabled' : ''}`} onClick={() => onPageChange(page)}>{page}</span>
      </li>
    )
  }

  const pagesCount = Math.ceil(total / props.limit);

  const getPagesCut = ({pagesCount, pagesCutCount, currentPage}) => {
    const ceilling = Math.ceil(pagesCutCount / 2);
    const floor = Math.floor(pagesCutCount / 2);

    if(pagesCount < pagesCutCount) {
      return {start: 1, end: pagesCount + 1}
    } else if (currentPage >= 1 && currentPage <= ceilling) {
      return {start: 1, end: pagesCutCount + 1}
    } else if (currentPage + floor >= pagesCount) {
      return {start: pagesCount - pagesCutCount + 1, end: pagesCount + 1}
    } else {
      return {start: currentPage - ceilling + 1, end: currentPage + floor + 1}
    }
  }

  const pagesCut = getPagesCut({pagesCount, pagesCutCount: newPagesCutCount, currentPage});
  const pages = range(pagesCut.start, pagesCut.end);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {props.columns.map((column, index) => (
              <th key={column}>
                <button className={`table-columnFilter ${props.columns[index] === activeFilter ? "activeFilter" : ""}`} onClick={(e) => sorting(e, listColumn[index])}>{column}</button>
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
        <p className="table-paginationText">Showing {indexOfFirstData + 1} to {indexOfLastData} of {props.datas.length} entries</p>
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