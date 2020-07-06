import {shallow} from 'enzyme'
import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'
import toJSON from 'enzyme-to-json'//serializer

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(toJSON(wrapper)).toMatchSnapshot();
})