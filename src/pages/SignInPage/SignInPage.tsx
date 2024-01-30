import React from 'react';

import SignInForm from 'components/SingInForm';

const SignInPage: React.FC = () => {
  return (
    <div className="grow flex justify-center items-center px-3 py-10">
      <section className="bg-white p-5 rounded-md basis-3/5 min-w-72 max-w-2xl flex flex-col">
        <SignInForm />
      </section>
    </div>
  );
};

export default SignInPage;
