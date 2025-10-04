import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router';

import { isAuthenticated } from './services/api';
import { Login } from './pages/Login';
import { Home } from './pages/Home';

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export const AppRoutes = () => {
  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </MantineProvider>
  );
};