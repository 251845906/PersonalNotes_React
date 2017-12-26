let action = {
    increaseClick: function (text) {
        return {
            type: 'BUTTON_CLICK_ADD',
            text
        }
    },
    reducedClick:function(text){
        return {
            type: 'BUTTON_CLICK_JIAN',
            text
        }
    }
};
export default action
// 接收dispatch传过来的方法