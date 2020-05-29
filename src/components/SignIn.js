// SignIn.js

import React from 'react';
import { Login, LoginForm } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

const styles = ({
    main: { background: 'linear-gradient(315deg, #36096d 0%, #37d5d6 74%)' },
    avatar: {
        background: 'url(https://www.kartado.com.br/wp-content/uploads/2020/02/kartado-white.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: 80,
    },
    icon: { 
    display: 'none'
  },
  button: { 
    background: 'black'
  },
});

const CustomLoginForm = withStyles({
    button: { background: 'black' },
})(LoginForm);

const CustomLoginPage = props => (
    <Login
        loginForm={<CustomLoginForm />}
        {...props}
    />
);

export default withStyles(styles)(CustomLoginPage);
