import expensesRecuder from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set up default state value', ()=> {
    const state = expensesRecuder(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id value', ()=> {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }

    const state = expensesRecuder(expenses, action)
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ])
})

test('should not remove expenses if id not found ', ()=> {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 545654
    }

    const state = expensesRecuder(expenses, action)
    expect(state).toEqual([
        expenses[0],
        expenses[1],
        expenses[2]
    ])
})

test('should add expense', ()=> {
    const action = {
        type: 'ADD_EXPENSE',
        id: '4',
        description: 'Fitness first membership',
        note: 'new gym',
        amount: '1600000',
        createdAt: 68459876
    }

    const state = expensesRecuder(expenses, action)
    expect(state).toEqual([
        expenses[0],
        expenses[1],
        expenses[2],
        expenses[3]
    ])
})

test('should edit expense', ()=> {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates:{
            description: 'Fitness first membership',
            note: 'new gym',
            amount: '1600000',
        }
    }

    const state = expensesRecuder(expenses, action)
    expect(state[2]).toEqual({
            id: expenses[2].id,
            description: 'Fitness first membership',
            note: 'new gym',
            amount: '1600000',
            createdAt: expenses[2].createdAt
    })
})

test('should not edit expense if id not found', ()=> {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 324324,
        updates:{
            description: 'Fitness first membership',
            note: 'new gym',
            amount: '1600000',
        }
    }

    const state = expensesRecuder(expenses, action)
    expect(state).toEqual(expenses)
})
