const initialState = {
    alertAdd: false,
    alertDelete: false,
    alertEdit: false
}

const CheckAlert = (state = initialState, { type }) => {
    switch (type) {
    case "CHECK_ALERT_ADD":
        return { ...state, alertAdd: !state.alertAdd }
    case "CHECK_ALERT_EDIT":
        return { ...state, alertEdit: !state.alertEdit }
    case "CHECK_ALERT_DELETE":
        return { ...state, alertDelete: !state.alertDelete }
    default:
        return state
    }
}
export default CheckAlert;