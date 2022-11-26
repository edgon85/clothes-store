import { useEffect, useRef, useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '../../../assets/icons';
import { Filter } from '../../../types';
import { DropdownItem } from './';

type Props = {
  filter: Filter;
  onClickFilter: (isChecked: boolean, color: string) => void;
};

export const Dropdown = ({ filter, onClickFilter }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { items } = filter;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (evt: any) => {
      if (isCollapsed && ref.current && !ref.current.contains(evt.target)) {
        setIsCollapsed(false);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [isCollapsed]);

  return (
    <div className="dropdown" ref={ref}>
      <button
        className="select"
        aria-expanded={isCollapsed ? 'true' : 'false'}
        onClick={() => setIsCollapsed((prev) => !prev)}
      >
        <span className="selected">{filter.name}</span>
        {isCollapsed ? (
          <ChevronUpIcon size="24" />
        ) : (
          <ChevronDownIcon size="24" />
        )}
      </button>
      <ul className={`menu${isCollapsed ? ' menu-open' : ''}`}>
        {items?.map((filter) => (
          <DropdownItem
            key={filter.id}
            filter={filter}
            onClick={onClickFilter}
          />
        ))}
      </ul>
    </div>
  );
};
