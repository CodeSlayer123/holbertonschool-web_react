import {getCourses} from './courseSelector';
import { assert } from 'chai';

const initialState = Map({
    courses: [
        {name: 'ES6', credit: 60},
        {name: 'Webpack', credit: 20},
        {name: 'React', credit: 40}

    ],
})
describe('Tests Course Selector', () => {
    it('getCourses returns a list of the message entities within the reducer', function(){
        assert.equal(getCourses(initialState), initialState.get('getCourses'))
      });
  });