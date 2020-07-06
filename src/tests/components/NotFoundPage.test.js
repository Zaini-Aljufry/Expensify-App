import {shallow} from 'enzyme'
import React from 'react';
import NotFoundPage from '../../components/NotFoundPage'
import toJSON from 'enzyme-to-json'//serializer

test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(toJSON(wrapper)).toMatchSnapshot();
})