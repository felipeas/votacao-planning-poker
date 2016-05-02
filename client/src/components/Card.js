import React, { Component, PropTypes } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.className ? this.props.className : ''}>
                <span>CARD</span>
            </div>
        )
    }
}

export default Card;
