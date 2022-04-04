import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const { userInfo, error: userError, registerUser,logoutUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (userError) {
      setError(userError);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [userError]);

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.password) {
      setError('Invalid email or password');
      setTimeout(() => {
        setError(null);
      }, 3000);
      return;
    }
    if (userError) {
      setError(userError);
      setTimeout(() => {
        setError(null);
        logoutUser();
      }, 2000);
    }
    registerUser(formData);
  };
  return (
    <div className='flex flex-col justify-center items-center min-h-full h-screen'>
      <Link to='/home'>
        <h1 className='mb-4'>Logo</h1>
      </Link>
      <div className='flex flex-col items-center border rounded-sm w-3/4 md:w-1/4 p-6'>
        <h2>Register</h2>
        <form className='w-full mb-4'>
          <div className='mb-4'>
            <label>Name</label>
            <input
              className='form-input'
              type='text'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className='mb-4'>
            <label>Email</label>
            <input
              className='form-input'
              type='email'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className='mb-4'>
            <label>Password</label>
            <input
              className='form-input'
              type='password'
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <div className='flex justify-center'>
            <button className='button' type='button' onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
        {error && <p className='text-red-400 text-sm text-center italic'>{error}</p>}
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
