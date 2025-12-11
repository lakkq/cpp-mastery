interface BookIconProps {
  iconColor: string;
}

export default function SparkIcon({ iconColor }: BookIconProps) {
  return (
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 1L7.2 5.2H11.5L8 7.8L9.2 12L6 9.4L2.8 12L4 7.8L0.5 5.2H4.8L6 1Z"
        stroke={iconColor}
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}
