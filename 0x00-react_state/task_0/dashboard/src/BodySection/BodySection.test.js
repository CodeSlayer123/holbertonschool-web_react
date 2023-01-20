import { assert, expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import BodySection  from './BodySection ';
import { shallow } from 'enzyme';

describe('Tests BodySection', () => {
      it('BodySection renders without crashing', function(){
        const wrapper = shallow(<BodySection title="test title"><p>test children node</p></BodySection>)
        assert.equal(wrapper.length, 1);
    });
    it('render correctly the children and one h2 element', function(){
        const wrapper = shallow(<BodySection title="test title"><p>test children node</p></BodySection>)
        const h2 = wrapper.find('h2');
        const children = wrapper.find('p');

        assert.equal(h2.length, 1);
        assert.equal(h2.text(), 'test title');
        assert.equal(children.length, 1);
        assert.equal(children.text(), 'test children node');


    });
    });