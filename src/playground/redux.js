import{createStore} from 'redux'

const addCnt = ({incBy = 1} = {}) => ({
        type:'INCREMENT',
        incBy: typeof incBy === 'number'?incBy:1
})
const subCnt = ({decBy = 1}={}) => ({
    type:'DECREMENT',
    decBy: typeof decBy === 'number'?decBy:1
})
const resCnt = () => ({
    type:'RESET'
})
const setCnt = ({count}) => ({
    type:'SET',
    count: count
})

const cntReducer = (state = {count: 0},action) => {
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decBy
            };
        case 'SET':
            return{
                count: action.count
            };
        case 'RESET':
            return{
                count: 0
            };
        default:
            return state
    }
} 


const store = createStore(cntReducer);

const unsub = store.subscribe(()=>{
    console.log(store.getState())
});


store.dispatch(addCnt({incBy: 7}))

store.dispatch(subCnt({decBy: 5}))

store.dispatch(resCnt())

store.dispatch(setCnt({count: 100}))
