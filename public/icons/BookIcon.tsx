interface BookIconProps {
  iconColor?: string;
}

export default function BookIcon({ iconColor = 'currentColor' }: BookIconProps) {
  return (
    <svg
      width="14"
      height="17"
      viewBox="0 0 14 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 3.5C1.5 2.39543 2.39543 1.5 3.5 1.5H10C11.1046 1.5 12 2.39543 12 3.5V14.5H3.5C2.39543 14.5 1.5 13.6046 1.5 12.5V3.5Z"
        stroke={iconColor}
        strokeWidth="1.2"
      />
      <path d="M4 4.5H9" stroke={iconColor} strokeWidth="1.1" />
      <path d="M4 6.5H9" stroke={iconColor} strokeWidth="1.1" />
    </svg>
  );
}
