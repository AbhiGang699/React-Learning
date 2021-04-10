import React, { Component } from "react";
class TableHeader extends Component {
  raiseSort = (feild) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path == feild)
      sortColumn.order = sortColumn.order == "asc" ? "desc" : "asc";
    else {
      sortColumn.path = feild;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((ele) => (
            <th
              style={{ cursor: "pointer" }}
              key={ele.path || ele.key}
              onClick={() => this.raiseSort(ele.path)}
            >
              {ele.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
