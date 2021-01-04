import React from "react";
import Table from "../table/index"

function Search(props) {
    return (
        <div className="input-group flex-nowrap">
            <input type="text" id="search-box" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="addon-wrapping" onChange {this.handleChange}/>
        </div>
    );
}
function searchList() {
    var input, tableRow, sortHeading, i;
    input = Table.document.getElemenyById("search-box");
    tableRow = Table.document.getElementById("table-row");
    sortHeading = Table.tableHead.getElementByTagName("th");
    tr = Table.document.getElementById("employee-info")

    for (i = 0; i < sortHeading.length; i++) {
        var txtValue = sortHeading.text;
        if (txtValue == input) {
            return (tr[i].display = "")
        }
        else {tr[i].display = "none"

        }
    }
};


// function searchList() {
//     var input, filter, table, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }



export default Search;