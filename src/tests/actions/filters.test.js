import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';
import moment from 'moment'

test('should generate set start date action object',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object',()=>{
    const action = setEndDate(moment(100));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(100)
    })
})

test('should generate set text filter action object',()=>{
    const action = setTextFilter('Prate set $6');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Prate set $6'
    })
})

test('should generate set text filter action object with default',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})


test('should generate set sortByDate action object',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should generate set sortByAmount action object',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})
