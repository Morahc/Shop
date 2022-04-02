import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-900'>
      <div className='p-4'>
        <div className='flex flex-col items-center justify-center'>
          <div className='md:w-1/2 text-center mb-4 space-y-2'>
            <h1 className='text-white'>Contact Us</h1>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quisquam.
            </p>
            <p className='text-gray-400'>+234 8000000001</p>
            <p className='text-gray-400'>demo@email.com</p>
          </div>
          <div className='flex space-x-3'>
            <FaFacebook className='text-2xl text-white' />
            <FaInstagram className='text-2xl text-white' />
          </div>
        </div>
      </div>
      <p className='text-white text-center text-xs pb-1'>&copy; 2022 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
