import React, { useContext, useState } from 'react';
import { TransactionContext } from './TransContext';
//import { map } from 'rxjs/operators';

function Child() {

    
    let {transactions, addTransaction} = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState("");
    const returnedArray = Array.from(transactions)

    const handleAddition = (event) => {
        event.preventDefault();
        console.log(newDesc, newAmount);
        
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });
        setDesc('');
        setAmount('')

        if (Number(newAmount) === 0)
            alert("PLEASE ENTER CORRECT VALUE!!")
            return false;
    
        
    }


    const getIncome = () =>{
        let income = 0;
        for (var i=0; i<transactions.length; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
        }
        return income;
    }

    const getExpense = () =>{
        let expense = 0;
        for (var i=0; i<transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (

      <div className='container'>
        <h1 className='text-centre'> Expense Tracker</h1>    

           <h2> <b> Your Balance</b> <br /> $ {getIncome() + getExpense()}</h2>

           <div className='expense-container'>
               <h3>INCOME <br /> ${getIncome()}</h3>
               <h3>EXPENSE <br /> ${getExpense()}</h3>
           </div>

        <h2> History </h2>
        <ul className='transaction-list'>
                
            {returnedArray.map((transObj, ind) =>{
                return ( 
                    <li key={ind}>
                <span>{transObj.desc}</span>
                <span>{transObj.amount}</span>
            </li>
                )
            })}
            
        </ul>
        

        <h2> Add New Transaction </h2>
        <hr />
        
        <form className='Enter'  onSubmit={handleAddition}>
            <label className='transaction-form'>
                <b> Enter Description</b> <br />
                <input type='text'
                onChange={(ev)=>setDesc(ev.target.value)} required
                placeholder='Enter detail of Transaction...' 
                value= {newDesc}
                /> <br />
            </label>

            <label className='transaction-form'>
                <b> Enter Amount (with '+' for Income and '-' for Expense)</b> <br />
                <input type='number'
                onChange={(ev)=>setAmount(ev.target.value)} required
                placeholder='Enter Transaction Amount...' 
                value= {newAmount}
                /> <br />
            </label>
            <input className='button' type="submit" value="Add Transaction"/> 
        </form>
            
      </div>
    );
  }

  export default Child;