import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';

const Layout = () => {
  return (
    <main>
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};
export default Layout;
