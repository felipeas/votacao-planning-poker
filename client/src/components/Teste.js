import React, { Component, PropTypes } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () {

    }

    render() {
        return (
            <div className={this.props.className ? this.props.className : ''}>
                <span>TESTE</span>
            </div>
        )
    }
}

export default TextBox;
