const formLogin = {
  nameInput: `//input[@placeholder='Username']`,
  passwordInput: 'input[name="password"]',
  loginButton: 'button[type="submit"]',
} as const;

export default formLogin;