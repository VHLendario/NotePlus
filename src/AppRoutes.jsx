import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";



/* import { isAuthenticated } from './services/api'; */
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Home } from './pages/Home';
import { Cursos } from './Pages/Cursos';
import { MainLayout } from './layout/index';
import { Faculdades } from './Pages/Faculdades';
import { Detalhes } from './Pages/Detalhes';

/* const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
}; */

/* export const AppRoutes = () => {
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
}; */

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota com layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/Faculdades" element={<Faculdades />} />
          <Route path="/Detalhes" element={<Detalhes />} />
        </Route>

        {/* Rota sem layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}