export const quizReducer=(quizState,action)=>{
    switch (action.type) {
        case "FILTER_BY_SEARCH":
            return { ...quizState, searchQuery: action.payload };
        default:
          throw new Error(`Unknown action type: ${action.type}`);
    }
}