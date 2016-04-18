import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { reset } from 'redux-form';
import validate from '../modules/validate';
import Textbox from '../components/Textbox';


@reduxForm({
    form: 'addSprint',
    fields: ['nome'],
    destroyOnUnmount: false,
    validate: values => validate(values, {
        nome: { presence: true },
    })
})
export class AddSprint extends Component {
    static propTypes = {
        dispatch: React.PropTypes.func,
        fields: React.PropTypes.object.isRequired,
        sprints: React.PropTypes.array,
        addSprint: React.PropTypes.func,
    }

    constructor(props){
        super(props);
    }

    onAdd = (event) => {
        if (this.props.values.nome) {
          this.props.addSprint(this.props.values);
          this.props.dispatch(reset('addSprint'));
        }
        event.preventDefault();
    };

    render(){
        const {
            fields: { nome },
        } = this.props

        return (
            <form onSubmit={this.onAdd}>
                <Textbox
                    field={nome}
                    className='form-control'
                    placeholder='Nome'
                    autoFocus
                />
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.onAdd}>
                        Incluir
                    </button>
                </div>
            </form>

        );
  }
}

export default AddSprint;
