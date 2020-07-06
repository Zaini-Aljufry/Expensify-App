import {shallow} from 'enzyme'
import React from 'react';
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters,altfilters} from '../fixtures/filters'
import toJSON from 'enzyme-to-json'//serializer
import moment from 'moment'
import { DateRangePicker } from 'react-dates';


let setStartDate,setEndDate,setTextFilter,sortByDate,sortByAmount,wrapper;

beforeEach(()=> {
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        filters={filters}
        // altfilters={altfilters}
        />
    )
})

test('should render ExpenseListFilters correctly', () => {
    
    expect(wrapper).toMatchSnapshot()

});

test('should render ExpenseListFilters with altFilters correctly', () => {
    wrapper.setProps({
        filters: altfilters
    })
    expect(wrapper).toMatchSnapshot()

});

test('should sort by date change', () => {
    wrapper.setProps({
        filters: altfilters
    })
    const value = 'date'
    wrapper.find('select').simulate('change', {
        target:{
            value
        }
    })
    expect(sortByDate).toHaveBeenCalled()

});

test('should sort by amount change', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target:{
            value
        }
    })
    expect(sortByAmount).toHaveBeenCalled()

});

test('should handle text change', () => {
    const value = 'peng'
    wrapper.find('input').simulate('change', {
        target:{
            value
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)

});

test('should handle date change', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find(DateRangePicker).prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)

});

// test('should handle date focus change', () => {
//     const calenderFocused = 'endDate'
//     wrapper.find(DateRangePicker).prop('onFocusChange')(calenderFocused)
//     expect(wrapper.state('calenderFocused')).toBe(calenderFocused)

// });
