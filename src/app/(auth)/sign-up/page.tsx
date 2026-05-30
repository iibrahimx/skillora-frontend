"use client";

import AuthLayout from "@/components/AuthLayout";
import FormField from "@/components/FormField";
import Button from "@/components/button";
import SocialAuth from "@/components/SocialAuth";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const signUpSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
});

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Create account"
      subtitle="Sign up to get started"
    >
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <div className="flex flex-col gap-8">

              <FormField name="name" placeholder="Full Name" />
              <FormField name="email" placeholder="Email" />
              <FormField name="password" placeholder="Password" />

              <Button type="submit">
                Create Account
              </Button>

            </div>
          </Form>
        )}
      </Formik>

      <div className="my-8" />

      <SocialAuth />
    </AuthLayout>
  );
}