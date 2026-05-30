"use client";
import Link from "next/link";
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
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <FormField
                  name="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <FormField
                  name="password"
                  placeholder="Enter your password"
                />
                <div className="pt-4 mb-6">
                  <Button type="submit">
                    Log in
                  </Button>

                </div>
                <div className="flex items-center my-6">
                  <div className="flex-1 h-px bg-gray-300" />

                  <span className="px-4 text-sm font-semibold text-gray-700">
                    or login with
                  </span>

                  <div className="flex-1 h-px bg-gray-300" />
                </div>




              </div>
            </Form>
          )}
        </Formik>

        <SocialAuth />

        <div className="mt-10 text-center text-sm text-gray-700">
          Don’t have an account?{" "}
          <Link
            href="/sign-up"
            className="text-blue-600 font-bold hover:underline"
          >
            Sign up
          </Link>
        </div>

      </AuthLayout>


    </>
  );
}

