import SignUpForm from 'components/SignUpForm';
import React from 'react';

const SignUpPage = () => {
  return (
    <div className="grow flex justify-center items-center px-3">
      <section className="bg-white p-5 rounded-md basis-3/5 flex flex-col">
        <h1 className="self-center">Sign In</h1>
        <SignUpForm />
      </section>
    </div>
  );
};

export default SignUpPage;
