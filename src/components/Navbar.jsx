import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const pathname = useLocation();

  return (
    <div className="flex justify-around items-center p-5 bg-neutral-900">
      <Link to="/" className="text-2xl text-slate-200 font-bold">
        ReactPractice
      </Link>
      <ul className="flex justify-around items-center gap-8 text-slate-700">
        <Link to="/" className={`text-gray ${pathname.pathname === '/' ? 'text-gray-400' : ''}`}>Home</Link>
        <Link to="/todos" className={`text-gray ${pathname.pathname === '/todos' ? 'text-gray-400' : ''}`}>Todos</Link>
        <Link to="/form" className={`text-gray ${pathname.pathname === '/form' ? 'text-gray-400' : ''}`}>React Form</Link>
        <Link to="/sform" className={`text-gray ${pathname.pathname === '/sform' ? 'text-gray-400' : ''}`}>Simple Form</Link>
        <Link to="/about" className={`text-gray ${pathname.pathname === '/about' ? 'text-gray-400' : ''}`}>About</Link>
      </ul>
    </div>
  );
};

export default Navbar;
