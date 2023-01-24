import React from 'react';
import PropTypes from 'prop-types';

export default class BodySection extends React.Component {

    render(){
        const { title } = this.props
        const { children } = this.props

        return (
            <div className='bodySection'>
                <h2>{title}</h2>
                {children}
            </div>


        )
    }

}

BodySection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,

  };

BodySection.defaultProps = {
    children: <React.Fragment />

  };