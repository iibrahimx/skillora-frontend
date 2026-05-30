"use client";
import ComingSoon from "@/components/common/ComingSoon";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";
import AuthLayout from "@/components/AuthLayout";
import Input from "@/components/Input";
import Button from "@/components/button";
import SocialAuth from "@/components/SocialAuth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signInSchema } from "@/lib/validation/signInSchema";
import FormField from "@/components/FormField";


export default function SignInPage() {
  return (
    <>

      <AuthLayout
        title="Welcome back"
        subtitle="Login to your account"
      >

      <Formik
  initialValues={{ email: "", password: "" }}
  validationSchema={signInSchema}
  onSubmit={(values) => {
    console.log(values);
  }}
>
  {() => (
    <Form>
   <div className="flex flex-col space-y-6">

    <FormField name="email" placeholder="Email" />

    <FormField name="password" placeholder="Password" />

    <div className="pt-4">
      <Button type="submit">
        Log in
      </Button>
    </div>

  </div>
</Form>
  )}
</Formik>

        <SocialAuth />

      </AuthLayout>


    </>
  );
}

