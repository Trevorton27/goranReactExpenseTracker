import React from 'react';

const ExpenseRow = ({ expenses, deleteRow }) => {
  return expenses.map((expense) => (
    <tr key={expense.id}>
      <td class='align-middle'>{expense.location}</td>
      <td class='align-middle'>{expense.description}</td>
      <td class='align-middle'>${expense.amount}</td>
      <td class='align-middle'>{expense.date}</td>
      <td class='align-middle'>
        <button
          type='button'
          className='btn btn-outline-danger btn-sm'
          onClick={() => deleteRow(expense.id)}
        >
          {' '}
          X{' '}
        </button>
      </td>
    </tr>
  ));
};

export default ExpenseRow;
