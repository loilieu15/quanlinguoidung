import React, { Component } from 'react'
import { connect } from 'react-redux';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            phoneNum: '',
            permission: ''
        }
    }
    getInputData = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    pushDataUser = (data) => {
        if(data.permission === '') {
            data.permission = '2'
        }
        this.props.addUserData(data);
        this.setState({
            userName: '',
            phoneNum: '',
            permission: ''
        })
    }

    render() {
        return (
            <div className="col-3">
                <div className="card">
                    <div className="form-group p-4 m-0">
                        <form>
                            <input onChange={e => this.getInputData(e)} name="userName" type="text" className="form-control" placeholder="Tên người dùng" />
                            <input onChange={e => this.getInputData(e)} name="phoneNum" type="number" className="form-control" placeholder="Số điện thoại" />
                            <div className="form-group">
                            <select onChange={e => this.getInputData(e)} name="permission" className="form-control">
                                <option value={2}>Người sử dụng</option>
                                <option value={1}>Người kiểm duyệt</option>
                                <option value={0}>Người quản trị</option>
                            </select>
                            </div>
                            <input type="reset" onClick={ () => this.pushDataUser(this.state) } className="btn btn-primary" value="Thêm" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUserData: dataUserItem => { dispatch({ type: "ADD_USER", dataUserItem }) }
    }
}

export default connect(null, mapDispatchToProps)(AddUser);