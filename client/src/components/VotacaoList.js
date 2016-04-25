import React, { Component } from 'react';

export class VotacaoList extends Component {
    static propTypes = {
        estorias: React.PropTypes.array,
    }

    render() {
        const { estorias } = this.props;

        return (
            <div>
                {estorias.map((item, index) =>
                    <div className="row" key={index}>
                        <div className="estoria">
                            <span>
                                {`${item.nome}`}
                            </span>
                            <div className="pull-right">
                                <span>12&nbsp;</span>
                                <i className="fa fa-terminal"></i>
                            </div>
                        </div>
                    </div>

                )}
            </div>
        );
    }
}

export default VotacaoList;
// {item.estorias.map((item, index) =>
//     <div className="tarefa">
//         <span>
//             {`${item.nome}`}
//         </span>
//         <div className="pull-right">
//             <span>12&nbsp;</span>
//             <i className="fa fa-terminal"></i>
//         </div>
//     </div>
// )}
