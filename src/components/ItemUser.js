import React, { Component } from "react";
import { connect } from "react-redux";

class ItemUser extends Component {
  render() {
    return (
      <tr>
        <td>{ this.props.stt }</td>
        <td>{ this.props.userName }</td>
        <td>{ this.props.phoneNum }</td>
        <td>{ this.props.permission === 0 ? 'Người quản trị' : this.props.permission === 1 ? 'Người kiểm duyệt' : 'Người sử dụng' }</td>
        <td>
          <div className="form-group btn-group m-0">
            <div className="btn btn-info" onClick={() => this.props.changeStatusEdit(this.props.user)}>Sửa</div>
            <div className="btn btn-warning" onClick={ () => this.props.deleteUser(this.props.id) }>Xóa</div>
          </div>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
    return {
        changeStatusEdit:(user) => dispatch({type: "CHANGE_STATUS_EDIT_AND_GET_USER", user}),
        deleteUser: (user) => dispatch({type: "DELETE_USER", user})
    }
}
export default connect(null, mapDispatchToProps)(ItemUser);