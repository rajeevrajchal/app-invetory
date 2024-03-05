import AuthService from "@/api/services/auth.service";
import { FORGET_PASSWORD, RESET_PASSWORD } from "@/api/types/auth.type";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useAuthMutate = () => {
  const router = useRouter();
  const forgetPassword = useMutation({
    mutationFn: (email: string) => AuthService.forgetPassword(email),
  });

  const forgetPasswordWithOTP = useMutation({
    mutationFn: (payload: FORGET_PASSWORD) =>
      AuthService.forgetPasswordWithOtp(payload),
    onSuccess: (data: any) => {
      router.replace(data?.link);
    },
  });

  const resetPassword = useMutation({
    mutationFn: (payload: RESET_PASSWORD) => AuthService.resetPassword(payload),
  });

  return {
    forgetPassword,
    forgetPasswordWithOTP,
    resetPassword,
  };
};

export default useAuthMutate;
