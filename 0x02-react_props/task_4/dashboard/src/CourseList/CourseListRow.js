import PropTypes from 'prop-types';
import React from 'react';

export default class CourseListRow extends React.Component {
  render() {
    if (this.props.isHeader == true) {
        if (this.props.textSecondCell  == null) {
            return (
                <th colSpan = "2">{this.props.textFirstCell }</th>
              );
        }
        else {
            return (
                <tr>
                    <th>{this.props.textFirstCell }</th>
                    <th>{this.props.textSecondCell }</th>
                </tr>

              );
        }
    }
    else {
        return (
            <tr>
                <td>{this.props.textFirstCell }</td>
                <td>{this.props.textSecondCell }</td>
            </tr>

          );

    }

  }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string
};

Greeting.defaultProps = {
    isHeader: false,
    textSecondCell: null
  };