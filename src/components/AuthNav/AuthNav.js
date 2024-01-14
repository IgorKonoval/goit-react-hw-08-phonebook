import { NavList, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <nav>
      <NavList>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Log In</StyledLink>
      </NavList>
    </nav>
  );
};
