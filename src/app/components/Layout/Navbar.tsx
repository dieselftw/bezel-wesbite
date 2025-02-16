import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="container mx-auto px-6">
        <div className="navbar-container">
          <Link href="/" className="text-4xl font-bold text-white">
            Bezel
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
