const initialState = {
    val:1,
    id:555,
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUTTON_CLICK_ADD':

            return Object.assign({}, state, {
                val:action.text[0],
                id:action.text[1]
            });
        case 'BUTTON_CLICK_JIAN':
            return Object.assign({}, state, {
                val:action.text[0],
                id:action.text[1]
            });
        default:
            return state;
    }
};

export default reducer;