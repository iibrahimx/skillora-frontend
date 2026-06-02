interface ProgressRingProps {
  percentage: number;
}

export default function ProgressRing({ percentage }: ProgressRingProps) {
  const radius = 26;
  const strokeWidth = 9;

  const normalizedRadius = radius - strokeWidth / 2;

  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <svg height={radius * 2} width={radius * 2} className="-rotate-90">
        <circle
          stroke="#ACA0A0"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          stroke="#2CAA36"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{
            strokeDashoffset,
          }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>

      <span className="absolute text-xs font-bold text-[#2CAA36]">
        {percentage}%
      </span>
    </div>
  );
}
