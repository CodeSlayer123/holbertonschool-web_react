import { assert } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { shallow } from 'enzyme';

describe('Tests app', () => {
    describe('App renders without crashing', () => {
      it('App renders without crashing', function(){
        const wrapper = shallow(<App />);
        assert.equal(wrapper.length, 1);
    });
    });
    /*
    describe('App renders a div with the class App-header', () => {
        it('App renders a div with the class App-header', function(){
            const wrapper = shallow(<App />);
            const header = wrapper.find('.App-header');
            assert.equal(header.length, 1);
        });
      });

      describe('App renders a div with the class App-body', () => {
        it(' App renders a div with the class App-body', function(){
            const wrapper = shallow(<App />);
            const header = wrapper.find('.App-body');
            assert.equal(header.length, 1);
        });
      });

      describe('App renders a div with the class App-footer', () => {
        it(' App renders a div with the class App-body', function(){
            const wrapper = shallow(<App />);
            const header = wrapper.find('.App-footer');
            assert.equal(header.length, 1);
        });
      });
*/


  });