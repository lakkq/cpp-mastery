interface BookIconProps {
  iconColor: string;
}

export default function MapIcon({ iconColor }: BookIconProps) {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 1L1 3.5V15L5 12.5L9 15L13 12.5V1L9 3.5L5 1Z"
        stroke={iconColor}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
      <path d="M5 1V12.5" stroke={iconColor} strokeWidth="1.1" />
      <path d="M9 3.5V15" stroke={iconColor} strokeWidth="1.1" />
    </svg>
  );
}
