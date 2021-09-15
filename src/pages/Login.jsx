import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Login({ saveEmail }) {
	const dispatch = useDispatch();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [redirect, setRedirect] = useState(false)

	const handleClick = () => {
		dispatch({type: 'REGISTER_USER', payload: email});
		setRedirect(true);
	}

	const handleChange = ({ target }) => {
		if (target.type === 'email') setEmail(target.value)
		if (target.type === 'password') setPassword(target.value)
	}

	if(redirect) return <Redirect to="/TodoList" />

	return (
			<div>
					<h1>Login</h1>
					<form>
							<input value={ email }  placeholder="email" type="email" onChange={ handleChange } />
							<input value={ password }  placeholder="senha" type="password" onChange={ handleChange } />
							<button type="button" onClick={ handleClick } > 
									Enviar
							</button>
					</form>
			</div>
	)
}

export default Login;