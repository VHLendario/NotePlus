import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './App.css'
import { AppRoutes } from './AppRoutes';

export const App = () => {
  return (
    <MantineProvider>
      <AppRoutes />
    </MantineProvider>
  );
};
