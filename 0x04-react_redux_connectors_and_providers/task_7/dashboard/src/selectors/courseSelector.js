import {valueSeq} from 'immutable'
function getCourses(state){
    return (state.get('courses')).valueSeq()
}

export {
    getCourses
}