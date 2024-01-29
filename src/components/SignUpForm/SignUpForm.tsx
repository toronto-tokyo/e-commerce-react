import React from 'react';
import useSignUpForm from './SignUpForm.hook';
import AuthInputBlock from 'components/AuthInputBlock';

const SignUpForm = () => {
  const { formRegister, onSubmit, errors, isValid } = useSignUpForm();

  return (
    <form onSubmit={onSubmit}>
      <AuthInputBlock
        id="email"
        type="email"
        label="Email"
        register={formRegister.email}
        error={errors.email?.message}
      />
      <AuthInputBlock
        id="password"
        type="password"
        label="Password"
        register={formRegister.password}
        error={errors.password?.message}
      />
      <AuthInputBlock
        id="password"
        type="password"
        label="Confirm password"
        register={formRegister.confirmPassword}
        error={errors.confirmPassword?.message}
      />
      <AuthInputBlock
        id="firstName"
        type="text"
        label="First name"
        register={formRegister.firstName}
        error={errors.firstName?.message}
      />
      <AuthInputBlock
        id="lastName"
        type="text"
        label="Last name"
        register={formRegister.lastName}
        error={errors.lastName?.message}
      />
      <AuthInputBlock
        id="dateOfBirth"
        type="date"
        label="Date of birth"
        register={formRegister.dateOfBirth}
        error={errors.dateOfBirth?.message}
      />
      <button type="submit" className="bg-slate-300" disabled={isValid}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
