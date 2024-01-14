import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';
export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </>
  );
};
