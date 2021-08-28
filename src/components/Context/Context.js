import React,{useReducer, createContext} from 'react'
import contextReducer from './contextReducer'

const initialState = JSON.parse(localStorage.getItem('transaction')) || [{amount: 500, category: 'Salary', type: 'Income', date: '2020-11-16', id: '44c68123-5b86-4cc8-b915-bb9e16cebe6a'}];
export const ExpenseTrackerContext = createContext(initialState) ;

export const Provider=({children})=>{
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Actions Creators
    const deleteTransaction = (id) =>{
        dispatch({type: 'DELETE_TRANSACTION', payload:id});
    }

    const addTransaction=(transaction) =>{
        dispatch({type:'ADD_TRANSACTION', payload:transaction});
    }

    const balance= transactions.reduce((acc, currVal)=>{
        return (currVal.type === 'Expense' ? acc - currVal.amount: acc + currVal.amount)
    }, 0)

    return(
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction, addTransaction, transactions, balance
        }}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}

