import { Container } from '@mui/material';
import { LoginForm } from '../components/LoginForm';
import { Helmet } from 'react-helmet';
const LoginPage = () => {
  return (
    <Container>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Container>
  );
};
export default LoginPage;
