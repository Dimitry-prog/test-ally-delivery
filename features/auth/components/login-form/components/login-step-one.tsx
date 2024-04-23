"use client";

import { Controller, useFormContext } from "react-hook-form";
import { LoginFormType } from "@/features/auth/components/login-form/validate";
import Input from "@/shared/components/ui/input";
import Button from "@/shared/components/ui/button";
import { Dispatch, SetStateAction } from "react";

type LoginStepOneProps = {
  setStep: Dispatch<SetStateAction<number>>;
};

const LoginStepOne = ({ setStep }: LoginStepOneProps) => {
  const { control, formState, trigger } = useFormContext<LoginFormType>();

  const handleNextStep = async () => {
    const isValid = await trigger("email");
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            label="Email"
            placeholder="Enter email here"
            error={formState.errors.email?.message}
            {...field}
          />
        )}
      />

      <Button onClick={handleNextStep}>Next</Button>
    </div>
  );
};

export default LoginStepOne;
