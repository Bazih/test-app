import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';
import "react-table/react-table.css";

class UsersList extends React.Component {

  renderEditable = cellInfo => {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={event => {
          this.props.updateData(cellInfo.index, cellInfo.column.id, event.target.innerHTML);
        }}
        dangerouslySetInnerHTML={{
          __html: cellInfo.row[cellInfo.column.id]
        }}
      />
    );
  };

  renderEditableSelect = cellInfo => {
    return (
      <select
        onChange={event => this.props.updateData(cellInfo.index, cellInfo.column.id, event.target.value)}
        value={cellInfo.row[cellInfo.column.id]}
        style={{ width: '100%' }}
      >
        <option value="male">мужской</option>
        <option value="female">женский</option>
      </select>
    );
  };

  render() {
    const columns = [
      {
        Header: "Имя",
        id: "firstName",
        Cell: this.renderEditable,
        accessor: d => d.firstName,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, {keys: ["firstName"]}),
        filterAll: true
      },
      {
        Header: "Фамилия",
        id: "lastName",
        Cell: this.renderEditable,
        accessor: d => d.lastName,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, {keys: ["lastName"]}),
        filterAll: true
      },
      {
        Header: "Телефон",
        id: "phone",
        Cell: this.renderEditable,
        accessor: d => d.phone,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, {keys: ["phone"]}),
        filterAll: true
      },
      {
        Header: "Email",
        id: "email",
        Cell: this.renderEditable,
        accessor: d => d.email,
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, {keys: ["email"]}),
        filterAll: true
      },
      {
        Header: "Пол",
        accessor: "gender",
        id: "gender",
        Cell: this.renderEditableSelect,
        filterMethod: (filter, rows) => {
          if (filter.value === "all") {
            return true;
          }
          if (filter.value === "true") {
            return rows["gender"] === 'male';
          }
          return rows["gender"] === 'female';
        },
        Filter: ({filter, onChange}) =>
          <select
            onChange={event => onChange(event.target.value)}
            style={{width: "100%"}}
            value={filter ? filter.value : "all"}
          >
            <option value="all">Все</option>
            <option value="true">мужской</option>
            <option value="false">женский</option>
          </select>
      }
    ];

    return (
      <div>
        <div className="text-center">
          <h3>Список пользователей</h3>
        </div>
        <ReactTable
          data={this.props.users}
          filterable
          columns={columns}
          showPagination={false}
          className="-striped -highlight"
          />
        </div>
    )
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UsersList;
