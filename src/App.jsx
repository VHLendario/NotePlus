import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import './App.css'
import { AppRoutes } from './AppRoutes';

export const App = () => {
  return (
    <MantineProvider>
      <ModalsProvider>
        <AppRoutes />
      </ModalsProvider>
    </MantineProvider>
  );
};
