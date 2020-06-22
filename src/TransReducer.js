
const TransReducer = ((state, action) => {
    switch(action.type)
    {
        case "ADD": {
        return [action.payload, ...state]
    }

    // case "DELETE TRANSACTION":
    //     return {
    //       ...state,
    //       transactions: state.transactions.filter(transactions => transactions.id !== 
    //         action.payload)  
    //     }
    
    default:
        return state;
}
})
 export default TransReducer;