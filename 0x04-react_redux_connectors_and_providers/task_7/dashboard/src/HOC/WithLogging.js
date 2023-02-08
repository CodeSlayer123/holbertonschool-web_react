import React from 'react';
import PropTypes from 'prop-types';

export default function WithLogging({Wrap}) {

    const name = wrap.displayName || wrap.name || 'Component';

    class Logging extends React.Component {
        componentDidMount() {
            console.log(`Component ${name} is mounted`);
          }

          componentWillUnmount() {
            console.log(`Component ${name} is going to unmount`);
          }

          render() {
            return <Wrap {...this.props} />;
          }
    }
    Logging.displayName = `WithLogging(${name})`
    return Logging

}
