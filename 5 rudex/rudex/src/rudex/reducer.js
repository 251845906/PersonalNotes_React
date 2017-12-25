// const initialState = {
//     val:1
// };
// export default (state = initialState , action) => {
//     switch (action.type){
//         case 'INCREASE_CLICK':
//             return Object.assign({},state,{
//                 val:action.text
//             });
//         case 'REDUCED_CLICK':
//             return Object.assign({},state,{
//                 val:action.text
//             });
//         default:
//             return state
//     }
// }

const initialState = {
    value:1
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUTTON_CLICK_ADD':

            return Object.assign({}, state, {
                value:action.text
            });
        case 'BUTTON_CLICK_JIAN':
            return Object.assign({}, state, {
                value: action.text
            });
        default:
            return state;
    }
};

export default reducer;