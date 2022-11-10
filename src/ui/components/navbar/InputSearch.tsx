import { CloseIcon, SearchIcon } from '../../../assets/icons';

export const InputSearch = () => {
  return (
    <div className="input-search">
      <SearchIcon size="24" />
      <input type="text" placeholder="Buscar..." />
      <div className="close">
        <CloseIcon size="24" />
      </div>
    </div>
  );
};
