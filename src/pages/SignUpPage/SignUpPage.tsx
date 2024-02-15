import Divider from 'components/Divider';
import SignUpForm from 'components/SignUpForm';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="grow flex justify-center items-center px-3 py-10">
      <section className="bg-white p-5 rounded-md basis-3/5 min-w-72 max-w-2xl flex flex-col gap-5">
        <h1 className="font-bold text-center text-4xl lg:text-5xl">Sign In</h1>
        <SignUpForm />
        <Divider />
        <p className="flex flex-wrap items-center justify-center gap-1">
          <span>Already registered?</span>
          <Link to="/sign-in" className="text-blue-500 font-bold">
            Sign in here!
          </Link>
        </p>
      </section>
    </div>
  );
};

export default SignUpPage;
