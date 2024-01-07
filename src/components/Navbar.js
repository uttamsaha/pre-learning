import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link href="/">
          <span className="text-white">Home</span>
        </Link>

        <div className="ml-4 relative">
          <button className="text-white">Menu</button>
          <div className="hidden absolute left-0 mt-2 bg-white p-2 shadow-lg">
            {/* Dropdown menu items */}
            <Link href="/page1">
              <span className=" text-gray-800 hover:bg-gray-300 p-2">Page 1</span>
            </Link>
            <Link href="/page2">
              <span className=" text-gray-800 hover:bg-gray-300 p-2">Page 2</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
