import React, { Component } from 'react'
import ItemUser from './ItemUser'
import dataUserFirebase from '../firebase';
import { connect } from 'react-redux';

class TableUser extends Component {

    constructor (props) {
        super(props);
        this.state = {
            dataUser: []
        }
    }
    convertString = str => {
        str = str.toString().replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.toString().replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.toString().replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.toString().replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.toString().replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.toString().replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.toString().replace(/đ/g, "d");
        str = str.toString().replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.toString().replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.toString().replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.toString().replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.toString().replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.toString().replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.toString().replace(/Đ/g, "D");
        return str;
    }

    UNSAFE_componentWillMount() {
        dataUserFirebase.on('value', datas => {
            let arrayUser = []
            datas.forEach(data => {
                let key = data.key;
                let userName = data.val().userName;
                let phoneNum = data.val().phoneNum;
                let permission = data.val().permission;
                let itemUser = {
                    key,
                    userName,
                    phoneNum,
                    permission
                }
                arrayUser.push(itemUser);
            });
            this.setState({
                dataUser: arrayUser
            })
        })
    }
    renderUser = () => {
        let arrayTemp = [];
        this.state.dataUser.forEach(item => {
            let valueSearch = this.convertString(this.props.dataUserSearch.toLowerCase());
            if(this.convertString(item.userName.toLowerCase()).indexOf(valueSearch) !== -1 || item.phoneNum.toLowerCase().indexOf(valueSearch) !== -1) {
                arrayTemp.push(item)
            }
        })
        return arrayTemp.map((item, index) => {
            return <ItemUser 
                key={item.key}
                userName = {item.userName}
                phoneNum = {item.phoneNum}
                permission = {parseInt(item.permission)}
                stt = {index + 1}
                id={item.key}
                user={item}
            />
        })
    }
    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ tên</th>
                            <th>Số điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.renderUser()
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dataUserSearch: state.searchUser
    }
}

export default  connect(mapStateToProps)(TableUser);