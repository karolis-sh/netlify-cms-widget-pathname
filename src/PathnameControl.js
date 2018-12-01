import React from 'react';
import { StringControl } from 'netlify-cms-widget-string';

class PathnameControl extends React.Component {
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

export default PathnameControl;
