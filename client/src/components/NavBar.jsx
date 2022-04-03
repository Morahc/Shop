import { useState, useContext } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { HiMenuAlt2, HiOutlineChevronDown } from 'react-icons/hi';
import AuthContext from '../context/auth/AuthContext';

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { userInfo, logoutUser } = useContext(AuthContext);

  return (
    <header className='fixed top-0 left-0 right-0 z-10 bg-white border-b'>
      <nav className='flex justify-between items-center p-4 md:px-8 w-full'>
        <Link to='/' onClick={() => setIsOpen(false)}>
          <h2 className='italic'>Logo</h2>
        </Link>

        <ul className='hidden md:flex justify-center space-x-8'>
          <li>
            <NavLink to='/products'>
              <span>Shop</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'>
              <span>About</span>
            </NavLink>
          </li>
          <li>
            {userInfo ? (
              <div className='group inline-block relative'>
                <div className='flex items-center space-x-2 cursor-pointer'>
                  <span>{userInfo.name}</span> <HiOutlineChevronDown />
                </div>
                <ul className='absolute hidden text-gray-700 pt-1 group-hover:block'>
                  <li className='rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap'>
                    <NavLink to='/cart'>
                      <span>Cart</span>
                    </NavLink>
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
        <nav className='border bg-white flex flex-col items-center py-2 fixed w-full'>
          <ul className='flex flex-col justify-center items-center space-y-8'>
            <li onClick={() => setIsOpen(false)}>
              <NavLink to='/products'>
                <span>Shop</span>
              </NavLink>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <NavLink to='/about'>
                <span>About</span>
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
