import filtersRecuder from '../../reducers/filters'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set up default filters value', ()=> {
    const state = filtersRecuder(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set up sortBy to amount value', ()=> {
    const state = filtersRecuder(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set up sortBy to date value', ()=> {
    const current = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersRecuder(current, {type: 'SORT_BY_DATE'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set up set textfilter value', ()=> {
    const state = filtersRecuder(undefined, {type: 'SET_TEXT_FILTER', text: 'Man prata kosong satu'})
    expect(state).toEqual({
        text: 'Man prata kosong satu',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set up startDate filter value', ()=> {
    const start = moment()
    const action = {
        type: 'SET_START_DATE', 
        startDate : start
    }
    const state = filtersRecuder(undefined, action)
    expect(state.startDate).toEqual(start)
})

test('should set up endDate filter value', ()=> {
    const end = moment()
    const action = {
        type: 'SET_END_DATE', 
        endDate: end
    }
    const state = filtersRecuder(undefined, action)
    expect(state.endDate).toEqual(end)
})
