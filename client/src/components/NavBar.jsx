import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt2 } from 'react-icons/hi';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-10 bg-white'>
      <nav className='flex justify-between items-center p-4 md:px-8 w-full'>
        <Link to='/'>
          <h2 className='italic'>Logo</h2>
        </Link>

        <ul className='hidden md:flex justify-center space-x-8'>
          <li>
            <NavLink className='flex items-center space-x-3' to='/products'>
              <span>Shop</span>
            </NavLink>
          </li>
          <li>
            <NavLink className='flex items-center space-x-3' to='/cart'>
              <span>Cart</span>
            </NavLink>
          </li>
          <li>
            <NavLink className='flex items-center space-x-3' to='/login'>
              <span>Account</span>
            </NavLink>
          </li>
        </ul>

        <HiMenuAlt2 className='md:hidden' onClick={() => setIsOpen(!isOpen)} />
      </nav>
      {isOpen && (
        <nav className='border bg-white flex flex-col items-center py-2 fixed w-full'>
          <ul className='flex flex-col justify-center items-center space-y-8'>
            <li>
              <NavLink className='flex items-center space-x-3' to='/products'>
                <span>Shop</span>
              </NavLink>
            </li>
            <li>
              <NavLink className='flex items-center space-x-3' to='/cart'>
                <span>Cart</span>
              </NavLink>
            </li>
            <li className='flex items-center space-x-3'>
              <NavLink to='/login'>
                <span>Account</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
