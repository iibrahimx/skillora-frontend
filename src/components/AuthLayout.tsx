import Image from "next/image";

export default function AuthLayout({
  children,
  title,
  subtitle,
  leftImgSrc = "/IMAGES/auth/sign-up.png",
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  leftImgSrc?: string;
}) {
  return (
    <div className="min-h-screen flex bg-[#F5F5F5]">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src={leftImgSrc}
          alt="auth image"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute top-10 left-10 text-white">
          <h1 className="text-4xl font-bold">SkillOra</h1>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full lg:w-1/2 justify-center px-8 overflow-y-auto">
        <div className="w-full max-w-xl py-8">
          <h1 className="text-center text-5xl font-bold">{title}</h1>

          <p className="mt-4 text-center text-gray-500 text-xl">{subtitle}</p>

          <div className="mt-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
