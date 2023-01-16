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
            const item = wrapper.find('NotificationItem');
            assert.equal(item.length, 3);
        });
      });

      describe('Notifications renders the text Here is the list of notifications', () => {
        it('Notifications renders the text Here is the list of notifications', function(){
            const wrapper = shallow(<Notifications />);
            const p = wrapper.find('p');
            assert.equal(p.text(), 'Here is the list of notifications');
        });
      });

      describe('first NotificationItem element renders the right html', () => {
        it('first NotificationItem element renders the right html', function(){
            const wrapper = shallow(<Notifications />);
            const item = wrapper.find('NotificationItem');
            assert.equal(item.first().props().value, 'New course available');
        });
      });



  });