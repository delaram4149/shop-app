export const initState = {
    count : 0,
}

export const reducerr =(state, action)=>{
switch (action.type) {
    case "increase":
        return {count : state.count+1}
        case "decrease":
            return {count : state.count-1}
            case "reset":
                return  initState
        case "increase  + 5" :
            return {count : state.count + action.payload}

    default:
        return "error"
}
}