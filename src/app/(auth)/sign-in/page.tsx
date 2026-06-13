"use client";
import AuthLayout from "@/components/AuthLayout";
import AuthForm from "@/components/AuthForm";
import { signInSchema } from "@/lib/validation/signInSchema";

export default function SignInPage() {
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
            const res = await fetch(
              "https://skillora-bi8e.onrender.com/api/auth/login",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              }
            );

            const data = await res.json();

            console.log("LOGIN RESPONSE:", data);

            if (!res.ok) {
              throw new Error(data.message || "Login failed");
            }

            localStorage.setItem("token", data.token);

            alert("Login successful!");
          } catch (error) {
            console.error(error);

            if (error instanceof Error) {
              alert(error.message);
            }
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
