import {shallow} from 'enzyme'
import React from 'react';
import {ExpenseList} from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'
import toJSON from 'enzyme-to-json'//serializer


test('should render ExpenseList with expenses correctly', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render ExpenseList without expenses correctly', () => {
    const empty = []
    const wrapper = shallow(<ExpenseList expenses={empty}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})
