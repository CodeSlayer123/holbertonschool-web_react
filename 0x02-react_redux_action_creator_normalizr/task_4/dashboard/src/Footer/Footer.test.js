import { assert } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('Tests footer', () => {


      describe('App renders a div with the class App-footer', () => {
        it(' App renders a div with the class App-body', function(){
            const wrapper = shallow(<Footer />);
            const footer = wrapper.find('.App-footer');
            assert.equal(footer.length, 1);
        });
      });

      describe('App renders a div with the class App-footer', () => {
        it(' App renders a div with the class App-body', function(){
            const wrapper = shallow(<Footer />);
            const copyright = wrapper.find('p');
            assert.startsWith(copyright.text(), 'Copyright');
        });
      });



  });