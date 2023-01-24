import { assert } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import CourseListRow from './CourseListRow';

import { shallow } from 'enzyme';

describe('Tests CourseListRow', () => {

    describe('if true', () => {
        it('component renders one cell with colspan = 2 when textSecondCell does not exist', function(){
            const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' />);
            const th = wrapper.find('th');
            assert.equal(th.length, 1);
            assert.equal(th.prop('colSpan'), 2);

        });
        it('component renders two cells when textSecondCell is present', function(){
            const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell='test2' />);
            const th = wrapper.find('th');
            assert.equal(th.length, 2);
        });
      });

      describe('if false', () => {
        it(' component renders correctly two td elements within a tr element', function(){
            const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='test' textSecondCell='test2' />);
            const th = wrapper.find('th');
            const td = th.find('td');

            assert.equal(td.length, 2);
        });

      });


  });