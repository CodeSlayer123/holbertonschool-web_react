import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
const { bindActionCreators } = require('redux');


export function selectCourse(index){
    return {type: SELECT_COURSE, index: index}
}

export function unSelectCourse(index){
    return {type: UNSELECT_COURSE, index: index}

}
export function bound(){
    bindActionCreators({selectCourse, unSelectCourse}, dispatch)
}