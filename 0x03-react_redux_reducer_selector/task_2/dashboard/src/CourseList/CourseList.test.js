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

    it('renders correctly if you pass an empty array', function(){
        const wrapper = shallow(<CourseList listCourses ={[]} />);
        const CourseListRow  = wrapper.find('CourseListRow');
        assert.equal(CourseListRow.length, 3);


    });

    it('verify that when you pass a list of courses, the component renders it correctly', function(){
        const wrapper = shallow(<CourseList listCourses ={[{ id: 1, name: 'test1', credit: 42 },{ id: 2, name: 'test2', credit: 7 }]} />);
        const CourseListRow  = wrapper.find('CourseListRow');
        assert.equal(CourseListRow.length, 4);

    });


  });