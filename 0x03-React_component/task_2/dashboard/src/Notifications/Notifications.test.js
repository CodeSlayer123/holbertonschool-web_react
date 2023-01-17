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

      describe('menu item is being displayed & div.Notifications is not being displayed when displayDrawer is false', () => {
        it('menu item is being displayed & div.Notifications is not being displayed when displayDrawer is false', function(){
            const wrapper = shallow(<Notifications displayDrawer={false} />);
            const menuItem = wrapper.find('.menuItem');
            const Notifications  = wrapper.find('.Notifications');

            assert.equal(menuItem.length, 1);
            assert.equal(Notifications.length, 0);

        });
      });
      describe('menu item is being displayed & div.Notifications is  being displayed when displayDrawer is true', () => {
        it('menu item is being displayed & div.Notifications is  being displayed when displayDrawer is true', function(){
            const wrapper = shallow(<Notifications displayDrawer={true} />);
            const menuItem = wrapper.find('.menuItem');
            const Notifications  = wrapper.find('.Notifications');

            assert.equal(menuItem.length, 1);
            assert.equal(Notifications.length, 1);

        });
      });

      describe('renders correctly if you pass an empty array', () => {
        it('renders correctly if you pass an empty array', function(){
            const wrapper = shallow(<Notifications listNotifications ={[]} />);
            const Notifications  = wrapper.find('.Notifications');
            const p = wrapper.find('p');
            assert.equal(Notifications.length, 1);
            assert.equal(p.text(), 'No new notification for now');


        });
      });

      describe('verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', () => {
        it('verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', function(){
            const wrapper = shallow(<Notifications listNotifications ={ [{ id: 1, type: 'default', value: 'test' }, { id: 2, html: { __html: 'test2' } }]} />);
            const NotificationItem  = wrapper.find('NotificationItem');
            assert.equal(NotificationItem.length, 2);

        });
      });


  });