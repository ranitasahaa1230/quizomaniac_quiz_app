export const quizReducer=(quizState,action)=>{
    switch (action.type) {
        case "FILTER_BY_SEARCH":
            return { ...quizState, searchQuery: action.payload };
        default:
            return quizState;
    }
}