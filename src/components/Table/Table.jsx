import React from 'react';

function DataTable({ data }) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Category</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{item.label}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;