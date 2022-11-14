import { useEffect, useState } from 'react';
import { CheckeEnabledIcon, UncheckedEnabledIcon } from '../../../assets/icons';
import { Filter } from '../../../types';

type Props = {
  filter: Filter;
  onClick?: (filter: Filter | null) => void;
};

export const DropdownItem = ({ filter, onClick }: Props) => {
  const [isSelecte, setIsSelecte] = useState(false);
  const [filtered, setFiltered] = useState<Filter[]>([]);

  const handleClick = (filter: Filter) => {
    setIsSelecte((prev) => !prev);
  };

  return (
    <li onClick={() => handleClick(filter)}>
      {isSelecte ? (
        <CheckeEnabledIcon size="22" />
      ) : (
        <UncheckedEnabledIcon size="22" />
      )}
      <span>{filter.name}</span>
    </li>
  );
};
