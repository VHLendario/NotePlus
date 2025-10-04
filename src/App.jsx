import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import { Login } from './Pages/Login/login';
import { Home } from './Pages/Home/';

export const App = () => {
  return (
    <MantineProvider>
      <Home />
    </MantineProvider>
  );
};
