export const quizReducer=(quizState,action)=>{
    console.log(action.payload);
    switch (action.type) {
        case "FILTER_BY_SEARCH":
            return { ...quizState, searchQuery: action.payload };
        default:
            return quizState;
    }
}