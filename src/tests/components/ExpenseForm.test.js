import {shallow} from 'enzyme'
import React from 'react';
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
import toJSON from 'enzyme-to-json'//serializer
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render ExpenseForm with expense data correctly', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should render error  for invalid ExpenseForm submission', () => {
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('form').simulate('submit',
    {
        preventDefault: ()=>{ }
    })
    expect(wrapper.state("error").length).toBeGreaterThan(0)
})

test('should set description upon input change', () => {
    const value = 'new description'
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} />)
    wrapper.find('input').at(0).simulate('change',
    {
        target: {value}
    })
    expect(wrapper.state("description")).toBe(value)
})

test('should set note upon textarea change', () => {
    const value = 'new description'
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} />)
    wrapper.find('textarea').simulate('change',
    {
        target: {value}
    })
    expect(wrapper.state("note")).toBe(value)
})

test('should set amount upon input change', () => {
    const value = "6545.00"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',
    {
        target: {value}
    })
    expect(wrapper.state("amount")).toBe(value)
})

test('should not set amount upon invalid input change', () => {
    const value = "6545.010"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',
    {
        target: {value}
    })
    expect(wrapper.state("amount")).toBe('')
})

test('should call onSubmit prop for valid form change', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit',
    {
        preventDefault: ()=>{ }
    })
    expect(wrapper.state("error")).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        note: expenses[0].note,
        amount: parseInt(expenses[0].amount),
        createdAt: expenses[0].createdAt
    });
})

test('should call onDateChange prop', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calender focus  on Change prop', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});
