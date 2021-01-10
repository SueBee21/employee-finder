import React from "react";

function Table(props) {
    return (
        <table className="table">
            <thead>
                <tr id="table-row">
                    <th scope="col">Picture</th>
                    <th scope="col" onClick={() => props.handleSort("first")}>First</th>
                    <th scope="col" onClick={() => props.handleSort("last")}>Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
                {props.employeeData.length > 0 ? props.employeeData.map(employee => {
                    return (
                        <tr id="employee-info">
                            <th scope="row"><img src={employee.picture.medium} alt="employee photo" /></th>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                        </tr>
                    )
                }) : <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>}

            </tbody>
        </table>
    );
};

export default Table;