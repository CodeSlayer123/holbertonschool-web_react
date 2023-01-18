import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

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


});
export default class CourseListRow extends React.Component {
  render() {
    if (this.props.isHeader) {
      if (this.props.textSecondCell) {
        return (
          <tr style={{ 'background-color': '#deb5b545'}}>
            <th className= {css(styles.rowHeader1)}>{this.props.textFirstCell}</th>
            <th className= {css(styles.rowHeader2)}>{this.props.textSecondCell}</th>
          </tr>
        );
      } else {
        return (
          <tr>
            <th className= {css(styles.tableHeader)} colSpan="2">{this.props.textFirstCell}</th>
          </tr> );
      }
    } else {
      return (
        <tr style={{ 'background-color': '#f5f5f5ab' }}>
          <td className= {css(styles.data1)}>{this.props.textFirstCell}</td>
          <td className= {css(styles.data2)}>{this.props.textSecondCell}</td>
        </tr>
      );
    }
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