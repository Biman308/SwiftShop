import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaRegUserCircle } from "react-icons/fa";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';

const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user)
    const navigate = useNavigate()


    useEffect(() => {
        if (user?.role !== ROLE.ADMIN) {
            navigate("/")
        }
    }, [user])
    // The useEffect hook is used to perform side effects in functional components.
    // If the user's role is not ADMIN, it navigates the user to the home page ("/").


    return (
        <div className='min-h-[calc(100vh-120px)] md:flex'>

            <aside className='bg-slate-200 min-h-full  w-full  max-w-60 -mt-16 customShadow'>
                <div className='h-32 bg-red-500 flex justify-center items-center flex-col rounded-xl'>
                    <div className='text-5xl cursor-pointer relative flex justify-center'
                    >
                        {
                            user?.profilePic ? (
                                <img src={user?.profilePic}
                                    className='w-16 h-16 rounded-full'
                                    alt={user?.name}
                                />
                            ) : (
                                <FaRegUserCircle />
                            )
                        }
                    </div>

                    <p className='capitalize text-lg font-semibold mt-2'>{user?.name}</p>
                    <p className='text-sm'>{user?.role}</p>

                </div>


                <div>
                    <nav className='grid p-4'>
                        <Link to={"all-users"} className='px-2 py-1 hover:bg-white'>All Users</Link>
                        <Link to={"all-products"} className='px-2 py-1 hover:bg-white'>All Products</Link>
                    </nav>
                </div>
            </aside>

            <main className='-mt-16 w-full h-full p-2'>
                <Outlet />
            </main>
        </div>
    )
}

export default AdminPanel