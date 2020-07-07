import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { setEditExpense, setRemoveExpense } from '../actions/expenses';
import {RemoveModal} from './RemoveModal'

export class EditExpensePage extends React.Component{

  state = {
    isModalOpen: false,
    modalBody: '',
    modalCancelText: '',
    modalConfirmHandle: undefined
  };

  onSubmit =(expense)  => {
    this.props.setEditExpense(this.props.expense.id, expense);
    this.props.history.push('/dashboard');
  }
  onRemove = () => {
    this.props.setRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/dashboard');
  }
  onRemoveModal = (expenses) =>{
    let modalParams = {
      modalBody: 'Are you sure you wanna delete this expense?',
      modalCancelText: 'Cancel',
      modalConfirmHandle: this.onRemove
    };
    this.setState( () => ( {
      ...modalParams,
      isModalOpen: true
    } ) );
  }
  closeRemoveModal = () => {
    this.setState( () => ( { isModalOpen: false } ) );
  };
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
          <button className="button button--sec" onClick={this.onRemoveModal}>Remove Expense</button>
          
      </div>
                <RemoveModal
                    showModal = { this.state.isModalOpen }
                    handleCloseModal = { this.closeRemoveModal }
                    handleConfirm = { this.state.modalConfirmHandle }
                    body={this.state.modalBody}
                    // confirmText={this.state.modalConfirmText}
                     cancelText={this.state.modalCancelText}
                />
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
