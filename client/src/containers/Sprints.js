import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SprintList } from '../components/SprintList';
import { AddSprint } from '../components/AddSprint';

import * as actionCreators from '../actions/sprint';

import { styles } from '../styles/Sprint.scss';

@connect(
    state => ({
        sprints: state.app.sprints
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Sprints extends Component {
    componentDidMount() {
        this.props.dispatch(carregarLista());
    }
    render() {
        const {
            sprints,
        } = this.props;

        debugger;
        return (
            <section className={`${styles}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                                        col-md-offset-3 col-lg-offset-3">
                            <h1>
                                Sprints
                            </h1>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                                        col-md-offset-3 col-lg-offset-3">
                            <h2>
                                ----
                            </h2>
                            <SprintList
                                sprints={sprints}
                            />
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                                        col-md-offset-3 col-lg-offset-3">
                            <AddSprint {...this.props}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Sprints;
