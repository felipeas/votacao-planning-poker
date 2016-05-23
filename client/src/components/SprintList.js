import React, { Component } from 'react';
import { Link } from 'react-router';

export class SprintList extends Component {
    static propTypes = {
        sprints: React.PropTypes.array,
    }

    handleOnEnd(id) {
        this.props.endSprint(id);
    }

    render() {
        const { sprints } = this.props;

        return (
            <div>
                {sprints.map((item, index) =>
                    <div className="row" key={index}>
                        <div className="sprint">
                            <Link to={`/sprint/${item._id}`}>
                                <div>
                                    {`${item.nome}`}
                                </div>
                            </Link>
                            <button className="btn btn-danger add-option pull-right apagar" onClick={this.handleOnEnd.bind(this,item._id)}>
                                <span>Encerrar&nbsp;</span>
                                <i className="fa fa-lock"></i>
                            </button>
                        </div>                   
                    </div>
                )}
            </div>
        );
    }
}

export default SprintList;
