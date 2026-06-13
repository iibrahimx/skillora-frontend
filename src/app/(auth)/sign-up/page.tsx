"use client";

import AuthLayout from "@/components/AuthLayout";
import AuthForm from "@/components/AuthForm";
import * as Yup from "yup";

const signUpSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(5, "Min 5 characters")
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
          {
            name: "role",
            type: "text",
            placeholder: "employee / manager / admin",
            label: "Role",
          },
          {
            name: "department",
            type: "text",
            placeholder: "Department ID",
            label: "Department ID",
          },
        ]}
        initialValues={{
          name: "",
          email: "",
          password: "",
          role: "employee",
          department: "PUT_REAL_DEPARTMENT_ID_HERE",
        }}
        validationSchema={signUpSchema}
        onSubmit={async (values) => {
          try {
            const token = localStorage.getItem("token");
            console.log("TOKEN:", token);
            console.log("VALUES:", values);

            const res = await fetch(
              "https://skillora-bi8e.onrender.com/api/auth/register",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(values),
              }
            );

            const data = await res.json();
            console.log("ALIYATOBJECT:", data);
            if (!res.ok) {
              throw new Error(data.error || "Signup failed");
            }

            console.log("User created successfully:", data);
            alert("User created successfully!");
          } catch (error) {
            console.log("FULL ERROR:", error);

            if (error instanceof Error) {
              alert(error.message);
            } else {
              alert("Something went wrong");
            }
          }
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
