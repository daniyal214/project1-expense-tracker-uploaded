import React, { createContext, useReducer } from "react"
import TransReducer from './TransReducer';





const initialTransaction = [
    {amount: 500, desc:'Cash'},
    {amount: -200, desc:'Bill'},
    
]

export const TransactionContext = createContext(initialTransaction);



export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransReducer, initialTransaction)

    function addTransaction(transObj){
        dispatch({
            type: "ADD",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        })
    }

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE TRANSACTION',
            payload: id
        })
    }


    return (
        <TransactionContext.Provider value={{
            transactions: state,
            deleteTransaction: deleteTransaction,
            addTransaction: addTransaction
        }
                   
        }>
            {children}
        </TransactionContext.Provider>
    )

}