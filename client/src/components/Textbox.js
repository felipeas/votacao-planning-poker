import React, { Component, PropTypes } from 'react';

class Textbox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {
        if (this.props.autoFocus) {
            this.refs.input.focus();
        }
    }

    handleChange(e) {
        e.preventDefault();

        if (this.props.onChange) {
            this.props.onChange(val, this.props.name);
        }
    }

    handleKeyPress(e) {
        this.handleChange(e);
    }

    handleBlur(e) {
      this.handleChange(e);
    }

    render() {
        return (
            <div className={this.props.className ? this.props.className : ''}>
                {this.renderLabel()}
                {this.renderInput()}
            </div>
        )
    }

    renderInput() {
        return (
            <input
                ref="input"
                name={this.props.name}
                id={this.props.name}
                type='text'
                value={this.props.value}
                onChange={this.handleChange.bind(this)}
                maxLength={this.props.maxLength}
                onKeyPress={this.handleKeyPress.bind(this)}
                onBlur={this.handleBlur.bind(this)}
                style={{ width: this.props.width }}
                disabled={this.props.disabled}
            />
        );
    }

    renderLabel() {
        if (!this.props.label) {return};
        return (
            <label htmlFor={this.props.name}>
                {this.traduzir(this.props.label)}
            </label>
        );
    }
}

TextBox.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    maxLength: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func
};

export default TextBox;
