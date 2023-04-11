import { useState } from 'react';
import { CheckeEnabledIcon, UncheckedEnabledIcon } from '../../../assets/icons';
import { Filter } from '../../../types';

type Props = {
  filter: Filter;
  onClick: (isChecked: boolean, color: string) => void;
};

export const DropdownItem = ({ filter, onClick }: Props) => {
  const [isSelected, setIsSelected] = useState(true);

  const handleClick = () => {
    setIsSelected((prev) => !prev);
    onClick(isSelected, filter.id);
  };

  return (
    <li onClick={handleClick}>
      {!isSelected ? (
        <CheckeEnabledIcon size="22" />
      ) : (
        <UncheckedEnabledIcon size="22" />
      )}
      <span>{filter.name}</span>
    </li>
  );
};
