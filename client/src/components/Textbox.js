import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


class Testbox extends Component {
  static propTypes : {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    autoFocus: PropTypes.bool,
    field: PropTypes.object.isRequired
  }

  render() {
    const {
      label,
      type,
      autoFocus,
      field
    } = this.props;

    return (
      <div className="form-row">
        <label htmlFor={field.name}>{label}</label>
        <input
          id={field.name}
          type={type || 'text'}
          autoFocus={autoFocus}
          className='form-control'
          {...field}
        />
        {field.touched && field.error && <span className="error-message">{field.error}</span>}
      </div>
    );
  }
}

export default Testbox;
