import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS} from '../actions/courseActionTypes';
const { Map, setIn } = require('immutable');
import { courseNormalizer } from '../schema/courses';


const initialState = Map([])
export default function courseReducer(state = initialState, action){

    switch (action.type) {
        case FETCH_COURSE_SUCCESS: {
          return state.merge(
            courseNormalizer(action.data)
            )
        }
        case SELECT_COURSE: {
            return Map(state).setIn(
            [(action.index).toString(),
                'isSelected'],true)
          }

        case UNSELECT_COURSE: {
            return Map(state).setIn(
                [(action.index).toString(),
                    'isSelected'],false)
        }




        default: {
            return state
        }
    }


}