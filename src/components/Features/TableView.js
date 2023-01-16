import React, { useState } from 'react';

import '../../styles/TableView.css';

export default function TableView(props) {
  const [order, setOrder] = useState("asc");
  let listColumn = Object.keys(props.datas[0]);
  console.log(listColumn)
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
          {props.datas.map((data, index) => (
            <tr key={index}>
              {Object.values(data).map((value, id) => (
                <td key={id}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
