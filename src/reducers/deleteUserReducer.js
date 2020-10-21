const initialState = {}
const DeleteUserReducer = (state = initialState, action) => {
    switch (action.type) {
    case "DELETE_USER":
        return { ...state, deleteUser: action.user }
    case "DELETED_USER":
        return { ...state, deleteUser: null}
    default:
        return state
    }
}

export default DeleteUserReducer;