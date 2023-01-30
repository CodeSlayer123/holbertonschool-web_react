import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        'margin-bottom': '40px'
    },

  });
export default class BodySectionWithMarginBottom extends React.Component {

    render(){
        return (
            <div className= {css(styles.bodySectionWithMargin)}>
                <BodySection {...this.props} />
            </div>


        )
    }

}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,

  };
