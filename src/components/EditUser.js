import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            userName: null,
            phoneNum: null,
            permission: null
        }
    }
    UNSAFE_componentWillMount() {
        this.setState({
            id: this.props.dataUserEdit.key,
            userName: this.props.dataUserEdit.userName,
            phoneNum: this.props.dataUserEdit.phoneNum,
            permission: this.props.dataUserEdit.permission
        })
    }

    editUserFunc = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="col-3">
                <div className="card">
                    <div className="form-group p-4 m-0">
                        <form>
                            <input onChange={ e => this.editUserFunc(e) } name="userName" defaultValue={this.props.dataUserEdit.userName} type="text" className="form-control" placeholder="Tên người dùng" />
                            <input onChange={ e => this.editUserFunc(e) } name="phoneNum" defaultValue={this.props.dataUserEdit.phoneNum} type="text" className="form-control" placeholder="Số điện thoại" />
                            <div className="form-group">
                            <select onChange={ e => this.editUserFunc(e) } name="permission" className="form-control" defaultValue={this.props.dataUserEdit.permission}>
                                <option value={2}>Người sử dụng</option>
                                <option value={1}>Người kiểm duyệt</option>
                                <option value={0}>Người quản trị</option>
                            </select>
                            </div>
                            <div className="d-flex">
                               <div className="btn btn-primary mr-2" onClick={() => this.props.updateUser(this.state)}>Cập nhật</div> 
                               <div className="btn btn-danger" onClick={ () => this.props.changeStatusEdit() }>Hủy</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        dataUserEdit: state.editUser.dataUserEdit
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeStatusEdit:() => dispatch({type: "CHANGE_STATUS_EDIT_CANCEL"}),
        updateUser: userEdited => dispatch({type: "EDITED_USER", userEdited})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditUser);