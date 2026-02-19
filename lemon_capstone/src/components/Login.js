import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Authentication not yet implemented
  };

  return (
    <section className="stub-page" aria-labelledby="login-title">
      <h1 id="login-title">Log In</h1>
      <form
        className="booking-form"
        style={{ maxWidth: '380px' }}
        onSubmit={handleSubmit}
        aria-label="Login form"
      >
        <label htmlFor="login-email">Email address</label>
        <input
          id="login-email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={!email || !password}>
          Log in
        </button>
      </form>
    </section>
  );
}

export default Login;
