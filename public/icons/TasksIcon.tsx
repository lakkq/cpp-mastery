interface BookIconProps {
  iconColor: string;
}

export default function TasksIcon({ iconColor }: BookIconProps) {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="2"
        width="11"
        height="11"
        rx="2"
        stroke={iconColor}
        strokeWidth="1.1"
      />
      <path d="M4.5 1V3" stroke={iconColor} strokeWidth="1.1" />
      <path d="M9.5 1V3" stroke={iconColor} strokeWidth="1.1" />
      <path d="M4 6.5H10" stroke={iconColor} strokeWidth="1.1" />
      <path d="M4 9H8.5" stroke={iconColor} strokeWidth="1.1" />
    </svg>
  );
}
