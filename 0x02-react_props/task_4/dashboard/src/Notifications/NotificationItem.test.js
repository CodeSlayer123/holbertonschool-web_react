import { assert } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import NotificationItem   from './NotificationItem ';
import { shallow } from 'enzyme';

describe('Tests Notifications ', () => {
    describe('Notifications renders without crashing', () => {
      it('Notifications renders without crashing', function(){
        const wrapper = shallow(<NotificationItem  />);
        assert.equal(noti.length, 1);


    });
    });
    describe('Notifications renders list items', () => {
        it('Notifications renders list items', function(){
            const wrapper = shallow(<NotificationItem type="default" value="test" />);
        
            assert.equal(wrapper.props().dataPriority,'default');
            assert.equal(wrapper.props().dataValue,'test');

        });
      });

      describe('Notifications renders list items w/ html', () => {
        it('Notifications renders list items w/ html', function(){
            const wrapper = shallow(
                <NotificationItem type="default" html={{ __html: '<u>test</u>' }} />
              );
              assert.equal(wrapper.props().dataPriority,'default');
              assert.equal(wrapper.props().dataValue,'test');

        });
      });



  });