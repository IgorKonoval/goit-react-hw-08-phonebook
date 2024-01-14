import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Container } from '@mui/material';
import { AppBar } from './AppBar/AppBar';
import { Loader } from './Loader';

export const Layout = () => {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reversOrder={false} />
    </Container>
  );
};
