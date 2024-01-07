import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/auth/AuthContext";
import { BsGearWideConnected } from "react-icons/bs";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userInfo, error: userError, loginUser, logoutUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (userInfo) {
      navigate(location.state ? location.state.from.pathname : "/");
    }
    if (userError) {
      setError(userError);
      setTimeout(() => {
        setError(null);
        logoutUser();
      }, 2000);
    }
  }, [userInfo, userError]);

  const handleSubmit = () => {
    if (!formData.email || !formData.password) {
      setError("Invalid email or password");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
    loginUser(formData);
  };

  return (
    <div className="container  flex flex-col justify-center items-center min-h-full h-screen space-y-3 lg:space-y-6">
      <Link to="/home" className="flex gap-1 items-center">
        <BsGearWideConnected className="text-3xl" />
        <h2 className="text-xl lg:text-2xl italic">GizmoGuru</h2>
      </Link>
      <div className="bg-white flex flex-col items-center border shadow rounded-sm w-full md:w-1/2 p-6">
        <h2 className='lg:text-lg font-semibold'>Login</h2>
        <form className="w-full mb-4">
          <div className="mb-4">
            <label>Email</label>
            <input
              className="form-input"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label>Password</label>
            <input
              className="form-input"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <div>
            <button className="button" type="button" onClick={handleSubmit}>
              Sign In
            </button>
          </div>
        </form>
        {error && <p className="text-red-400 text-sm text-center italic ">{error}</p>}
        <p className="text-xs">
          Don&apos;t have an account?{" "}
          <span className="text-blue-400">
            <Link to={"/register"}>Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
