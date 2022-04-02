import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-full h-screen'>
      <div className='flex flex-col items-center border rounded-sm w-3/4 md:w-1/4 p-6'>
        <h2>Register</h2>
        <form className='w-full mb-4'>
          <div className='mb-4'>
            <label>Name</label>
            <input className='form-input' type='text' />
          </div>

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
          Already have an account?{' '}
          <span className='text-blue-400'>
            <Link to={'/login'}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
