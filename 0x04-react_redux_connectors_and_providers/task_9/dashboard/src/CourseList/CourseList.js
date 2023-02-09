import PropTypes from 'prop-types';
import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';
import { selectCourse, unSelectCourse, setCourses, fetchCourses } from '../actions/courseActionCreators';
import { connect } from 'react-redux';

const styles = StyleSheet.create({});
export default class CourseList extends React.Component {
  render() {

        return (
            <table id="CourseList">
                <thead>
                    <CourseListRow isHeader={true} textFirstCell="Available courses" />
                    <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell='Credit' />
                </thead>
                <tbody>
                    {this.props.listCourses.length == 0 &&
                        <CourseListRow isHeader={false} textFirstCell='No course available yet' />
                    }
                    {this.props.listCourses.length > 0 &&
                        this.props.listCourses.map(function(course){
                            <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
                        })
                    }




                    <CourseListRow isHeader={false} textFirstCell="ES6" textSecondCell='60' />
                    <CourseListRow isHeader={false} textFirstCell="Webpack" textSecondCell='20' />
                    <CourseListRow isHeader={false} textFirstCell="React" textSecondCell='40' />
                </tbody>
            </table>
          );

    }

    componentDidMount() {
        fetchCourses();
      }
}


CourseList.propTypes = {
    listCourses : PropTypes.arrayOf(CourseShape)
};

CourseList.defaultProps = {
    listCourses : []
};

export function onChangeRow(id, checked){
    if (checked === true){
        selectCourse(id)
    } else {
        unSelectCourse(id)
    }

}
  export const mapDispatchToProps = (dispatch) => {
    return {
        fetchCourses: () => dispatch(fetchCourses()),
        selectCourse: (courses) => dispatch(selectCourse(courses)),
        unSelectCourse: (courses) => dispatch(unSelectCourse(courses)),

    }
  }
  export const ConnectedCourseList = connect(mapDispatchToProps)(CourseList);