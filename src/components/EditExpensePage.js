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
      <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit}
      />
      <button onClick={this.onRemove}>Remove</button>
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
