import { useState } from 'react';
import { Filter, Filtrado, Product } from '../../types';
import { Dropdown } from '../../ui';

type Props = {
  filterData: Filter;
  onChange: (filtrado: Filtrado) => void;
  typeFilter: string;
};

export const FilterSeccion = ({ onChange, filterData, typeFilter }: Props) => {
  const [filterSelected, setFilterSelected] = useState<Set<string>>(new Set());

  const handleChangeColor = (isChecked: boolean, idFilter: string) => {
    const draft = structuredClone(filterSelected);

    if (isChecked) {
      draft.add(idFilter);
    } else {
      draft.delete(idFilter);
    }

    onChange(
      draft.size
        ? (product) => draft.has(product[typeFilter as keyof Product])
        : null
    );
    setFilterSelected(draft);
  };

  return (
    <>
      <Dropdown onClickFilter={handleChangeColor} filter={filterData} />
    </>
  );
};
