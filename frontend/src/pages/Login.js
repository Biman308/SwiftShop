import React, { useContext, useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import Context from '../context';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();
  const { fetchUserDetails
    , fetchUserAddToCart
  } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataResponse = await fetch(SummaryApi.signIn.url, {
        method: SummaryApi.signIn.method,
        credentials: 'include',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();
      console.log('Login successful:', dataApi);

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate('/');
        fetchUserDetails()
        fetchUserAddToCart()
      } else if (dataApi.error) {
        toast.error(dataApi.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred during login. Please try again.');
    }
  };



  return (
    <section id='login'>
      <div className='mx-auto container p-4'>
        <div className='bg-slate-100 p-2 py-5 w-full max-w-md mx-auto mb-6'>
          <div className='w-20 h-20 mx-auto'>
            <img src={loginIcons} alt='Login icon' />
          </div>

          <form onSubmit={handleSubmit}>
            <br />
            <div className='grid'>
              <label><b>Email: </b></label>
              <div className='bg-slate-50 p-2'>
                <input
                  className='bg-slate-150 w-full h-full outline-none bg-transparent'
                  type='email'
                  placeholder='Enter your email'
                  onChange={handleOnChange}
                  name='email'
                  value={data.email}
                />
              </div>
              <label><b>Password: </b></label>
              <div className='p-2 bg-slate-50 flex'>
                <input
                  className='bg-slate-150 w-full h-full outline-none bg-transparent'
                  type={showPassword ? "text" : "password"}
                  onChange={handleOnChange}
                  name='password'
                  value={data.password}
                  placeholder='Enter the password'
                />
                <div className='cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                  <span>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                <b>forgot password?</b>
              </Link>
            </div>
            <button className='bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 hover:bg-red-700 mx-auto block mt-4'>
              Login
            </button>
          </form>

          <p className='my-3'>
            <b>Don't have an account?</b>
            <Link to={'/sign-up'} className='text-red-500 hover:text-red-700 hover:underline'> Sign Up</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login