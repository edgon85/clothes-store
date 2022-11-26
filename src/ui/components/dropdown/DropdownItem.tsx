import { useState } from 'react';
import { CheckeEnabledIcon, UncheckedEnabledIcon } from '../../../assets/icons';
import { Filter } from '../../../types';

type Props = {
  filter: Filter;
  onClick: (isChecked: boolean, color: string) => void;
};

export const DropdownItem = ({ filter, onClick }: Props) => {
  const [isSelecte, setIsSelecte] = useState(true);

  const handleClick = () => {
    setIsSelecte((prev) => !prev);
    onClick(isSelecte, filter.id);
  };

  return (
    <li onClick={handleClick}>
      {!isSelecte ? (
        <CheckeEnabledIcon size="22" />
      ) : (
        <UncheckedEnabledIcon size="22" />
      )}
      <span>{filter.name}</span>
    </li>
  );
};
