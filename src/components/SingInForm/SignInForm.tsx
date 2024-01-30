import React from 'react';
import useSignInForm from './SignInForm.hook';
import AuthSubmitBtn from 'components/AuthSubmitBtn';
import AuthInputBlock from 'components/AuthInputBlock';

const SignInForm: React.FC = () => {
  const { errors, formRegister, isValid, onSubmit } = useSignInForm();

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <AuthInputBlock
        id="email"
        label="Email"
        type="email"
        register={formRegister.email}
        error={errors.email?.message}
      />
      <AuthInputBlock
        id="password"
        label="Password"
        type="password"
        register={formRegister.password}
        error={errors.password?.message}
      />
      <AuthSubmitBtn className="self-center mt-6" disabled={!isValid}>
        Sign In
      </AuthSubmitBtn>
    </form>
  );
};

export default SignInForm;
