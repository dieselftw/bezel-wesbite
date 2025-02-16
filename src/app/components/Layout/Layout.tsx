import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast';

const Layout = (children: React.PropsWithChildren) => {
  return (
    <>
      <Toaster />
      <Navbar />
      {children}    
    </>
  );
};

export default Layout;
