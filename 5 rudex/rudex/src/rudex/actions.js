export default {
    increaseClick:(text)=>{
        return{
            type:'INCREASE_CLICK',
            text
        }
    },
    reducedClick:(text)=>{
        return{
            type:'REDUCED_CLICK',
            text
        }
    }
}


// 接收dispatch传过来的方法