import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      <Navbar />
      {children}    
    </>
  );
};

export default Layout;
