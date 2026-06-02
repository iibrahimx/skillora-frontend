"use client";

import AuthLayout from "@/components/AuthLayout";
import AuthForm from "@/components/AuthForm";
import * as Yup from "yup";

const signUpSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
});

export default function SignUpPage() {
  return (
    <AuthLayout title="Create account" subtitle="Sign up to get started">
      <AuthForm
        fields={[
          {
            name: "name",
            type: "text",
            placeholder: "Enter your full name",
            label: "Full Name",
          },
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
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
        buttonText="Create Account"
        showSocialAuth={true}
        showDivider={true}
        dividerText="or sign up with"
        footerLink={{
          text: "Already have an account?",
          href: "/sign-in",
          linkText: "Log in",
        }}
      />
    </AuthLayout>
  );
}
