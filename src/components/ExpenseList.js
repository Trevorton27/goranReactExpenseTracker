import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseRow from './ExpenseRow';

const ExpenseList = ({ expenses, deleteRow }) => {
  return (
    <div className='container'>
      <table className='table table-striped table-hover text-center mt-5'>
        <thead className='table-secondary'>
          <tr>
            <th>Location</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody className='table'>
          <ExpenseRow expenses={expenses} deleteRow={deleteRow} />
        </tbody>
      </table>
    </div>
  );
};
export default ExpenseList;
