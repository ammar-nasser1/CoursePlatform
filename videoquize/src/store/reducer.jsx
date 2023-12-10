const INTIAL_STATE = {
    quizes: [],
    showQuiz: false,
}
export default (state = INTIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_QUIZES':
            return {
                ...state,
                quizes: action.payload
            }
        case 'SET_SHOWQUIZ':
            return {
                ...state,
                showQuiz: action.payload
            }
        default:
            return state
    }
}