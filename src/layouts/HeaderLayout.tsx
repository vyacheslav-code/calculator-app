import { Link, NavLink, Outlet } from 'react-router-dom';
import { useLoginContext } from '../features/Login/context/LoginContext.tsx';

export function HeaderLayout() {
  const { username, logout } = useLoginContext();
  return (
    <>
      <header>
        <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800'>
          <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
            <div className='flex items-center lg:order-2'>
              <span className='text-gray-800 dark:text-white  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2'>
                Hello, {username}
              </span>
              <Link
                to={'/login'}
                onClick={logout}
                className='text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
              >
                Logout
              </Link>
            </div>
            <div className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'>
              <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:mt-0'>
                <li>
                  <NavLink
                    to='/app/calculator'
                    className={({ isActive }) =>
                      `${
                        isActive ? 'bg-primary-700' : ''
                      } block border py-6 px-8 text-white border-primary-700 hover:bg-primary-700`
                    }
                  >
                    App
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/app/history'
                    className={({ isActive }) =>
                      `${
                        isActive ? 'bg-primary-700' : ''
                      } block border py-6 px-8 text-white border-primary-700 hover:bg-primary-700`
                    }
                  >
                    History
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
