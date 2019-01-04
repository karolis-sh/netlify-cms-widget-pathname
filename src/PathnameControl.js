import React from 'react';
import PropTypes from 'prop-types';
import { StringControl } from 'netlify-cms-widget-string';

export default class PathnameControl extends React.Component {
  isValid = () => {
    const { value } = this.props;
    if (!value) return true;
    const parser = document.createElement('a');
    parser.href = `http://example.com${value}`;
    return parser.pathname !== value ? { error: { message: 'Invalid pathname.' } } : true;
  };

  render() {
    return <StringControl {...this.props} />;
  }
}

PathnameControl.propTypes = {
  value: PropTypes.node,
};
