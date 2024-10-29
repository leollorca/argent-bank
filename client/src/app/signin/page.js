"use client";

import { useState } from 'react';

import { getToken, getUser } from '../../services/api';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const tokenResponse = await getToken({email, password});
    const token = await tokenResponse.json();
    
    const userResponse = await getUser(token.body.token);
    const user = await userResponse.json();
    console.log(user.body);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input onChange={(e) => {setEmail(e.target.value)}} type="text" id="email" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input onChange={(e) => {setPassword(e.target.value)}} type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default Signin;
