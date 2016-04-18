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
        debugger;
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.reset = this.resetForm.bind(this)
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
                    label="Nome"
                    field={nome}
                    className='form-control'
                    autoFocus
                    placeholder='Cool Sprint huh'
                />
                <div className="form-group">
                    <button className="btn btn-primary" onClick={this.onAdd}>
                        Incluir Sprint
                    </button>

                    <button className="btn btn-primary">
                        sss Sprint
                    </button>
                </div>
            </form>

        );
  }
}

export default AddSprint;
