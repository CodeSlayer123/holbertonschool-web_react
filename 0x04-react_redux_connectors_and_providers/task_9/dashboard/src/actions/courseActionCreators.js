import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from './courseActionTypes';
const { bindActionCreators } = require('redux');
import { createAsyncThunk } from '@reduxjs/toolkit';


export function selectCourse(index){
    return {type: SELECT_COURSE, index: index}
}

export function unSelectCourse(index){
    return {type: UNSELECT_COURSE, index: index}

}
export function bound(){
    bindActionCreators({selectCourse, unSelectCourse}, dispatch)
}

export function setCourses(course){
    return {type: SET_COURSES, course: course}

}

export const fetchCourses = createAsyncThunk(
    'courses/fetchCourses',
    async(user, thunkAPI) => {
      const api = await fetch('../../dist/courses.json');
      const json = await api.json()
      if (json.success){
        thunkAPI.dispatch(setCourses(json))
      }
    }
  )