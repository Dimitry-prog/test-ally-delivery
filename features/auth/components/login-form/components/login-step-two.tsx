"use client";

import { Controller, useFormContext } from "react-hook-form";
import { LoginFormType } from "@/features/auth/components/login-form/validate";
import Button from "@/shared/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import InputPassword from "@/shared/components/ui/input-password";

type LoginStepTwoProps = {
  setStep: Dispatch<SetStateAction<number>>;
};

const LoginStepTwo = ({ setStep }: LoginStepTwoProps) => {
  const { control, formState } = useFormContext<LoginFormType>();

  return (
    <div className="flex flex-col gap-4">
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <InputPassword
            label="Password"
            placeholder="Enter password here"
            error={formState.errors.password?.message}
            {...field}
          />
        )}
      />
      <div className="flex gap-4">
        <Button onClick={() => setStep((prev) => prev - 1)}>🔙</Button>
        <Button type="submit">Submit</Button>
      </div>
    </div>
  );
};

export default LoginStepTwo;
