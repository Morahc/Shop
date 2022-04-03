import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userInfo, error: userError, loginUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (userInfo) {
      navigate(location.state ? location.state.from.pathname : '/');
    }
    if (userError) {
      setError(userError);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [userInfo, userError]);

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      setError('Invalid email or password');
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
    loginUser(formData);
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-full h-screen'>
      <Link to='/'>
        <h1 className='mb-4'>Logo</h1>
      </Link>
      <div className='flex flex-col items-center border rounded-sm w-3/4 md:w-1/4 p-6'>
        <h2>Login</h2>
        <form className='w-full mb-4'>
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
              Sign In
            </button>
          </div>
        </form>
        {error && <p className='text-red-400 text-sm text-center italic '>{error}</p>}
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
