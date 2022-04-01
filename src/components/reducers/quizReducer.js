export const quizReducer=(quizState,action)=>{
    console.log(action.payload);
    switch (action.type) {
        case "SELECT_CATEGORY":
            return {...quizState,[action.payload]:action.payload.value}
        default:
            return quizState;
    }
}