import { SubmitHandler, useForm } from "react-hook-form";
import {
  LoginFormType,
  loginSchema,
} from "@/features/auth/components/login-form/validate";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserDto } from "@/features/auth/types";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export const useLoginForm = () => {
  const router = useRouter();
  const form = useForm<LoginFormType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormType> = async (data) => {
    const res = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({ ...data }),
    });
    const result: UserDto = await res.json();

    if ("data" in result) {
      toast.success("Welcome back!");
      router.push("/profile");
    } else {
      toast.error(result.error || "Some error");
    }
  };

  return {
    form,
    onSubmit,
  };
};
