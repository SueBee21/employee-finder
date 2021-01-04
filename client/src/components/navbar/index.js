import React from "react";
import Search from "../search"
function Navbar (props){
    return (
        <div>
            <h1>Employee Directory</h1>
            <p>Click on the carrots to sort by heading, or use the search box to narrow results.</p>
            <Search />
        </div>
    )
};
export default Navbar;