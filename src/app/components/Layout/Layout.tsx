import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }: any) => {
  return (
    <>
      <Toaster />
      <Navbar />
      {children}    
    </>
  );
};

export default Layout;
