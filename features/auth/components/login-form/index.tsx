"use client";

import { FormProvider } from "react-hook-form";
import { useState } from "react";
import LoginStepOne from "@/features/auth/components/login-form/components/login-step-one";
import LoginStepTwo from "@/features/auth/components/login-form/components/login-step-two";
import { useLoginForm } from "@/features/auth/hooks/use-login-form";

const LoginForm = () => {
  const [step, setStep] = useState(1);
  const { form, onSubmit } = useLoginForm();

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        {step === 1 && <LoginStepOne setStep={setStep} />}
        {step === 2 && <LoginStepTwo setStep={setStep} />}
      </form>
    </FormProvider>
  );
};

export default LoginForm;
