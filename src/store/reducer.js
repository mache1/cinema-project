const initialState = {
    results: [],
    searchValue: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_RESULTS': return {
            ...state,
            results: action.value
        }
        case 'SET_SEARCH_VALUE': return {
            ...state,
            searchValue: action.value
        }
        default:
            return state;
    }
}

export default reducer;