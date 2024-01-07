import { useState, useContext } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { HiMenuAlt2, HiOutlineChevronDown } from 'react-icons/hi';
import { BsGearWideConnected } from "react-icons/bs";
import AuthContext from '../context/auth/AuthContext';

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo, logoutUser } = useContext(AuthContext);

  return (
    <header className='fixed inset-0 z-10 bg-primary text-white shadow h-14 lg:h-20 flex px-4 lg:px-8'>
      <nav className='flex justify-between items-center w-full'>
        <Link to='/home' onClick={() => setIsOpen(false)} className='flex gap-1 items-center'>
          <BsGearWideConnected className='text-3xl'/>
          <h2 className='text-xl lg:text-2xl italic'>GizmoGuru</h2>
        </Link>

        <ul className='text-lg hidden md:flex justify-center space-x-8'>
          <li>
            <NavLink to='/products'>
              <span>Shop</span>
            </NavLink>
          </li>
          <li>
            {userInfo ? (
              <div className='group inline-block relative'>
                <div className='flex items-center space-x-2 cursor-pointer'>
                  <span>{userInfo.name}</span> <HiOutlineChevronDown />
                </div>
                <ul className='absolute hidden text-gray-700 pt-1 group-hover:block'>
                  <li
                    className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap '
                    onClick={() => navigate('/cart')}
                  >
                    <span>Cart</span>
                  </li>
                  <li
                    onClick={() => {
                      logoutUser();
                      navigate('/');
                    }}
                    className='rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer'
                  >
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink to='/login'>
                <span>Account</span>
              </NavLink>
            )}
          </li>
        </ul>

        <HiMenuAlt2 className='md:hidden text-2xl' onClick={() => setIsOpen(!isOpen)} />
      </nav>
      {isOpen && (
        <nav className='absolute top-14 left-0 border bg-white flex flex-col items-center py-2 w-full'>
          <ul className='flex flex-col text-black justify-center items-center space-y-8'>
            <li onClick={() => setIsOpen(false)}>
              <NavLink to='/products'>
                <span>Shop</span>
              </NavLink>
            </li>
            {userInfo ? (
              <>
                <li onClick={() => setIsOpen(false)}>
                  <NavLink to='/cart'>
                    <span>Cart</span>
                  </NavLink>
                </li>
                <li
                  onClick={() => {
                    setIsOpen(false);
                    logoutUser();
                    navigate('/');
                  }}
                >
                  <span>Logout</span>
                </li>
              </>
            ) : (
              <li onClick={() => setIsOpen(false)}>
                <NavLink to='/login'>
                  <span>Account</span>
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
