import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import { assert } from 'chai';

const markAsAread = {
    type: 'MARK_AS_READ',
    index: 1 
}
const setNotificationFilter = {
    type: 'SET_TYPE_FILTER',
    index: 1
}
describe('Tests notificationActionCreators', () => {
    it('tests markAsAread action', function(){
      assert.equal(markAsAread(1), markAsAread)
    });
    it('tests setNotificationFilter action', function(){
        assert.equal(setNotificationFilter(1), setNotificationFilter)
      });
  });