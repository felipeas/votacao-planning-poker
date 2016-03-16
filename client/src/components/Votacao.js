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
                <span>VOTACAO</span>
            </div>
        )
    }
}

export default Votacao;
