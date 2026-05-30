import ComingSoon from "@/components/common/ComingSoon";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF } from "react-icons/fa";

export default function SignInPage() {
  return (
    <>
      {/* left  image Section Goes Here */}
      <div className="min-h-screen flex bg-[#F5F5F5]">
        {/* Left Section */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-gray-200">
          <Image
            src="/IMAGES/auth/signin.png"
            alt="Student"
            className="absolute inset-0 h-full w-full object-cover"
            width={50}
            height={50}
          />

          <div className="absolute top-10 left-10 flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-indigo-600"></div>
            <h1 className="text-5xl font-bold">SkillOra</h1>
          </div>

          <div className="absolute bottom-12 left-10 right-10 text-white">
            <p className="text-3xl leading-relaxed">
              “SkillOra has been a game changer for me. The content is clear,
              professional, and easy to apply in real life.”
            </p>

            <p className="mt-4 text-lg">
              Promise Adu - Banker
            </p>
          </div>
        </div>

        {/* Right Section Goes Here */}
        <div className="flex w-full lg:w-1/2 items-center justify-center px-8">
          <div className="w-full max-w-xl">
            <h1 className="text-center text-5xl font-bold">
              Welcome back
            </h1>
            <p className="mt-4 text-center text-gray-500 text-xl">
              Enter your Corporate credentials to manage compliance and training.
            </p>


            {/* Toggle */}
            <div className="mt-10 flex rounded-2xl bg-gray-200 p-1 shadow-md">
              <button className="flex-1 py-4 text-gray-500">
                Sign up
              </button>

              <button className="flex-1 rounded-2xl bg-white py-4 font-semibold shadow">
                Log in
              </button>
            </div>


            {/* Form */}
            <form className="mt-10 space-y-8">
              <div>
                <label className="mb-3 block text-lg font-medium">
                  Email Address
                </label>


                <input
                  type="email"
                  placeholder="johndoe@skillora.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-4 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="mb-3 block text-lg font-medium">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="*************"
                  className="w-full rounded-lg border border-gray-300 px-4 py-4 outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 py-4 text-xl font-semibold text-white hover:bg-indigo-700"
              >
                Log in to Dashboard
              </button>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-lg text-gray-600">
                    Stay logged in
                  </span>
                </label>

                <button
                  type="button"
                  className="text-indigo-600"
                >
                  Forgot Password?
                </button>
              </div>
            </form>

            {/* Divider */}
            <div className="my-10 flex items-center">
              <div className="h-px flex-1 bg-gray-300"></div>

              <span className="mx-4 text-gray-500">
                Or Log in with
              </span>

              <div className="h-px flex-1 bg-gray-300"></div>
            </div>
            {/* Social Login */}
            <div className="grid grid-cols-3 gap-4">
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
          </div>
        </div>
        </div>
      </>
      );
    }

