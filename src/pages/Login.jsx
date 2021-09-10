import React from 'react';
import { Redirect } from 'react-router-dom';
import TodoList from './TodoList';

class Login extends React.Component {
  state = {
      email: '',
      password: '',
      redirect: false,
  }

  handleClick = () => {
      this.props.setEmail(this.state.email);
      this.setState({ redirect: true });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.type]: target.value });
  }

  render() {
    if(this.state.redirect) return <Redirect to="/TodoList" />

    const { email, password } = this.state;

        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input value={ email }  placeholder="email" type="email" onChange={ this.handleChange } />
                    <input value={ password }  placeholder="senha" type="password" onChange={ this.handleChange } />
                    <button type="button" onClick={ this.handleClick } > 
                        Enviar
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;