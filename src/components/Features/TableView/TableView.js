import React, { useState } from 'react';
import PropTypes from "prop-types";

import '../../../styles/TableView.css';
import Pagination from './Pagination';
import { getPagesCut } from './getPagesCut';
import arrowup from '../../../assets/arrow-up.svg'
import arrowdown from '../../../assets/arrow-down.svg';

export default function TableView({ datas, columns, setDatas, pagesCutCount, limitChange, keys }) {
  const [order, setOrder] = useState("asc");
  const [limit, setLimit] = useState("10");
  const listColumn = Object.keys(datas[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState("");
  const [query, setQuery] = useState("");

  const search = (datas, query, keys) => {
    return datas.filter((data) => keys.some((key) => data[key].toLowerCase().includes(query)))
  }

  const total = search(datas, query, keys).length;
  const indexOfLastData = currentPage * limit;
  const indexOfFirstData = indexOfLastData - limit;
  const currentDatas = search(datas, query, keys).slice(indexOfFirstData, indexOfLastData);

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
      <div className="table-containerLimitSearch">
        <div className="table-containerLimit">
          <p>Show</p>
          <select name="limit" id="limit" className="table-containerSelect" onChange={(e) => setLimit(e.target.value)}>
            {limitChange.map((value, index) => (
              <option key={index} value={value}>{value}</option>
            ))}
          </select>
          <p>entries</p>
        </div>
        <input
          className="table-containerSearch"
          name="search"
          type="search"
          placeholder="Search...."
          onChange={(e) => setQuery(e.target.value.toLowerCase())} />
      </div>
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={column}>
                <button
                  className={`table-columnFilter ${columns[index] === activeFilter ? "activeFilter" : ""}`}
                  onClick={(e) => sorting(e, listColumn[index])}>
                  <p>{column}</p>
                  {columns[index] === activeFilter && (order === "asc" ? (<img className="table-arrow" src={arrowup} alt="arrow up" />) : (<img className="table-arrow" src={arrowdown} alt="arrow down" />))}
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
          Showing {indexOfFirstData + 1} to {indexOfLastData} of {search(datas, query, keys).length} entries
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
  limitChange: ["10", "25", "50", "100"],
  pagesCutCount: 5
}

TableView.propTypes = {
  datas: PropTypes.object.isRequired, 
  columns: PropTypes.array.isRequired, 
  setDatas: PropTypes.func.isRequired,
  keys: PropTypes.array.isRequired,
  pagesCutCount: PropTypes.number, 
  limitChange: PropTypes.array, 
}