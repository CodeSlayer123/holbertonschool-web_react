import { assert } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Notifications  from './Notifications';
import { shallow } from 'enzyme';

describe('Tests Notifications ', () => {
    describe('Notifications renders without crashing', () => {
      it('Notifications renders without crashing', function(){
        shallow(<Notifications />);

    });
    });
    describe('Notifications renders three list items', () => {
        it('Notifications renders three list items', function(){
            const wrapper = shallow(<Notifications  />);
            const header = wrapper.find('li');
            assert.equal(header.length, 3);
        });
      });

      describe('Notifications renders the text Here is the list of notifications', () => {
        it('Notifications renders the text Here is the list of notifications', function(){
            const wrapper = shallow(<Notifications />);
            const header = wrapper.find('p');
            expect(header.text()).toEqual('Here is the list of notifications');

        });
      });



  });