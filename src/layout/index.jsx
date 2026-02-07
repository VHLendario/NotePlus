import { Outlet } from 'react-router-dom';
import classes from './layout.module.css';
import { Sidebar } from '../components/Sidebar';

export const MainLayout = () => {
  return (
    <div className={classes.layout}>

      <Sidebar />

      <main className={classes.content}>
        <Outlet />
      </main>

    </div>
  )
}

/* export const MainLayout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <NavBar />

      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
};
 */