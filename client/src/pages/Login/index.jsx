import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState,useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { userInfo, error, loginUser } = useContext(AuthContext);
  const [err, setErr] = useState(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
    
    if (error) {
      setErr(error);
      setTimeout(() => {
        setErr(null);
      }, 3000);
    }
  }, [userInfo]);

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      setErr('Invalid email or password');
      setTimeout(() => {
        setErr(null);
      }, 3000);
      return;
    }
    loginUser(formData);
  };

  return (
    <div className='flex flex-col justify-center items-center min-h-full h-screen'>
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
              Submit
            </button>
          </div>
          {err && <p className='text-red-400 text-sm text-center italic'>{err}</p>}
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
