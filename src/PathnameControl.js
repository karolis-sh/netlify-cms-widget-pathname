import React from 'react';
import PropTypes from 'prop-types';

export default class PathnameControl extends React.Component {
  isValid = () => {
    const { value } = this.props;
    if (!value) return true;
    const parser = document.createElement('a');
    parser.href = `http://example.com${value}`;
    return parser.pathname !== value ? { error: { message: 'Invalid pathname.' } } : true;
  };

  render() {
    const {
      forID,
      value,
      onChange,
      classNameWrapper,
      setActiveStyle,
      setInactiveStyle,
    } = this.props;

    return (
      <input
        type="text"
        id={forID}
        className={classNameWrapper}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        onFocus={setActiveStyle}
        onBlur={setInactiveStyle}
      />
    );
  }
}

PathnameControl.propTypes = {
  onChange: PropTypes.func.isRequired,
  forID: PropTypes.string,
  value: PropTypes.node,
  classNameWrapper: PropTypes.string.isRequired,
  setActiveStyle: PropTypes.func.isRequired,
  setInactiveStyle: PropTypes.func.isRequired,
};

PathnameControl.defaultProps = {
  value: '',
};
