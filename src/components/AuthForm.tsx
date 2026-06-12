"use client";

import { Formik, Form } from "formik";
import { Schema } from "yup";
import FormField from "@/components/FormField";
import Button from "@/components/button";
import SocialAuth from "@/components/SocialAuth";
import Link from "next/link";

type FieldConfig = {
  name: string;
  type?: string;
  placeholder?: string;
  label?: string;
};

type AuthFormProps = {
  fields: FieldConfig[];
  initialValues: Record<string, string>;
  validationSchema: Schema<Record<string, string>>;
  onSubmit: (values: Record<string, string>) => void;
  buttonText: string;
  showSocialAuth?: boolean;
  showDivider?: boolean;
  dividerText?: string;
  footerLink?: {
    text: string;
    href: string;
    linkText: string;
  };
};

export default function AuthForm({
  fields,
  initialValues,
  validationSchema,
  onSubmit,
  buttonText,
  showSocialAuth = false,
  showDivider = false,
  dividerText = "or login with",
  footerLink,
}: AuthFormProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form className="flex flex-col gap-6">
            {fields.map((field) => (
              <div key={field.name} className="flex flex-col gap-2">
                {field.label && (
                  <label className="text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                )}
                <FormField
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              </div>
            ))}

            <Button type="submit" className="mt-2 cursor-pointer">
              {buttonText}
            </Button>

            {showDivider && (
              <div className="flex items-center gap-4 my-2">
                <div className="flex-1 h-px bg-gray-300" />
                <span className="text-sm font-semibold text-gray-700">
                  {dividerText}
                </span>
                <div className="flex-1 h-px bg-gray-300" />
              </div>
            )}
          </Form>
        )}
      </Formik>

      {showSocialAuth && (
        <div className="mt-6">
          <SocialAuth />
        </div>
      )}

      {footerLink && (
        <div className="mt-8 text-center text-sm text-gray-700">
          {footerLink.text}{" "}
          <Link
            href={footerLink.href}
            className="text-blue-600 font-bold hover:underline"
          >
            {footerLink.linkText}
          </Link>
        </div>
      )}
    </div>
  );
}
