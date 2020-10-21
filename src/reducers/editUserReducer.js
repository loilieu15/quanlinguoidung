const initialState = {
    statusEdit: false,
    dataUserEdit: null,
    dataUserEdited: null
}

const EditUserReducer = (state = initialState, action) => {
    switch (action.type) {
    case "CHANGE_STATUS_EDIT_AND_GET_USER":
        return {...state, statusEdit: true, dataUserEdit: action.user}
    case "EDITED_USER":
        return { ...state, dataUserEdited: action.userEdited }
    case "CHANGE_STATUS_EDIT_CANCEL":
        return {...state, statusEdit: false, dataUserEdit: null, dataUserEdited: null}
    default:
        return state
    }
}

export default EditUserReducer;