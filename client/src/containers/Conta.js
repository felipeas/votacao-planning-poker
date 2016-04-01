import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import validate from '../modules/validate';
import { criarConta } from '../actions/conta';

class Conta extends Component {
  static propTypes : {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  handleSubmit(values, dispatch) {
    return this.props.criarConta(values);
  }

  render() {
    const {
      fields: { nome, login, senha },
      handleSubmit
    } = this.props;

    return (
      <form className="criar-conta" onSubmit={this.handleSubmit.bind(this)}>
        <h2>Criar Conta</h2>
        <TextBox label="Nome" field={nome} autoFocus />
        <TextBox label="Login" field={login} />
        <TextBox label="Senha" field={senha} type="password" />
        <Button type="submit">Criar Conta</Button>
      </form>
    );
  }
}

export default Conta;
