import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import {onChangeRow} from './CourseList'
import { connect } from 'react-redux';

const styles = StyleSheet.create({

  tableHeader: {
    border: '2px solid #D3D3D3',
    },

  rowHeader1: {
    alignItems: 'left',
    paddingRight: '400px'
    },

  rowHeader2: {
    alignItems: 'left',
    paddingRight: '300px'
    },

  data1: {
    alignItems: 'left',
    paddingRight: '400px'
    },
  data2: {
    alignItems: 'left',
    paddingRight: '300px'
    },
  rowChecked: {
    backgroundColor: '#e6e4e4'

  }


});
const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
  
    const [checked, setChecked] = useState(false);

    if (isHeader) {
      if (textSecondCell) {
        return (
          <tr style={{ 'background-color': '#deb5b545'}}>
            <th className= {css(styles.rowHeader1)}>{textFirstCell}</th>
            <th className= {css(styles.rowHeader2)}>{textSecondCell}</th>
          </tr>
        );
      } else {
        return (
          <tr>
            <th className= {css(styles.tableHeader)} colSpan="2">{textFirstCell}</th>
          </tr> );
      }
    } else {
      return (
        <tr style={{ 'background-color': '#f5f5f5ab' }} className={checked ? css(styles.rowChecked) : ''}>

          <td className= {css(styles.data1)}>
            <input type="checkbox" checked={checked} onChange={() => {setChecked(!checked)}}/>
            {textFirstCell}</td>
          <td className= {css(styles.data2)}>{textSecondCell}</td>

        </tr>
      );
    }

}


CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};
export const mapDispatchToProps = (dispatch) => {
  return {
    onChangeRow: (id, checked) => dispatch(onChangeRow(id, checked)),

  }
}
export const ConnectedCourseListRow = connect(mapDispatchToProps)(CourseListRow);
export default CourseListRow