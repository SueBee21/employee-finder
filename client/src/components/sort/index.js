import React from "react";
import Table from "../table/index"

const Sort = () => {
    return (
    Table.employeeData(function(a, b) {
        if (a.employee.name.last < b.employee.name.last) { return -1; }
        if (a.employee.name.last > b.employee.name.last) { return 1; }
        return 0;
    })

    )}
export default Sort;