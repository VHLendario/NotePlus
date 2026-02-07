import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

import { Cursos } from './Pages/Cursos/';
import { AppRoutes } from './AppRoutes';

export const App = () => {
  return (
    <MantineProvider>
      <AppRoutes />
    </MantineProvider>
  );
};
