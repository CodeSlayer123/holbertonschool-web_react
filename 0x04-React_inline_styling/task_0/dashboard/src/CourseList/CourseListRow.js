import React from 'react';
import PropTypes from 'prop-types';

export default class CourseListRow extends React.Component {
  render() {
    if (this.props.isHeader) {
      if (this.props.textSecondCell) {
        return (
          <tr style={{ 'background-color': '#deb5b545'}}>
            <th>{this.props.textFirstCell}</th>
            <th>{this.props.textSecondCell}</th>
          </tr>
        );
      } else {
        return ( <tr><th colSpan="2">{this.props.textFirstCell}</th></tr> );
      }
    } else {
      return (
        <tr style={{ 'background-color': '#f5f5f5ab' }}>
          <td>{this.props.textFirstCell}</td>
          <td>{this.props.textSecondCell}</td>
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