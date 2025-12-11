interface BookIconProps {
  iconColor: string;
}

export default function ProfileIcon({ iconColor }: BookIconProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10"
        cy="8.33337"
        r="2.5"
        stroke={iconColor}
        strokeLinecap="round"
      />
      <circle cx="10" cy="10" r="7.5" stroke={iconColor} />
      <path
        d="M15 15.5883C14.7051 14.7023 14.0552 13.9194 13.1512 13.361C12.2472 12.8027 11.1395 12.5 10 12.5C8.8605 12.5 7.75285 12.8027 6.84882 13.361C5.94479 13.9194 5.29492 14.7023 5 15.5883"
        stroke={iconColor}
        strokeLinecap="round"
      />
    </svg>
  );
}
