import React, { Component, PropTypes } from 'react';
import Textbox from '../components/Textbox';
import { connect } from 'react-redux';

import { Link } from 'react-router';
import { fazerLogin } from '../actions/login';
import { reduxForm } from 'redux-form';

import { styles } from '../styles/Conta.scss';

@connect(
    null,
    { fazerLogin }
)
@reduxForm({
    form: 'login',
    fields: ['email', 'senha'],
})
export class Login extends Component {
    static propTypes = {
        fields: PropTypes.object.isRequired,
        handleSubmit: PropTypes.func.isRequired
    }

    handleSubmit(values, dispatch) {
        const goHome = true;
        return this.props.fazerLogin(values.email, values.senha, goHome);
    }

    handleCloseClick(e) {
        e.preventDefault();
    }

    render() {
        const {
            fields: { email, senha },
            handleSubmit
        } = this.props;

        return (
            <section className={`${styles}`}>
                <form onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                    <div className="container">
                        <div className="col-xs-12 col-md-6
                          col-md-offset-3 col-lg-offset-3">
                            <h2 className="form-signin-heading">Login</h2>
                            <Textbox label="Usuário" field={email} className='form-control' autoFocus />
                            <Textbox label="Senha" field={senha} className='form-control' type="password" />

                            <span className="error-message">
                                {this.props.error}
                            </span>

                            <button type="submit" className="btn btn-primary">Login</button>
                            <Link className="btn" to="/conta" tabIndex="-1">
                                <button type="button"className="btn">
                                    Cadastrar
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}
export default Login;
