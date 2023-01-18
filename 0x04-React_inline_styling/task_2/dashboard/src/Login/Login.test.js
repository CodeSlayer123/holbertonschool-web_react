import { assert } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import { shallow } from 'enzyme';

describe('Tests login', () => {

      describe('App renders a div with the class App-body', () => {
        it(' App renders a div with the class App-body', function(){
            const wrapper = shallow(<Login />);
            const body = wrapper.find('.App-body');
            assert.equal(body.length, 1);
        });
      });

      describe('components renders 2 input tags and 2 label tags', () => {
        it('components renders 2 input tags and 2 label tags', function(){
            const wrapper = shallow(<Login />);
            const input  = wrapper.find('input');
            const label   = wrapper.find('label');

            assert.equal(input.length, 2);
            assert.equal(label.length, 2);

        });
      });




  });