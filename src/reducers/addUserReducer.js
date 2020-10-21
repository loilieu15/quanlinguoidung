const initialState = {
    dataUserItem: null
}
const AddUserReducer = (state = initialState, action) => {
    switch (action.type) {
    case "ADD_USER":
        return { ...state, dataUserItem: action.dataUserItem}
    case "ADDED_USER":
        return {...state, dataUserItem: null}
    default:
        return state
    }
}

export default AddUserReducer;