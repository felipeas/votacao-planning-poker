import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SprintList } from '../components/SprintList';
import { AddSprint } from '../components/AddSprint';
import * as actionCreators from '../actions/sprint';

import { styles } from '../styles/Sprint.scss';

@connect(
    state => ({
        sprints: state.sprints.lista
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Sprints extends Component {
    componentDidMount() {
        this.props.carregarLista();
    }
    render() {
        const {
            sprints,
        } = this.props;

        return (
            <section className={`${styles}`}>
                <div className="container">
                    <div className="row">
                        <SprintList {...this.props}/>
                        <AddSprint {...this.props}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Sprints;
