import { assert, expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import BodySection  from './BodySection ';
import BodySectionWithMarginBottom   from './BodySectionWithMarginBottom ';
import { shallow } from 'enzyme';

describe('Tests BodySectionWithMarginBottom', () => {
      it('BodySectionWithMarginBottom renders without crashing', function(){
        const wrapper = shallow(<BodySectionWithMarginBottom title="test title"><p>test children node</p></BodySectionWithMarginBottom>)
        assert.equal(wrapper.length, 1);
    });




    it('render correctly the children and one h2 element', function(){
        const wrapper = shallow(<BodySectionWithMarginBottom title="test title"><p>test children node</p></BodySectionWithMarginBottom>)
        const bodySection = wrapper.find('.bodySection');
        const children = wrapper.find('p');

        assert.equal(bodySection.length, 1);
        assert.equal(children.length, 1);
        assert.equal(children.text(), 'test children node');


    });
    });