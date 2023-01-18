import { assert } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';

import { shallow } from 'enzyme';

describe('Tests Header', () => {
    
    describe('App renders a div with the class App-header', () => {
        it('App renders a div with the class App-header', function(){
            const wrapper = shallow(<Header />);
            const header = wrapper.find('.App-header');
            assert.equal(header.length, 1);
        });
      });

      describe('components render img and h1 tags', () => {
        it('components render img and h1 tags', function(){
            const wrapper = shallow(<Header />);
            const img = wrapper.find('img');
            const h1 = wrapper.find('h1');
            assert.equal(img.length, 1);
            assert.equal(h1.length, 1);

        });
      });


  });