import Image from "next/image";

export default function SidebarHeader() {
  return (
    <div className="flex flex-col items-center gap-3 px-6 py-4">
      <Image
        src="/icons/skillora-logo.svg"
        alt="SkillOra Logo"
        width={64}
        height={64}
        priority
        className="brightness-0"
      />

      <h1 className="text-xl text-white font-bold tracking-tight">SkillOra</h1>
    </div>
  );
}
