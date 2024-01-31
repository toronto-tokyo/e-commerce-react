import React from 'react';

import SignInForm from 'components/SingInForm';
import { Link } from 'react-router-dom';
import Divider from 'components/Divider';

const SignInPage: React.FC = () => {
  return (
    <div className="grow flex justify-center items-center px-3 py-10">
      <section className="bg-white p-5 rounded-md basis-3/5 min-w-72 max-w-2xl flex flex-col gap-5">
        <SignInForm />
        <Divider />
        <p className="flex flex-wrap items-center justify-center gap-1">
          <span>Don&apos;t have an account?</span>
          <Link to="/sign-up" className="text-blue-500 font-bold">
            Sign up here!
          </Link>
        </p>
      </section>
    </div>
  );
};

export default SignInPage;
