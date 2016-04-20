import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { reset } from 'redux-form';
import validate from '../modules/validate';
import Textbox from '../components/Textbox';

@reduxForm({
    form: 'addSprint',
    fields: ['nome'],
    destroyOnUnmount: false
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
                <div className="input-group add-sprint">
                    <Textbox
                        field={nome}
                        className='form-control'
                        placeholder='Incluir nova sprint'
                        autoFocus
                    />
                    <span className="input-group-btn">
                        <a className="btn add-option" onClick={this.onAdd}>
                            <i className="fa fa-plus"></i>
                        </a>
                    </span>
                </div>
            </form>
        );
  }
}

export default AddSprint;
