import React from "react";

function DataTable({ data }) {
  return (
    <div>
      <div className="table">
        <table>
          <thead>
            <tr>
              {data.map((item, index) => (
                <th key={index}>{item.year} 年</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {data.map((item, index) => (
                <td key={index}>{item.value} 人</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
