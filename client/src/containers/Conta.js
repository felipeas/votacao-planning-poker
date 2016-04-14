import React, { Component, PropTypes } from 'react';
import Textbox from '../components/Textbox';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { criarConta } from '../actions/conta';
import { reduxForm } from 'redux-form';
import validate from '../modules/validate';


import { styles } from '../styles/Conta.scss';

@connect(
    null,
    { criarConta }
)
@reduxForm({
    form: 'conta',
    fields: ['nome', 'email', 'senha'],
    validate: values => validate(values, {
        nome: { presence: true },
        email: { presence: true },
        senha: { presence: true },
    })
})
export class Conta extends Component {
    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired
    }

    handleSubmit(values, dispatch) {
        return this.props.criarConta(values);
    }

    handleCloseClick(e) {
        e.preventDefault();
        this.props.setLoginVisible(false);
    }

    render() {
        const {
            fields: { email, senha, nome },
            handleSubmit
        } = this.props;

        return (
            <section className={`${styles}`}>
                <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <div className="container">
                        <div className="col-xs-12 col-md-6
                          col-md-offset-3 col-lg-offset-3">
                            <h2 className="form-signin-heading">Criar conta</h2>

                            <Textbox label="Nome" field={nome} className='form-control' autoFocus />
                            <Textbox label="Usuário" field={email} className='form-control' />
                            <Textbox label="Senha" field={senha} className='form-control' type="password" />

                            <span className="error-message">
                                {this.props.error}
                            </span>

                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                            <Link className="btn" to="/login" tabIndex="-1">
                                <button type="button"className="btn">
                                    Voltar
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}

export default Conta;
