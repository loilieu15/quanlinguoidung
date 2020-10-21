import AddUserReducer from './reducers/addUserReducer';
import DeleteUserReducer from './reducers/deleteUserReducer';
import SearchUserReducer from './reducers/searchUserReducer';
import StatusAddReducer from './reducers/statusAddReducer';
import EditUserReducer from './reducers/editUserReducer';
import dataUserFirebase from './firebase';
import CheckAlert from './reducers/alertNoti';

const redux = require('redux');

const allReducers = redux.combineReducers({
    addUser: AddUserReducer,
    deleteUser: DeleteUserReducer,
    searchUser: SearchUserReducer,
    statusAdd: StatusAddReducer,
    editUser: EditUserReducer,
    checkAlert: CheckAlert
})

const store = redux.createStore(allReducers);
store.subscribe(function () {
    if(store.getState().addUser.dataUserItem && store.getState().addUser.dataUserItem.userName !== '' && store.getState().addUser.dataUserItem.phoneNum !== '') {
        dataUserFirebase.push(store.getState().addUser.dataUserItem)
        store.dispatch({type: "ADDED_USER"})
        store.dispatch({type: "CHECK_ALERT_ADD"})
        setTimeout(() => {
            store.dispatch({type: "CHECK_ALERT_ADD"})
        }, 5000)
    }
    if(store.getState().deleteUser.deleteUser) {
        dataUserFirebase.child(store.getState().deleteUser.deleteUser).remove()
        store.dispatch({type: "DELETED_USER"})
        store.dispatch({type: "CHECK_ALERT_DELETE"})
        setTimeout(() => {
            store.dispatch({type: "CHECK_ALERT_DELETE"})
        }, 5000)
    }
    if(store.getState().editUser.dataUserEdited) {
        dataUserFirebase.child(store.getState().editUser.dataUserEdited.id).update(store.getState().editUser.dataUserEdited)
        store.dispatch({type: "CHANGE_STATUS_EDIT_CANCEL"})
        store.dispatch({type: "CHECK_ALERT_EDIT"})
        setTimeout(() => {
            store.dispatch({type: "CHECK_ALERT_EDIT"})
        }, 5000)
    }
})

export default store;