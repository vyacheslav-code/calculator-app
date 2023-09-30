import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';
import { useLoginContext } from '../context/LoginContext.tsx';
import { Input } from '../../../components/Input.tsx';

export function LoginForm() {
  const { login } = useLoginContext();
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget.username.value;
    login(username);
    navigate('/app/calculator');
  };
  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Sign in to your account
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={onSubmit}>
              <Input
                name='username'
                label='Username'
                InputProps={{
                  type: 'text',
                  placeholder: 'johndoe123',
                  required: true,
                }}
              />
              <Input
                name='password'
                label='Password'
                InputProps={{
                  type: 'password',
                  placeholder: '********',
                  required: true,
                }}
              />

              <button
                type='submit'
                className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
