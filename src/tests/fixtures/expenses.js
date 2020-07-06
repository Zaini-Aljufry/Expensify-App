import moment from 'moment'

export default [{
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