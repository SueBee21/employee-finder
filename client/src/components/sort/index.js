import React from "react";
import Table from "../table/index"

function Sort(props) {
    Table.employeeData.sort(function(a, b){
        if(a.employee.name.last < b.employee.name.last) { return -1; }
        if(a.employee.name.last > b.employee.name.last) { return 1; }
        return 0;
    })

    return (
        <Table />

    );
}
export default Sort;