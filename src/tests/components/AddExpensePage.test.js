import {shallow} from 'enzyme'
import React from 'react';
import {AddExpensePage} from '../../components/AddExpensePage'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import toJSON from 'enzyme-to-json'//serializer
import moment from 'moment'

let addExpense,history,wrapper;

beforeEach(()=> {
    addExpense = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
})

test('should render AddExpensePage correctly', () => {
    
    expect(wrapper).toMatchSnapshot()

});

test('should render AddExpensePage correctly', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])

})