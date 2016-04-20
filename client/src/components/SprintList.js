import React, { Component } from 'react';

export class SprintList extends Component {
    static propTypes = {
        sprints: React.PropTypes.array,
    }

    onEnd = (event) => {
        if (this.props.values.nome) {
          this.props.endSprint(this.props.values._);
          this.props.dispatch(reset('endSprint'));
        }
        event.preventDefault();
    };

    render() {
        const { sprints } = this.props;
        
        return (
            <div>
                {sprints.map((item, index) =>
                    <div className="row">
                        <div className="sprint">
                            <span>
                                {`${item.nome}`}
                            </span>
                            <button className="btn add-option pull-right" onClick={this.onEnd}>
                                <span>Encerrar&nbsp;</span>
                                <i className="fa fa-close"></i>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default SprintList;
