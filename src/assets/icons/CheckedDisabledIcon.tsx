type Props = {
  size?: string;
};

export const CheckedDisabledIcon = ({ size = '16' }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="22" height="22" rx="6" fill="#80D8D2" />
      <path
        d="M5.40137 11.7143L9.06803 16L16.4014 6"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
