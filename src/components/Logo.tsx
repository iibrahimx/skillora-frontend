import Image from "next/image";

type LogoProps = {
  width?: number;
  height?: number;
};

export default function Logo({
  width = 96,
  height = 96,
}: LogoProps) {
  return (
    <Image
      src="/icons/skillora-logo.svg"
      alt="SkillOra Logo"
      width={width}
      height={height}
      priority
    />
  );
}




