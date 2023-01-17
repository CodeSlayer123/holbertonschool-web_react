import React from 'react';
import PropTypes from 'prop-types';

const CourseShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired,
});


export default CourseShape;