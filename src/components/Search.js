import React, { Component } from 'react';
import { connect } from 'react-redux';

class Search extends Component {

    inputSearch = e => {
        this.props.getDataSearch(e.target.value)
    }

    render() {
        return (
            <div className="col-4">
                <div className="form-group d-flex align-items-center m-0">
                    <input onChange={ e => this.inputSearch(e) } type="search" className="form-control" placeholder="Nhập họ tên, số điện thoại" />
                    <input type="submit" className="btn btn-primary" value="Tìm kiếm" />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDataSearch: dataUserSearch => dispatch({type: "SEARCH_USER", dataUserSearch})
    }
}

export default connect(null, mapDispatchToProps)(Search);