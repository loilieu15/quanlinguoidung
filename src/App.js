import React, { Component } from 'react';
import './App.css';
import AddUser from './components/AddUser';
import Search from './components/Search';
import TableUser from './components/TableUser';
import EditUser from './components/EditUser';
import {connect} from 'react-redux';
import AleartNoti from './AleartNoti';

class App extends Component {

  renderAddUserForm = () => {
    let {statusAdd} = this.props;
    if(statusAdd) {
      return <AddUser />
    }
  }
  renderButtonAddUser = () => {
    let {statusAdd} = this.props;
    if(statusAdd) {
      return <div className="btn btn-danger" onClick={() => this.props.changeStatusAdd()}>Hủy thêm</div>
    } else {
      return <div className="btn btn-primary" onClick={() => this.props.changeStatusAdd()}>Thêm người dùng</div>
    }
  }

  renderEditUserForm = () => {
    if(this.props.statusEdit) {
      return <EditUser />
    }
  }

  render() {
    return (
      <div className="container">
        <AleartNoti />
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h3 className="display-4 text-center">Quản lí người dùng</h3>
          </div>
        </div>
        <div className="row mb-4">
          <Search />
          <div className="col-3">
            { this.renderButtonAddUser() }            
          </div>
        </div>
        <div className="row">
          <TableUser />
          { this.renderEditUserForm() }
          { this.renderAddUserForm() }
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
      statusAdd: state.statusAdd.statusAdd,
      statusEdit: state.editUser.statusEdit
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeStatusAdd:() => dispatch({type: "CHANGE_STATUS_ADD"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);