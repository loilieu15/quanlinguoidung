const initialState = {
    statusAdd: false
}

const StatusAddReducer = (state = initialState, action) => {
    switch (action.type) {
    case "CHANGE_STATUS_ADD":
        return {...state, statusAdd: !state.statusAdd}
        
    default:
        return state
    }
}
export default StatusAddReducer;