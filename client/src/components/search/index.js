import React from "react";
import Table from "../table/index"


class Search extends React.Component {
    handleChange() {
        var input, tableRow, sortHeading, i, tr;
        input = Table.document.getElemenyById("search-box").value;
        tableRow = Table.document.getElementById("table-row");
        sortHeading = Table.tableHead.getElementByTagName("th");
        tr = Table.document.getElementById("employee-info")

        for (i = 0; i < sortHeading.length; i++) {
            var txtValue = sortHeading.text;
            if (txtValue === input) {
                return (tr[i].display = "")
            }
            else {
                tr[i].display = "none"

            }
        }
    }
    render() {
        return (
            <div className="input-group flex-nowrap">
                <input type="text" id="search-box" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="addon-wrapping" onChange={this.handleChange} />
            </div>
        )
    }


}



export default Search;