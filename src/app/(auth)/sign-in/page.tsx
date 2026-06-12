"use client";
import AuthLayout from "@/components/AuthLayout";
import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validation/signInSchema";
import { useLogin } from "@/hooks/useLogin";
import { useAuthStore } from "@/store/auth-store";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const { mutateAsync, isPending } = useLogin();
  const setAuth = useAuthStore((state) => state.setAuth);

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Login to your account"
      leftImgSrc="/IMAGES/auth/sign-in.png"
    >
      <AuthForm
        fields={[
          {
            name: "email",
            type: "email",
            placeholder: "Enter your email",
            label: "Email Address",
          },
          {
            name: "password",
            type: "password",
            placeholder: "Enter your password",
            label: "Password",
          },
        ]}
        initialValues={{ email: "", password: "" }}
        validationSchema={signInSchema}
        onSubmit={async (values) => {
          try {
            const result = await mutateAsync({
              email: values.email,
              password: values.password,
            });

            console.log("LOGIN RESPONSE");
            console.log(result);

            setAuth(result.token, result.user);

            router.push("/dashboard");
          } catch (error) {
            console.error(error);
          }
        }}
        buttonText="Log in"
        showSocialAuth={true}
        showDivider={true}
        dividerText="or login with"
        footerLink={{
          text: "Don't have an account?",
          href: "/sign-up",
          linkText: "Sign up",
        }}
      />
    </AuthLayout>
  );
}
