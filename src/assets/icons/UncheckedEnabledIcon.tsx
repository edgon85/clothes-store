type Props = {
  size?: string;
};

export const UncheckedEnabledIcon = ({ size = '16' }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="21" height="21" rx="5.5" fill="white" />
      <rect x="0.5" y="0.5" width="21" height="21" rx="5.5" stroke="black" />
    </svg>
  );
};
