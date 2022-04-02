import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext';

const Login = () => {
  const { userInfo, error, loading } = useContext(AuthContext);

  return (
    <div className='flex flex-col justify-center items-center min-h-full h-screen'>
      <div className='flex flex-col items-center border rounded-sm w-3/4 md:w-1/4 p-6'>
        <h2>Login</h2>
        <form className='w-full mb-4'>
          <div className='mb-4'>
            <label>Email</label>
            <input className='form-input' type='email' />
          </div>

          <div className='mb-4'>
            <label>Password</label>
            <input className='form-input' type='password' />
          </div>

          <div className='flex justify-center'>
            <button className='button' type='button'>
              Submit
            </button>
          </div>
        </form>
        <p className='text-xs'>
          Don&apos;t have an account?{' '}
          <span className='text-blue-400'>
            <Link to={'/register'}>Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
