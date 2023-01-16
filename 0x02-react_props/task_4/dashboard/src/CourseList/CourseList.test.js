import { assert } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import CourseList from './CourseList';

import { shallow } from 'enzyme';

describe('Tests CourseList', () => {

    it(' renders CourseList component without crashing', function(){
        const wrapper = shallow(<CourseList />);
        assert.equal(wrapper.length, 1);
    });

    it(' renders the 5 different rows', function(){
        const wrapper = shallow(<CourseList />);
        const CourseListRow = wrapper.find('CourseListRow');

        assert.equal(CourseListRow.length, 5);
    });



  });