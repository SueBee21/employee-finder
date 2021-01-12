import React from "react";
import Table from "../table/index"
import Api from "../../utils/api"

class Search extends React.Component {
    render() {
        return (
            <div className="input-group flex-nowrap">
                <input type="text" name="search" value={this.props.search} id="search-box" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="addon-wrapping" onChange={this.props.handleChange} />
            </div>
        )
    }
}

export default Search;