'use client';

import React, { useRef } from 'react'
import InputBox from './InputBox';
import { Button } from './Button';

type Props = {
    className?: string;
};

const Login = (props: Props) => {
    const userName = useRef("");
    const pass = useRef("");
  return (
    <><div className={props.className}>
          <div className='g-gradient-to-b from-slate-50 to-slate-200 p-2 text-center text-slate-600'>
              Login Form
          </div>
      </div><form className='p-2 flex flex-col gap-3'>
              <InputBox
                  name='username'
                  labelText='Username'
                  onChange={(e) => (userName.current = e.target.value)} />
              <InputBox
                  name='password'
                  labelText='password'
                  onChange={(e) => (pass.current = e.target.value)} />
                  <div className='flex items-center justify-center mt-2 gap-2'>
                    <Button type='submit' className='w-28'>
                        Login
                    </Button>
                  </div>
          </form></>
  )
}

export default Login