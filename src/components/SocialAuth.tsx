import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";

export default function SocialAuth() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      <button className="flex items-center justify-center rounded-xl border bg-white py-4 shadow-sm hover:bg-gray-50">
        <FcGoogle size={24} />
      </button>

      <button className="flex items-center justify-center rounded-xl border bg-white py-4 shadow-sm hover:bg-gray-50">
        <FaApple size={24} />
      </button>

      <button className="flex items-center justify-center rounded-xl border bg-white py-4 shadow-sm hover:bg-gray-50">
        <FaFacebookF size={24} />
      </button>
    </div>
  );
}