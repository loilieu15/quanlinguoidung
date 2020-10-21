const initialState = ''
const SearchUserReducer = (state = initialState, action) => {
    switch (action.type) {
    case "SEARCH_USER":
        return state = action.dataUserSearch;

    default:
        return state
    }
}

export default SearchUserReducer;