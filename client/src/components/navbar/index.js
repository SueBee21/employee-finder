import React from "react";
import Search from "../search"
function Navbar(props) {
    return (
        <div>
            <h1>Employee Directory</h1>
            <p>Click on the "First" or "Last" to sort alphabetically by name, or use the search box to narrow results.</p>
            <Search search={props.search} handleChange={props.handleChange} />
        </div>
    )
};
export default Navbar;