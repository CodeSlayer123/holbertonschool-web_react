import React from 'react';
import PropTypes from 'prop-types';

export default class CourseListRow extends React.Component {
  render() {
    if (this.props.isHeader) {
      if (this.props.textSecondCell) {
        return (
          <tr>
            <th>{this.props.textFirstCell}</th>
            <th>{this.props.textSecondCell}</th>
          </tr>
        );
      } else {
        return ( <tr><th colSpan="2">{this.props.textFirstCell}</th></tr> );
      }
    } else {
      return (
        <tr>
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