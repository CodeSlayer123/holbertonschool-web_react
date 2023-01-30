import {filterTypeSelected, getNotifications, getUnreadNotifications} from './notificationSelector';
import { assert } from 'chai';

const initialState = Map({
    notifications: [
        {id: 1, isRead: true, type: 'default', value: 'New course available'},
        {id: 2, isRead: false, type: 'urgent', value: 'New course available'}
    ],
    filter: 'DEFAULT'
})
describe('Tests Notification Selector', () => {
    it('filterTypeSelected works as expected', function(){
      assert.equal(filterTypeSelected(initialState), 'DEFAULT')
    });
    it('getNotifications returns a list of the message entities within the reducer', function(){
        assert.equal(getNotifications(initialState), initialState.get('notifications'))
      });
    it('getUnreadNotifications return a list of the message entities within the reducer', function(){
    assert.equal(getUnreadNotifications(initialState), initialState.get('notifications')[1])
    });
    
  });