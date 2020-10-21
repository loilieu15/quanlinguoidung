import { Alert, AlertContainer } from "react-bs-notifier";
import React, { Component } from 'react'
import { connect } from "react-redux";

class AleartNoti extends Component {

    renderAlertAdd = () => {
        if(this.props.checkAdd) {
            return <Alert type="success" timeout={5000}>Thêm người dùng thành công!</Alert>
        }
    }
    renderAlertEdit = () => {
        if(this.props.checkEdit) {
            return <Alert type="info">Chỉnh sửa thông tin người dùng thành công!</Alert>
        }
    }
    renderAlertDelete = () => {
        if(this.props.checkDelete) {
            return <Alert type="danger">Xóa người dùng thành công!</Alert>
        }
    }

    render() {
        return (
            <AlertContainer>
                { this.renderAlertAdd() }
                { this.renderAlertEdit() }
                { this.renderAlertDelete() }
            </AlertContainer>
        )
    }
}

const mapStateToProps = state => {
    return {
        checkAdd: state.checkAlert.alertAdd,
        checkEdit: state.checkAlert.alertEdit,
        checkDelete: state.checkAlert.alertDelete
    }
}
export default connect(mapStateToProps)(AleartNoti);