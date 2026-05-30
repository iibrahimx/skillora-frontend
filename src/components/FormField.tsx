import { Field, ErrorMessage } from "formik";

type Props = {
  name: string;
  type?: string;
  placeholder?: string;
};

export default function FormField({ name, type = "text", placeholder }: Props) {
  return (
    <div>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border p-3 rounded-lg"
      />

      <ErrorMessage
        name={name}
        component="p"
        className="text-red-500 text-sm"
      />
    </div>
  );
}