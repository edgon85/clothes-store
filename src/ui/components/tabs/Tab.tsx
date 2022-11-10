type Props = {
  title: string;
  isSelected: boolean;
};

export const Tab = ({ title, isSelected }: Props) => {
  return (
    <div className={`tab ${isSelected ? 'tab-selected' : ''}`}>{title}</div>
  );
};
