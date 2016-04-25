import React, { Component } from 'react';
import { Estoria } from '../components/Estoria';

export class VotacaoList extends Component {
    static propTypes = {
        estorias: React.PropTypes.array,
    }
    
    criarEstoria(item, index) {
        return (
            <Estoria 
                    nome={item.nome}
                    tarefas={item.tarefas}
            />);
    }
       
    render() {
        const { estorias } = this.props;
        const { criarEstoria } = this;
        
        return (
            <div>
                {estorias.map(function(item, index) {criarEstoria(item, index)})}               
            </div>
        );
    }
}

export default VotacaoList;

//  {estorias.map((item, index) =>
                    
                    
//                     <div className="row" key={index}>
//                         <div className="estoria">
//                             <span>
//                                 {`${item.nome}`}
//                             </span>
//                             <div className="pull-right">
//                                 <span>12&nbsp;</span>
//                                 <i className="fa fa-terminal"></i>
//                             </div>
//                         </div>
//                     </div>
//                     {item.tarefas.map((item, index)=>
//                         <div className="row" key={index}>
//                         <div className="tarefa">
//                             <span>
//                                 {`${item.nome}`}
//                             </span>
//                             <div className="pull-right">
//                                 <span>12&nbsp;</span>
//                                 <i className="fa fa-terminal"></i>
//                             </div>
//                         </div>
//                     </div>    
                        
//                     )}
//                 )}




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
