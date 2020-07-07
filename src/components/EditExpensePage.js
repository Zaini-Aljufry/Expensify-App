import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { setEditExpense, setRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component{
  onSubmit =(expense)  => {
    this.props.setEditExpense(this.props.expense.id, expense);
    this.props.history.push('/dashboard');
  }
  onRemove = () => {
    this.props.setRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/dashboard');
  }
  render() {
    return(
      <div>
      <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Edit Expense</h1>
      </div>
      </div>
      <div className="content-container">
          <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
          />
          <button className="button button--sec" onClick={this.onRemove}>Remove Expense</button>
      </div>
    
    </div>
    )
  }
}


const mapDispatchToProps = (dispatch, props) =>({
  setEditExpense: (id,expense) => dispatch(setEditExpense(id,expense)),
  setRemoveExpense: (data) => dispatch(setRemoveExpense(data))
})


const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);



// const EditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm
//         expense={props.expense}
//         onSubmit={(expense) => {
//           props.dispatch(editExpense(props.expense.id, expense));
//           props.history.push('/');
//         }}
//       />
//       <button onClick={() => {
//         props.dispatch(removeExpense({ id: props.expense.id }));
//         props.history.push('/');
//       }}>Remove</button>
//     </div>
//   );
// };
