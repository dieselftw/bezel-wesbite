import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      <Navbar />
      {children}    
    </>
  );22
};

export default Layout;
