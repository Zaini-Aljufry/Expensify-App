import {shallow} from 'enzyme'
import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'
import toJSON from 'enzyme-to-json'//serializer


test('should render ExpenseListItem with expenses correctly', () => {
    const wrapper = shallow(<ExpenseListItem key={expenses[2].id}{...expenses[2]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})