import{createStore, combineReducers} from 'redux'
import{v4 as uuid} from 'uuid';

const expRedDefault = []
const filRedDefault = {
        text: '',
        sortBy: 'date',
        start: undefined,
        end: undefined
}

const expRed = (state = expRedDefault,action)=> {
    switch(action.type){
        case 'ADD':
            return [
                ...state,
                action.expense
            ];
        case 'EDIT':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    }
                }else {
                    return expense
                }
            })
        case 'REM':
            return state.filter(({id}) =>{
                return id!== action.id;
            })
        default:
            return state
    }

}

const filRed = (state = filRedDefault,action)=> {
    switch(action.type){
        case 'SET':
            return {
                ...state,
                text: action.text
            }
        case 'SORT':
            return {
                ...state,
                sortBy : action.sortBy
            }
        case 'START':
            return {
                ...state,
                start : action.start
            }
        case 'END':
            return {
                ...state,
                end : action.end
            }
        default:
            return state
    }

}

const addExp = ({
    desc = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: 'ADD',
    expense: {
        id: uuid(),
        desc,
        note,
        amount,
        createdAt
    }
})

const editExp = (id,updates)=> ({
    type: 'EDIT',
    id,
    updates
})

const remExp = ({id} = {}) =>({
    type: 'REM',
    id
})

const setText = (text = '') => ({
    type: 'SET',
    text

})

const sortBy = (sortBy = 'date') => ({
    type: "SORT",
    sortBy
})

const setStart = (start = undefined) => ({
    type: 'START',
    start
})
const setEnd = (end = undefined) => ({
    type: 'END',
    end
})

const getVisibleExp = (expenses, filters) => {

    return expenses.filter((expense) => {
        const start = typeof filters.start !== 'number' || expense.createdAt >= filters.start
        const end =  typeof filters.end !== 'number' || expense.createdAt <= filters.end
        const text = expense.desc.toLowerCase().includes(filters.text.toLowerCase())

        return start && end && text;
    }).sort((a,b)=> {
        if(filters.sortBy === 'date'){
            return a.createdAt< b.createdAt? 1:-1
        }else{
            return a.amount < b.amount? 1: -1
        }
    });
}

const store = createStore(
    combineReducers({
        expenses: expRed,
        filters: filRed
    })
)
const unsub = store.subscribe(()=> {
    const state = store.getState();
    const visibleExp = getVisibleExp(state.expenses,state.filters)
    console.log(visibleExp)
})

const exp1 = store.dispatch(addExp({desc: 'Rent', amount: 100, createdAt:1000 }))
const exp2 = store.dispatch(addExp({desc: 'Coffee', amount: 420, createdAt: -1900}))
// store.dispatch(remExp({id: exp1.expense.id }))

// store.dispatch(editExp(exp2.expense.id,{amount: 500}))

// store.dispatch(setText('e'));
// store.dispatch(setText(''));
store.dispatch(sortBy('amount'));
store.dispatch(sortBy());

// store.dispatch(setStart(125));
// store.dispatch(setEnd(155));





const demoState = {
    expenses:[{
        id: '0x1',
        desc: 'rent',
        note: 'last month',
        amount: 54500,
        createdAt: '0'
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        start: undefined,
        end: undefined
    }
};
