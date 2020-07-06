import moment from 'moment';
import selectExpenses from '../../selectors/expenses'

const expenses = [{
    id: '1',
    description: 'Nasi Goreng',
    note: 'My lunch',
    amount: '5000',
    createdAt: 0
},{
    id: '2',
    description: 'Beef Fried Rice',
    note: 'My lunch',
    amount: '5500',
    createdAt: moment(0).subtract(4,'days').valueOf()
},{
    id: '3',
    description: 'Kopi Peng',
    note: 'Drinks',
    amount: '1600',
    createdAt:  moment(0).add(4,'days').valueOf()
}]

test('should filter by text value', () => {
    const filters = {
        text: 'o',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses,filters)
    expect(result).toEqual([
        expenses[2],
        expenses[0]
    ])
})

test('should filter by start date value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses,filters)
    expect(result).toEqual([
        expenses[2],
        expenses[0]
    ])
})

test('should filter by end date value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2,'days')
    }
    const result = selectExpenses(expenses,filters)
    expect(result).toEqual([
        expenses[0],
        expenses[1]
    ])
})

test('should filter by sortBy amount value', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses,filters)
    expect(result).toEqual([
        expenses[1],
        expenses[0],
        expenses[2]
    ])
})

test('should filter by sortBy date value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses,filters)
    expect(result).toEqual([
        expenses[2],
        expenses[0],
        expenses[1]
    ])
})