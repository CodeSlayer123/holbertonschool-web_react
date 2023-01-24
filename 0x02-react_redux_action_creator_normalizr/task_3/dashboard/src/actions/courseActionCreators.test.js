import { selectCourse, unSelectCourse } from './courseActionCreators';
import { assert } from 'chai';

const select = {
    type: SELECT_COURSE,
    index: 1 
}
const unselect = {
    type: UNSELECT_COURSE,
    index: 1
}
describe('Tests courseActionCreators', () => {
    it('tests selectCourse action', function(){
      assert.equal(selectCourse(1), select)
    });
    it('tests unSelectCourse action', function(){
        assert.equal(unSelectCourse(1), unselect)
      });
  });